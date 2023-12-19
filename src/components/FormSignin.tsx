"use client"

import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm, SubmitHandler } from "react-hook-form"
import { Form } from "@/patterns/Form"
import { FiEye, FiEyeOff } from "react-icons/fi"
import { useState } from "react"
import { useTranslations } from "next-intl"
import { getUserByEmail, signinUser } from "@/lib/supabase/auth"
import { UserNotFoundError } from "@/errors/UserNotFound"
import { AiOutlineLoading } from "react-icons/ai"
import { InvalidCredentialsError } from "@/errors/InvalidCredentials"

export const FormSignin = () => {
  const [message, setMessage] = useState<{ text: string, error: boolean } | null>(null)
  const [isShowing, setIsShowing] = useState<{ password: boolean, reenter: boolean }>({
    password: false,
    reenter: false
  })

  const t = useTranslations("Sign")
  const messages = {
    email: t("email"),
    password: t("password"),
    signin: t("signin"),
    "user-sucessfully-signin": t("user-sucessfully-signin"),
    "user-invalid-credentials": t("user-invalid-credentials")
  }

  const errorMessages = {
    email: {
      min: t("errors.email.min"),
      max: t("errors.email.max"),
      isValid: t("errors.email.isValid")
    },
    password: {
      min: t("errors.password.min"),
      max: t("errors.password.max"),
      isWeak: t("errors.password.isWeak"),
      isStrong: t("errors.password.isStrong")
    }
  }

  const signinUserSchema = z.object({
    email: z.string()
      .trim()
      .toLowerCase()
      .email(errorMessages.email.isValid)
      .min(1, errorMessages.email.min)
      .max(80, errorMessages.email.max),
    password: z.string()
      .min(8, errorMessages.password.min)
      .max(100, errorMessages.password.max)

  })

  type signinUserFormData = z.infer<typeof signinUserSchema>

  const signinUserForm = useForm<signinUserFormData>({
    resolver: zodResolver(signinUserSchema)
  })
  const { handleSubmit, formState: { isSubmitting } } = signinUserForm

  const handleSigninUser: SubmitHandler<signinUserFormData> = async (data) => {
    try {
      const { users } = await getUserByEmail(data.email)

      if (users && users.length < 1) {
        throw new InvalidCredentialsError()
      }

      const { error } = await signinUser(data.email, data.password)

      if(error?.message === "Invalid login credentials") {
        throw new InvalidCredentialsError()
      }

      if(error) {
        throw error
      }      
      setMessage({ text: messages["user-sucessfully-signin"], error: false })

    } catch (err) {
      if(err instanceof InvalidCredentialsError) {
        setMessage({ text: messages["user-invalid-credentials"], error: true })

      } else {
        throw err
      }
    }
  }

  return (
    <FormProvider {...signinUserForm}>
      <form onSubmit={handleSubmit(handleSigninUser)}>
        <div className="flex flex-col gap-y-4">

          <Form.Field>
            <Form.InputField>
              <Form.Input name="email" placeholder={messages.email} />
            </Form.InputField>

            <Form.ErrorMessage field="email" />
          </Form.Field>

          <Form.Field>
            <Form.InputField>
              <Form.Input type="password" name="password" placeholder={messages.password} />
              {/* <Form.Input type={isShowing.password ? "text" : "password"} name="password" placeholder={messages.password} />

              <button onClick={() => setIsShowing((value) => ({ ...value, password: !value.password }))}>
                {isShowing.password ? <FiEyeOff /> : <FiEye />}
              </button> */}
            </Form.InputField>
            <Form.ErrorMessage field="password" />
          </Form.Field>

          {
            message &&
            <p className={`text-sm text-center ${message.error ? "text-red-500" : "text-emerald-600"}`}>
              {message.text}!
            </p>
          }

          <button className="contained py-3" disabled={isSubmitting}>
            {isSubmitting ?
              <span className="animate-spin">
                <AiOutlineLoading size={30} />
              </span>
              :
              messages.signin
            }
          </button>

        </div>
      </form>
    </FormProvider>
  )
}
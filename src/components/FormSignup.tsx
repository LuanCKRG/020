"use client"

import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm, SubmitHandler } from "react-hook-form"
import { Form } from "@/patterns/Form"
import { FiEye, FiEyeOff } from "react-icons/fi"
import { useState } from "react"
import { useTranslations } from "next-intl"
import { AiOutlineLoading } from "react-icons/ai"
import { createUser, getUserByEmail } from "@/lib/supabase/auth"
import { useRouter } from "next/navigation"
import { UserAlreadyExistsError } from "@/errors/UserAlreadyExists"



export const FormSignup = () => {
  const [message, setMessage] = useState<{ text: string, error: boolean } | null>(null)
  const [isShowing, setIsShowing] = useState<{ password: boolean, reenter: boolean }>({
    password: false,
    reenter: false
  })

  const {refresh} = useRouter()

  const t = useTranslations("Sign")
  const messages = {
    name: t("name"),
    email: t("email"),
    password: t("password"),
    "re-enter": t("re-enter"),
    signup: t("signup"),
    "user-already-exist": t("user-already-exist"),
    "user-created": t("user-created")
  }
  const errorMessages= {
    name: {
      min: t("errors.name.min"),
      max: t("errors.name.max")
    },
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
    },
    reenter: {
      isEqual: t("errors.reenter.isEqual")
    }
  }

  const createUserSchema = z.object({
    name: z.string()
      .trim()
      .min(1, errorMessages.name.min)
      .max(80, errorMessages.name.max)
      .transform(
        (name) => {
          return name.split(" ").map(
            (word) => {
              return word[0].toLocaleUpperCase().concat(word.substring(1))
            }
          ).join(" ")
        }
      ),
    email: z.string()
      .trim()
      .toLowerCase()
      .min(1, errorMessages.email.min)
      .max(80, errorMessages.email.max)
      .email(errorMessages.email.isValid),
    password: z.string()
      .min(8, errorMessages.password.min)
      .max(100, errorMessages.password.max)
      .regex(new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"), errorMessages.password.isWeak),
    reenter: z.string()

  }).refine(
    ({ password, reenter }) => password === reenter, {
    path: ["reenter"],
    message: errorMessages.reenter.isEqual
  })

  type createUserFormData = z.infer<typeof createUserSchema>


  const createUserForm = useForm<createUserFormData>({
    resolver: zodResolver(createUserSchema),
    mode: "onSubmit",
    reValidateMode: "onSubmit"
  })
  const { handleSubmit, watch, formState: { isSubmitting } } = createUserForm

  const handleCreateUser: SubmitHandler<createUserFormData> = async (data) => {
    try {
      const {users} = await getUserByEmail(data.email)

      if(users && users.length > 1) {
        throw new UserAlreadyExistsError()
      }
  
      await createUser(data.name, data.email, data.password).then(
        () => setMessage({text: messages["user-created"], error: false})
      )

      refresh()
      
    } catch (err) {
      if(err instanceof UserAlreadyExistsError) {
        setMessage({text: messages["user-already-exist"], error: true})
      } else {
        throw err
      }
      
    }
  }

  return (
    <FormProvider {...createUserForm}>
      <form onSubmit={handleSubmit(handleCreateUser)}>
        <div className="flex flex-col gap-y-4">

          <Form.Field>
            <Form.InputField>
              <Form.Input name="name" placeholder={messages.name} />
            </Form.InputField>

            <Form.ErrorMessage field="name" />
          </Form.Field>

          <Form.Field>
            <Form.InputField>
              <Form.Input name="email" placeholder={messages.email} />
            </Form.InputField>

            <Form.ErrorMessage field="email" />
          </Form.Field>

          <Form.Field>
            <Form.InputField>
              <Form.Input type={isShowing.password ? "text" : "password"} name="password" placeholder={messages.password} />

              <button onClick={() => setIsShowing((value) => ({ ...value, password: !value.password }))}>
                {isShowing.password ? <FiEyeOff /> : <FiEye />}
              </button>
            </Form.InputField>

            <Form.ErrorMessage field="password" />
          </Form.Field>

          <Form.Field>
            <Form.InputField>
              <Form.Input type={isShowing.reenter ? "text" : "password"} name="reenter" placeholder={messages["re-enter"]} />

              <button onClick={() => setIsShowing((value) => ({ ...value, reenter: !value.reenter }))}>
                {isShowing.reenter ? <FiEyeOff /> : <FiEye />}
              </button>
            </Form.InputField>

            <Form.ErrorMessage field="reenter" />
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
              messages.signup
            }
          </button>

        </div>
      </form>
    </FormProvider>
  )
}
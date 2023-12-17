"use client"

import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm, SubmitHandler } from "react-hook-form"
import { Form } from "@/patterns/Form"
import { FiEye, FiEyeOff } from "react-icons/fi"
import { useState } from "react"
import { useTranslations } from "next-intl"

export const FormSignin = () => {
  const t = useTranslations("Sign")
  const messages = {
    email: t("email"),
    password: t("password"),
    signup: t("signin"),
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
    email: z.string()
      .trim()
      .toLowerCase()
      .min(1, errorMessages.email.min)
      .max(80, errorMessages.email.max),
    password: z.string()
      .min(8, errorMessages.password.min)
      .max(100, errorMessages.password.max)

  })

  type createUserFormData = z.infer<typeof createUserSchema>

  const [isShowing, setIsShowing] = useState<{ password: boolean, reenter: boolean }>({
    password: false,
    reenter: false
  })

  const createUserForm = useForm<createUserFormData>({
    resolver: zodResolver(createUserSchema),
    mode: "onSubmit",
    reValidateMode: "onSubmit"
  })
  const { handleSubmit, watch, formState: { isSubmitting } } = createUserForm

  const handleCreateUser: SubmitHandler<createUserFormData> = async (data) => {

  }

  return (
    <FormProvider {...createUserForm}>
      <form onSubmit={handleSubmit(handleCreateUser)}>
        <div className="flex flex-col gap-y-4">

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

          <button className="contained py-3">
            {messages.signup}
          </button>

        </div>
      </form>
    </FormProvider>
  )
}
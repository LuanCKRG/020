"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { Form } from "@/patterns/Form";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { getUserByEmail, signinUser } from "@/lib/supabase/auth";
import { UserNotFoundError } from "@/errors/UserNotFound";
import { AiOutlineLoading } from "react-icons/ai";
import { InvalidCredentialsError } from "@/errors/InvalidCredentials";
import { useRouter } from "next/navigation";
import { createBrowserClient } from "@supabase/ssr";
import { type Session } from "@supabase/supabase-js";

export const FormSignin = () => {
  const { refresh } = useRouter();
  const [message, setMessage] = useState<{
    text: string;
    error: boolean;
  } | null>(null);
  const [isShowing, setIsShowing] = useState<{
    password: boolean;
    reenter: boolean;
  }>({
    password: false,
    reenter: false,
  });

  const t = useTranslations();

  const signinUserSchema = z.object({
    email: z
      .string()
      .trim()
      .toLowerCase()
      .email(t("sign.errors.email.isValid"))
      .min(1, t("sign.errors.email.min"))
      .max(80, t("sign.errors.email.max")),
    password: z
      .string()
      .min(6, t("sign.errors.password.min"))
      .max(100, t("sign.errors.password.max")),
  });

  type signinUserFormData = z.infer<typeof signinUserSchema>;

  const signinUserForm = useForm<signinUserFormData>({
    resolver: zodResolver(signinUserSchema),
  });
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = signinUserForm;

  const handleSigninUser: SubmitHandler<signinUserFormData> = async (data) => {
    try {
      const { users } = await getUserByEmail(data.email);

      if (users && users.length < 1) {
        throw new InvalidCredentialsError();
      }

      const { error } = await signinUser(data.email, data.password);

      if (error?.message === "Invalid login credentials") {
        throw new InvalidCredentialsError();
      }

      if (error) {
        throw error;
      }
      setMessage({ text: t("sign.signin.sucessfully"), error: false });
      // refresh();
    } catch (err) {
      if (err instanceof InvalidCredentialsError) {
        setMessage({ text: t("sign.signin.failed"), error: true });
      } else {
        throw err;
      }
    }
  };

  return (
    <FormProvider {...signinUserForm}>
      <form onSubmit={handleSubmit(handleSigninUser)}>
        <div className="flex flex-col gap-y-4">
          <Form.Field>
            <Form.InputField>
              <Form.Input name="email" placeholder={t("sign.inputs.email")} />
            </Form.InputField>

            <Form.ErrorMessage field="email" />
          </Form.Field>

          <Form.Field>
            <Form.InputField>
              <Form.Input
                type="password"
                name="password"
                placeholder={t("sign.inputs.password")}
              />
              {/* <Form.Input type={isShowing.password ? "text" : "password"} name="password" placeholder={messages.password} />

              <button onClick={() => setIsShowing((value) => ({ ...value, password: !value.password }))}>
                {isShowing.password ? <FiEyeOff /> : <FiEye />}
              </button> */}
            </Form.InputField>
            <Form.ErrorMessage field="password" />
          </Form.Field>

          {message && (
            <p
              className={`text-sm text-center ${
                message.error ? "text-red-500" : "text-emerald-600"
              }`}
            >
              {message.text}!
            </p>
          )}

          <button className="contained py-3" disabled={isSubmitting}>
            {isSubmitting ? (
              <span className="animate-spin">
                <AiOutlineLoading size={30} />
              </span>
            ) : (
              t("sign.signin.title")
            )}
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { Form } from "@/patterns/Form";
import { Link } from "@/navigation";
// import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { AiOutlineLoading } from "react-icons/ai";
import { getUserByEmail, createUser } from "@/lib/supabase/auth";
import { useRouter } from "next/navigation";
import { UserAlreadyExistsError } from "@/errors/UserAlreadyExists";

export const FormSignup = () => {
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

  const { refresh } = useRouter();

  const t = useTranslations();

  const createUserSchema = z
    .object({
      name: z
        .string()
        .trim()
        .min(1, t("sign.errors.name.min"))
        .max(80, t("sign.errors.name.max"))
        .transform((name) => {
          return name
            .split(" ")
            .map((word) => {
              return word[0].toLocaleUpperCase().concat(word.substring(1));
            })
            .join(" ");
        }),
      email: z
        .string()
        .trim()
        .toLowerCase()
        .min(1, t("sign.errors.email.min"))
        .max(80, t("sign.errors.email.max"))
        .email(t("sign.errors.email.isValid")),
      password: z
        .string()
        .min(4, t("sign.errors.password.min"))
        .max(100, t("sign.errors.password.max")),
      reenter: z.string(),
      agree: z.boolean(),
    })
    .refine(({ password, reenter }) => password === reenter, {
      path: ["reenter"],
      message: t("sign.errors.reenter.isEqual"),
    })
    .refine(({ agree }) => agree === true, {
      path: ["agree"],
      message: t("sign.errors.agree.isNotChecked"),
    });

  type createUserFormData = z.infer<typeof createUserSchema>;

  const createUserForm = useForm<createUserFormData>({
    resolver: zodResolver(createUserSchema),
  });
  const {
    handleSubmit,
    watch,
    formState: { isSubmitting },
  } = createUserForm;

  const handleCreateUser: SubmitHandler<createUserFormData> = async (data) => {
    try {
      const { users } = await getUserByEmail(data.email);

      if (users && users.length >= 1) {
        throw new UserAlreadyExistsError();
      }

      await createUser(data.name, data.email, data.password).then(() =>
        setMessage({ text: t("sign.signup.sucessfully"), error: false }),
      );

      refresh();
    } catch (err) {
      if (err instanceof UserAlreadyExistsError) {
        setMessage({
          text: t("sign.signup.failed"),
          error: true,
        });
      } else {
        throw err;
      }
    }
  };

  return (
    <FormProvider {...createUserForm}>
      <form onSubmit={handleSubmit(handleCreateUser)}>
        <div className="flex flex-col gap-y-4">
          <Form.Field>
            <Form.InputField>
              <Form.Input name="name" placeholder={t("sign.inputs.name")} />
            </Form.InputField>

            <Form.ErrorMessage field="name" />
          </Form.Field>
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
          <Form.Field>
            <Form.InputField>
              <Form.Input
                type="password"
                name="reenter"
                placeholder={t("sign.inputs.re-enter")}
              />
              {/* <Form.Input type={isShowing.reenter ? "text" : "password"} name="reenter" placeholder={messages["re-enter"]} />

              <button onClick={() => setIsShowing((value) => ({ ...value, reenter: !value.reenter }))}>
                {isShowing.reenter ? <FiEyeOff /> : <FiEye />}
              </button> */}
            </Form.InputField>

            <Form.ErrorMessage field="reenter" />
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
          <Form.Field>
            <label className="flex gap-x-3">
              <Form.Input
                className="size-4"
                type="checkbox"
                name="agree"
                placeholder={t("sign.inputs.name")}
              />
              <p className="text-primary text-sm">
                {t("sign.terms-and-policies.agree") + " "}

                <Link href="/terms-of-use" className="font-bold">
                  {t("sign.terms-and-policies.terms")}
                </Link>

                {" " + t("sign.terms-and-policies.and") + " "}

                <Link href="/privacy-policies" className="font-bold">
                  {t("sign.terms-and-policies.privacy")}
                </Link>

                {" " + t("sign.terms-and-policies.and") + " "}

                <Link href="/disclaimer" className="font-bold">
                  {t("sign.terms-and-policies.disclaimer")}
                </Link>
              </p>
            </label>

            <Form.ErrorMessage field="agree" />
          </Form.Field>

          <button className="contained py-3" disabled={isSubmitting}>
            {isSubmitting ? (
              <span className="animate-spin">
                <AiOutlineLoading size={30} />
              </span>
            ) : (
              t("sign.signup.title")
            )}
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

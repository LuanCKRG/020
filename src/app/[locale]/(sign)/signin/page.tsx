import { FormSignin } from "@/components/FormSignin"
import { useTranslations } from "next-intl"
import { GoogleButton } from "@/components/GoogleButton"
import { Link } from "@/navigation"

const SigninPage = () => {
  const t = useTranslations()

  return (
    <>
      <h2 className="font-inter text-primary text-base">
        {t("sign.signin.title")}
      </h2>

      <FormSignin />

      <p className="text-center text-sm font-light uppercase">
        {t("literal.or")}
      </p>

      <GoogleButton text={t("sign.signin.google")} />

      <p className="text-primary text-sm font-medium mt-4">
        {t("sign.signin.footer") + " "}
        <Link href="/signup" className="font-bold text-blue-700">
          {t("literal.signup")}
        </Link>
      </p>
    </>
  )
}

export const dynamic = 'force-dynamic'
export default SigninPage
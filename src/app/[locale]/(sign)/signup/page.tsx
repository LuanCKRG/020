import { FormSignup } from "@/components/FormSignup"
import { useTranslations } from "next-intl"
import {GoogleButton} from "@/components/GoogleButton"
import { Link } from "@/navigation"


const SignupPage = () => {
  const t = useTranslations()
  
  return (
    <>
      <h2 className="font-inter text-primary text-base">
        {t("sign.signup.title")}
      </h2>

      <FormSignup/>

      <p className="text-center text-sm font-light uppercase">
        {t("literal.or")}
      </p>

      <GoogleButton text={t("sign.signup.google")} />

      <p className="text-primary text-sm font-medium">
        {t("sign.signup.footer") + " "}
        <Link href="/signin" className="font-bold text-blue-700">
          {t("literal.signin")}
        </Link>
      </p>
    </>
  )
}

export const dynamic = 'force-dynamic'
export default SignupPage
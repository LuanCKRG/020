import { FormSignup } from "@/components/FormSignup"
import { useTranslations } from "next-intl"
import { FcGoogle } from "react-icons/fc"
import {GoogleButton} from "@/components/GoogleButton"
import {FacebookButton} from "@/components/FacebookButton"
import { FaFacebook } from "react-icons/fa"
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
      {/* <FacebookButton /> */}

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
        <Link href="/disclaimer" >
          Disclaimer
        </Link>
      </p>

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
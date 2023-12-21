import { FormSignin } from "@/components/FormSignin"
import { useTranslations } from "next-intl"
import { FcGoogle } from "react-icons/fc"
import { FaFacebook } from "react-icons/fa"
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

      <button className="outlined text-sm font-semibold py-3 gap-x-2">
        <FcGoogle size={20} />
        {t("sign.signin.google")}
      </button>

      <button className="outlined text-sm font-semibold py-3 gap-x-2">
        <FaFacebook className="text-blue-500" size={20} />
        {t("sign.signin.facebook")}
      </button>

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
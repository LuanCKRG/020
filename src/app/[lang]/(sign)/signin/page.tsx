import { FormSignin } from "@/components/FormSignin"
import { useTranslations } from "next-intl"
import { FcGoogle } from "react-icons/fc"
import { FaFacebook } from "react-icons/fa"
import Link from "next/link"


const SigninPage = () => {
  const t = useTranslations("Sign")
  const messages = {
    signin: t('signin'),
    signup: t('signUp'),
    or: t('or'),
    and: t('and'),
    privacy: t('privacy'),
    donthave: t('dontHave'),
    google: t('googleLogin'),
    facebook: t('facebookLogin'),
    agree: t('agree'),
    terms: t('terms'),
  }
  
  return (
    <>
      <h2 className="font-inter text-primary text-base">
        {messages.signin}
      </h2>

      <FormSignin/>

      <p className="text-center text-sm font-light uppercase">
        {messages.or}
      </p>

      <button className="outlined text-sm font-semibold py-3 gap-x-2">
        <FcGoogle size={20} />
        {messages.google}
      </button>

      <button className="outlined text-sm font-semibold py-3 gap-x-2">
        <FaFacebook className="text-blue-500" size={20} />
        {messages.facebook}
      </button>
      
      <p className="text-primary text-sm font-medium mt-4">
        {messages.donthave + " "}
        <Link href="/signup" className="font-bold text-blue-700">
          {messages.signup}
        </Link>
      </p>
    </>
  )
}

export const dynamic = 'force-dynamic'
export default SigninPage
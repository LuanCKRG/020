import { FormSignup } from "@/components/FormSignup"
import { useTranslations } from "next-intl"
import { FcGoogle } from "react-icons/fc"
import { FaFacebook } from "react-icons/fa"
import Link from "next/link"


const SignupPage = () => {
  const t = useTranslations("Sign")
  const messages = {
    signup: t('signup'),
    signin: t('signIn'),
    or: t('or'),
    and: t('and'),
    privacy: t('privacy'),
    have: t('have'),
    google: t('googleCreate'),
    facebook: t('facebookCreate'),
    agree: t('agree'),
    terms: t('terms'),
  }
  
  return (
    <>
      <h2 className="font-inter text-primary text-base">
        {messages.signup}
      </h2>

      <FormSignup/>

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

      <p className="text-primary text-sm">
        {messages.agree + " "}
        <Link href="/terms-of-use" className="font-bold">
          {messages.terms}
        </Link>
        {" " + messages.and + " "}
        <Link href="/privacy-policies" className="font-bold">
          {messages.privacy}
        </Link>
      </p>

      <p className="text-primary text-sm font-medium">
        {messages.have + " "}
        <Link href="/signin" className="font-bold text-blue-700">
          {messages.signin}
        </Link>
      </p>
    </>
  )
}

export const dynamic = 'force-dynamic'
export default SignupPage
import React from 'react'
import { Link } from '@/navigation'
import { FaFacebook } from "react-icons/fa"
import { AiFillInstagram } from "react-icons/ai"
import { TbBrandYoutubeFilled } from "react-icons/tb"
import { FaLinkedin } from "react-icons/fa6"
import { useTranslations } from 'next-intl'

const Footer = () => {

    const t = useTranslations("Footer")

    return (
        <footer className="footer w-full min-h-[28rem] sm:min-h-[20rem] items-end justify-center mt-16 dark:text-black">

            <div className='w-full flex mt-16 flex-col max-w-7xl mx-auto px-6 sm:px-10 justify-center items-end'>

                <div className='flex flex-col gap-4 w-full border-2 border-transparent border-b-primary py-6 items-center justify-center md:flex-row md:items-start md:gap-10'>

                    <div className='flex flex-col gap-2 items-center md:items-start font-inter'>
                        <div className='flex items-center gap-2 md:hidden'>
                            <div className='w-8 sm:w-12 h-8 sm:h-12 rounded-full grid place-items-center bg-primary'>
                                <span className='text-xs sm:text-sm font-inter font-semibold text-white'>ym.</span>
                            </div>

                            <h3 className='font-lato text-base sm:text-xl  font-bold uppercase'>
                                Yieldmaster
                            </h3>
                        </div>

                        <Link href='/' className=' text-sm font-semibold'>
                            {t("home")}
                        </Link>

                        <Link href='/pricing' className=' text-sm font-semibold'>
                            {t("pricing")}
                        </Link>

                        <Link href='/about' className=' text-sm font-semibold'>
                            {t("about")}
                        </Link>

                        <Link href='/terms-of-use' className=' text-sm font-semibold'>
                            {t("terms")}
                        </Link>

                        <Link href='/privacy-policies' className=' text-sm font-semibold'>
                            {t("policy")}
                        </Link>
                    </div>

                    <div className='flex flex-col gap-2 items-center md:items-start   font-inter'>
                        <h2 className='font-semibold'>
                            {t("contact")}
                        </h2>


                     <span className=' font-semibold text-sm'>
                            contact@yieldmaster.io
                        </span>
                    </div>

                    <div className='flex flex-col gap-2 items-center md:items-start   font-inter'>
                        <h2 className='font-semibold'>
                            {t("follow")}
                        </h2>

                        <div className='flex gap-4 items-center text-xl'>
                            <a href="https://facebook.com" target='_blank'>
                                <FaFacebook />
                            </a>

                            <a href="https://facebook.com" target='_blank'>
                                <AiFillInstagram />
                            </a>

                            <a href="https://facebook.com" target='_blank'>
                                <TbBrandYoutubeFilled />
                            </a>

                            <a href="https://facebook.com" target='_blank'>
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>

                </div>

                <div className='w-full min-h-[4rem] flex items-center justify-center'>
                    <h4 className=' text-base font-semibold font-inter'>
                        &copy; 2023 Yieldmaster
                    </h4>
                </div>

            </div>

        </footer>
    )
}

export default Footer

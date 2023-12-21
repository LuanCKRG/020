"use client"
import { Link, locales, usePathname, useRouter } from '@/navigation'
import { useLocale } from 'next-intl'
import { useState } from 'react'
import { HiGlobeAmericas } from "react-icons/hi2"

export const ToggleLocaleButton = () => {
  const [showAllLocales, setShowAllLocales] = useState<boolean>(false)

  const pathName = usePathname()
  const { replace } = useRouter()
  const locale = useLocale()

  const changeLocale = (locale: string) => {
    replace(pathName, { locale })
    setShowAllLocales(prev => !prev)
  }

  return (
    <>
      {
        showAllLocales ?
        <div>
          {locales.map(
            (loc, key) => (
              <button key={key} className='px-4 py-1 hover:bg-white/10 font-semibold text-primary' onClick={() => changeLocale(loc)}>
                {loc}
              </button>
            ))}
        </div>
          :
          <button className='flex gap-1 items-center justify-center text-2xl text-primary font-bold' onClick={() => setShowAllLocales(prev => !prev)}>
            <HiGlobeAmericas />
            <span className='text-sm'> {locale} </span>
            {/* <span className='text-sm'> &#9660; </span> */}
          </button>
      }
    </>
  )
}
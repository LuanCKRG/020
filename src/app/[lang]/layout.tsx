import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/globals.css'
import { notFound } from 'next/navigation'
import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl'
import { ThemesProvider } from '@/providers/ThemesProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

interface RootLayoutProps {
  children: React.ReactNode
  params: {
    lang: string
  }
}

export const generateStaticParams = () => {
  return [{ lang: 'en' }, { lang: 'pt' }]
}

const RootLayout = async ({ children, params: { lang } }: RootLayoutProps) => {

  let messages: AbstractIntlMessages
  try {
    messages = (await import(`@/messages/${lang}.json`)).default
  } catch (error) {
    notFound()
  }

  return (
    <html lang={lang} className="light">
      <body className={inter.className}>
        <NextIntlClientProvider locale={lang} messages={messages}>
          {/* <ThemesProvider> */}
            {children}
          {/* </ThemesProvider> */}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}


export default RootLayout
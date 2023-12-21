import type { NextRequest } from 'next/server'
import createMiddleware from "next-intl/middleware"
import { locales } from "@/navigation"

const middleware = (request: NextRequest) => {
  const defaultLocale = request.headers.get('x-default-locale') || 'en'

  const handleI18nRouting = createMiddleware({
    locales,
    defaultLocale: "en",
    localePrefix: "always"

  })

  const response = handleI18nRouting(request);

  // Step 3: Alter the response (example)
  response.headers.set('x-default-locale', defaultLocale);

  return response;
}

export default middleware

export const config = {
  // Ignora as rotas que não devem ser internacionalizadas,
  // como rotas para arquivos de imagem
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)", '/', '/(de|en)/:path*']
}
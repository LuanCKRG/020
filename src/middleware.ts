import createMiddleware from "next-intl/middleware";
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { locales } from "@/navigation";

const middleware = async (request: NextRequest) => {
  const defaultLocale = request.headers.get("x-default-locale") || "en";

  const handleI18nRouting = createMiddleware({
    locales,
    defaultLocale: "en",
    localePrefix: "always",
  });

  let response = handleI18nRouting(request);
  // let response = NextResponse.next({
  //   request: {
  //     headers: request.headers,
  //   },
  // });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value,
            ...options,
          });
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
          response.cookies.set({
            name,
            value,
            ...options,
          });
        },
        remove(name: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value: "",
            ...options,
          });
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
          response.cookies.set({
            name,
            value: "",
            ...options,
          });
        },
      },
    },
  );

  await supabase.auth.getSession();

  return response;

  // Step 3: Alter the response (example)
  response.headers.set("x-default-locale", defaultLocale);

  return response;
};

export default middleware;

export const config = {
  // Ignora as rotas que não devem ser internacionalizadas,
  // como rotas para arquivos de imagem
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)", "/", "/(pt|en)/:path*"],
};

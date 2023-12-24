import { type CookieOptions, createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  const requestUrl = new URL(request.url);

  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/";

  if (code) {
    const cookieStore = cookies();

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return cookieStore.get(name)?.value;
          },
          set(name: string, value: string, options: CookieOptions) {
            cookieStore.set({ name, value, ...options });
          },
          remove(name: string, options: CookieOptions) {
            cookieStore.delete({ name, ...options });
          },
        },
      },
    );

    const { error } = await supabase.auth.exchangeCodeForSession(code);
    console.log(error);
    if (!error) {
      console.log(requestUrl.origin);
      return NextResponse.redirect(requestUrl.origin);
    }
  }
  console.log("origin");
  // return the user to an error page with instructions
  console.log(origin);
  return NextResponse.redirect(`${origin}/auth/auth-code-error`);
};

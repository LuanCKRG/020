import { Link } from "@/navigation";
import { ProfileDropdown } from "@/components/ProfileDropdown";
import { MobileMenu } from "@/components/MobileMenu";
import { ToggleLocaleButton } from "./ToggleLocaleButton";
import { ToggleThemeButton } from "./ToggleThemeButton";
import { MobileMenuDropdown } from "./MobileMenuDropdown";
import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";
import { Database } from "@/types/supabase";
import { getTranslations } from "next-intl/server";

// export const dynamic = "force-dynamic";
export const NavBar = async () => {
  const t = await getTranslations("navigation");

  const cookieStore = cookies();
  const supabase = createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
      },
    },
  );

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <header className="sticky top-0 p-4 z-10 shadow-md dark:shadow-white/10 bg-primary">
      <nav className="mx-auto flex items-center max-w-screen-md font-medium">
        <h1 className="text-3xl text-title flex-1">
          <Link href="/">ym.</Link>
        </h1>

        <ul className="hidden sm:flex gap-x-3 uppercase flex-1">
          <li>
            <Link href="/">{t("home")}</Link>
          </li>
          <li>
            <Link href="/pricing">{t("price")}</Link>
          </li>
          <li>
            <Link href="/about">{t("about")}</Link>
          </li>
        </ul>

        <div className="flex justify-end flex-1">
          <div className="hidden sm:flex sm:gap-x-3 sm:items-center ">
            <ToggleLocaleButton />
            <ToggleThemeButton />

            {session ? (
              <div className="relative">
                <ProfileDropdown />
              </div>
            ) : (
              <Link href="/signin">
                <button className="contained px-4 py-2">Entrar</button>
              </Link>
            )}
          </div>

          <MobileMenu>
            <div
              className="
          m-auto
          flex
          flex-col
          px-6
          py-8
          w-[80vw]
          max-w-[20rem]
          text-primary
          font-semibold
          bg-primary
          text-center
          gap-y-4
          rounded-lg
          shadow-lg
          dark:shadow-white/10
        "
            >
              <ul className="uppercase">
                <li>
                  <Link href="/">{"home"}</Link>
                </li>

                <li>
                  <Link href="/pricing">{"pricing"}</Link>
                </li>

                <li>
                  <Link href="/about">{"about"}</Link>
                </li>
              </ul>

              <hr className="h-px" />

              <div className="flex justify-center">
                <MobileMenuDropdown />
              </div>

              <hr className="h-px" />

              <div className="flex flex-col gap-y-3 justify-center">
                <ToggleThemeButton />
                <ToggleLocaleButton />
              </div>
            </div>
          </MobileMenu>
        </div>
      </nav>
    </header>
  );
};

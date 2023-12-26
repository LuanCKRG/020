import { Link } from "@/navigation";
import { Profile } from "@/components/Profile";
import { MobileMenu } from "@/components/MobileMenu";
import { ToggleLocaleButton } from "./ToggleLocaleButton";
import { ToggleThemeButton } from "./ToggleThemeButton";

export const NavBar = () => {
  return (
    <header className="sticky top-0 p-4 z-10 shadow-md dark:shadow-white/10 bg-primary">
      <nav className="mx-auto flex items-center max-w-screen-md font-medium">
        <h1 className="text-3xl text-title flex-1">
          <Link href="/">ym.</Link>
        </h1>

        <ul className="hidden sm:flex gap-x-3 uppercase flex-1">
          <li>
            <Link href="/">{"home"}</Link>
          </li>
          <li>
            <Link href="/pricing">{"price"}</Link>
          </li>
          <li>
            <Link href="/about">{"about"}</Link>
          </li>
        </ul>

        <div className="flex justify-end flex-1">
          <div className="hidden sm:flex sm:gap-x-3 sm:items-center ">
            <ToggleLocaleButton />
            <ToggleThemeButton />

            <Profile />
          </div>

          <MobileMenu />
        </div>
      </nav>
    </header>
  );
};

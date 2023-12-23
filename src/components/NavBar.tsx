"use client";

import { TbMenuDeep } from "react-icons/tb";
import { Link } from "@/navigation";
import { useState } from "react";
import { ToggleLocaleButton } from "./ToggleLocaleButton";
import { ToggleThemeButton } from "./ToggleThemeButton";
import { useAuth } from "@/providers/AuthProvider";

export const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const { user } = useAuth();

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

            <Link href="/signin">
              <button className="contained px-4 py-2">Entrar</button>
            </Link>
          </div>

          <button
            className="sm:hidden"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            <TbMenuDeep size={30} />
          </button>
        </div>

        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 flex bg-black bg-opacity-5 backdrop-blur-sm z-50 sm:hidden"
            onClick={(e) =>
              e.target === e.currentTarget &&
              setIsMobileMenuOpen((prev) => !prev)
            }
          >
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
                <Link href="/signin">
                  <button className="contained px-8 py-2">Entrar</button>
                </Link>
              </div>

              <hr className="h-px" />

              <div className="flex flex-col gap-y-3 justify-center">
                <ToggleThemeButton />
                <ToggleLocaleButton />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

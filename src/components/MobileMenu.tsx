"use client";

import { useState } from "react";
import { TbMenuDeep } from "react-icons/tb";
import { Link } from "@/navigation";
import { ToggleThemeButton } from "@/components/ToggleThemeButton";
import { ToggleLocaleButton } from "@/components/ToggleLocaleButton";

export const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <button
      className="sm:hidden"
      onClick={() => setIsMenuOpen((prev) => !prev)}
    >
      <TbMenuDeep size={30} />
      {isMenuOpen && (
        <div
          className="fixed inset-0 flex bg-black bg-opacity-5 backdrop-blur-sm z-50 sm:hidden"
          onClick={(e) =>
            e.target === e.currentTarget && setIsMenuOpen((prev) => !prev)
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
    </button>
  );
};

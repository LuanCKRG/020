"use client";

import { useState, useEffect } from "react";
import { TbMenuDeep } from "react-icons/tb";
import { usePathname } from "@/navigation";

export const MobileMenu = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <button
        className="sm:hidden"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <TbMenuDeep size={30} />
      </button>
      {isMenuOpen && (
        <div
          className="fixed inset-0 flex bg-black bg-opacity-5 backdrop-blur-sm z-50 sm:hidden"
          onClick={(e) => {
            e.target === e.currentTarget && setIsMenuOpen((prev) => !prev);
          }}
        >
          {children}
        </div>
      )}
    </>
  );
};

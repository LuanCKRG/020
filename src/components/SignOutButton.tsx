"use client";

import { ButtonHTMLAttributes } from "react";
import { signout } from "@/lib/firebase/auth";
import { useRouter } from "next/navigation";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const SignOutButton: React.FC<ButtonProps> = ({ ...props }) => {
  const { refresh } = useRouter();
  const handleClick = async () => {
    await signout();
    refresh();
  };
  return (
    <button {...props} onClick={handleClick}>
      Sign out
    </button>
  );
};

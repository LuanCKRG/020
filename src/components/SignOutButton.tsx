"use client";

import { ButtonHTMLAttributes } from "react";
import { signOut } from "@/lib/supabase/auth";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const SignOutButton: React.FC<ButtonProps> = ({ ...props }) => {
  const handleClick = async () => {
    await signOut();
  };

  return (
    <button onClick={handleClick} {...props}>
      Sign out
    </button>
  );
};

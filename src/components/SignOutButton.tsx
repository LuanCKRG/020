"use client";

import { ButtonHTMLAttributes } from "react";
import { signOut } from "@/lib/supabase/auth";
import { useRouter } from "next/navigation";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const SignOutButton: React.FC<ButtonProps> = ({ ...props }) => {
  const { refresh } = useRouter();
  const handleClick = async () => {
    await signOut();
    return refresh();
  };

  return (
    <button onClick={handleClick} {...props}>
      Sign out
    </button>
  );
};

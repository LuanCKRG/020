"use client";

import { ButtonHTMLAttributes } from "react";
import { useRouter } from "next/navigation";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const SignOutButton: React.FC<ButtonProps> = ({ ...props }) => {
  return <button {...props}>Sign out</button>;
};

"use client";
import { signOut } from "@/lib/supabase/auth";
import { FcGoogle } from "react-icons/fc";

export const SignOutButton = () => {
  return (
    <button
      onClick={async () => await signOut()}
      className="outlined text-sm font-semibold py-3 gap-x-2"
    >
      Sign out
    </button>
  );
};

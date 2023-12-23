"use client";
import { signinGoogle } from "@/lib/supabase/auth";
import { FcGoogle } from "react-icons/fc";

export const GoogleButton = () => {
  return (
    <button
      onClick={async () => await signinGoogle()}
      className="outlined text-sm font-semibold py-3 gap-x-2"
    >
      <FcGoogle size={20} />
      Sign up with Google
    </button>
  );
};

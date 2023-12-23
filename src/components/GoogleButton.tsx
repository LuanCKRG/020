"use client";
import { signinGoogle, getUser } from "@/lib/firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";

export const GoogleButton = () => {
  const { refresh } = useRouter();
  const handleClick = async () => {
    await signinGoogle();
    getUser();
    refresh();
  };
  return (
    <button
      onClick={handleClick}
      className="outlined text-sm font-semibold py-3 gap-x-2"
    >
      <FcGoogle size={20} />
      Sign up with Google
    </button>
  );
};

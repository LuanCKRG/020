"use client";
import { signinFacebook } from "@/lib/firebase/auth";
import { FaFacebook } from "react-icons/fa";

export const FacebookButton = () => {
  return (
    <button
      onClick={async () => await signinFacebook()}
      className="outlined text-sm font-semibold py-3 gap-x-2"
    >
      <FaFacebook className="text-blue-500" size={20} />
      Sign up with Facebook
    </button>
  );
};

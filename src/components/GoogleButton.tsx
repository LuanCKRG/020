"use client";

import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { createBrowserClient } from "@supabase/ssr";

export const GoogleButton = ({ text }: { text: string }) => {
  const { refresh } = useRouter();

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );

  const signinGoogle = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${location.origin}/api/auth/callback`,
      },
    });
    console.log(data);
    console.error(error);
    // return redirect(data.url!);
  };

  return (
    <button
      onClick={signinGoogle}
      className="outlined text-sm font-semibold py-3 gap-x-2"
    >
      <FcGoogle size={20} />
      {text}
    </button>
  );
};

import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";
import { Database } from "@/types/supabase";
import { Link } from "@/navigation";
import { SignOutButton } from "@/components/SignOutButton";

export const MobileMenuDropdown = async () => {
  const cookieStore = cookies();
  const supabase = createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
      },
    },
  );

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return (
      <Link href="/signin">
        <button className="contained px-8 py-2">Entrar</button>
      </Link>
    );
  }

  return (
    <div className="flex flex-col gap-y-3">
      <Link href="/dashboard">
        <button className="outlined w-full p-2">Dashboard</button>
      </Link>

      <Link href="/">
        <button className="contained w-full p-2">Perfil</button>
      </Link>

      <SignOutButton className="outlined p-2" />
    </div>
  );
};

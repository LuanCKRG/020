import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";
import { Database } from "@/types/supabase";
import { ProfileDropdown } from "@/components/ProfileDropdown";
import { Link } from "@/navigation";

export const Profile = async () => {
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
        <button className="contained px-4 py-2">Entrar</button>
      </Link>
    );
  }

  return (
    <div className="relative">
      <ProfileDropdown />;
    </div>
  );
};

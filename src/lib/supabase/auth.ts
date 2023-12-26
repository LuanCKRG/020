"use server";

import { cookies } from "next/headers";
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { Database } from "@/types/supabase";

export const createServerSupabaseClient = async () => {
  const cookieStore = cookies();
  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          cookieStore.set({ name, value, ...options });
        },
        remove(name: string, options: CookieOptions) {
          cookieStore.set({ name, value: "", ...options });
        },
      },
    },
  );
};

export const getUserByEmail = async (email: string) => {
  const supabase = await createServerSupabaseClient();
  const { data: users, error } = await supabase
    .from("user")
    .select("*")
    .eq("email", email);

  return { users };
};

export const createUser = async (
  name: string,
  email: string,
  password: string,
) => {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        user_name: name,
      },
    },
  });
  console.log(error);
};

export const signinUser = async (email: string, password: string) => {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  const { data: session } = await supabase.auth.getSession();
  console.log(session);
  return { error };
};

export const signOut = async () => {
  const supabase = await createServerSupabaseClient();
  await supabase.auth.signOut();
};
// https://stackoverflow.com/questions/46135993/how-to-change-the-app-name-for-firebase-authentication-what-the-user-sees

export const getUser = async () => {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return { user };
};

"use server";

import { cookies } from "next/headers";
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { Database } from "@/types/supabase";
import { redirect } from "next/navigation";

import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDiG6scpd3bzCeCBiv60-Z-gQeEX1tc03s",
  authDomain: "yield-master.firebaseapp.com",
  projectId: "yield-master",
  storageBucket: "yield-master.appspot.com",
  messagingSenderId: "793696024570",
  appId: "1:793696024570:web:46fec669b25c5618ad5643",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const cookieStore = cookies();

const supabase = createServerClient<Database>(
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

export const getUserByEmail = async (email: string) => {
  const { data: users, error } = await supabase
    .from("user")
    .select("*")
    .eq("email", email);
  console.log(error);
  return { users };
};

export const createUser = async (
  name: string,
  email: string,
  password: string,
) => {
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
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  console.log(error);
  return { error };
};

export const gogole = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
  });
  console.log(data);
  console.log(error);
};

export const signinGoogle = async () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      console.error(error);
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

export const signOut = async () => {
  await supabase.auth.signOut();
};

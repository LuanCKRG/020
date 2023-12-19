"use server"

import { cookies } from 'next/headers'
import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { Database } from '@/types/supabase'

const cookieStore = cookies()

const supabase_url = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabase_anon_key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabase = createServerClient<Database>(
  supabase_url,
  supabase_anon_key,
  {
    cookies: {
      get(name: string) {
        return cookieStore.get(name)?.value
      },
      set(name: string, value: string, options: CookieOptions) {
        cookieStore.set({ name, value, ...options })
      },
      remove(name: string, options: CookieOptions) {
        cookieStore.set({ name, value: '', ...options })
      },
    },
  }
)

export const getUserByEmail = async (email: string) => {
  const {data: users} = await supabase.from("user").select("*").eq("email", email)

  return {users}
}

export const createUser = async (name: string, email: string, password: string) => {
  const user = await supabase.auth.signUp({
    email, password, options: {
      data: {
        user_name: name
      }
    }
  })

}

export const gogole = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({ provider: 'google' })
  console.log(data)
  console.log(error)
}

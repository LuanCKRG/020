"use server"

import { cookies } from 'next/headers'
import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { Database } from '@/types/supabase'

const cookieStore = cookies()

const supabase_url = "https://zwafjrgikpqnorxkzjqh.supabase.co"
const supabase_anon_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3YWZqcmdpa3Bxbm9yeGt6anFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI5MjY1NzIsImV4cCI6MjAxODUwMjU3Mn0.Md4rm7fc-ftZ9fwDGeWm373BT_jTTL_CcTDx5M0OR0Y"
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

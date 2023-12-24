import { Link } from "@/navigation"
import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
import { redirect } from "@/navigation"

const SignLayout = async ({ children }: { children: React.ReactNode }) => {
  const cookieStore = cookies()

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
      },
    }
  )

  const {data: {session}} = await supabase.auth.getSession()

  if (session) {
    console.log(session)
    return redirect("/dashboard")    
  } 
    return (
      <main className="flex max-w-screen min-h-screen p-4">
        <div className="m-auto gap-y-4 w-full max-w-md flex flex-col px-2 py-3 sm:px-6 sm:py-8 glassmorphism">
          <Link href="/">
            <h1 className="font-inter text-title text-3xl font-medium">ym.</h1>
          </Link>
  
          {children}
        </div>
      </main>
    )
  
  
}

export const dynamic = "force-dynamic"
export default SignLayout
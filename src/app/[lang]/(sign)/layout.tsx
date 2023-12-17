import Link from "next/link"

const SignLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex max-w-screen min-h-screen p-4">
      <div className="m-auto gap-y-4 w-full max-w-md flex flex-col px-2 py-3 sm:px-6 sm:py-8 glassmorphism">
        <Link href="/">
          <h1 className="font-inter text-primary text-3xl font-medium">ym.</h1>
        </Link>

        {children}
      </div>
    </main>
  )
}

export const dynamic = 'force-dynamic'
export default SignLayout
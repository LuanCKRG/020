"use client"

import { useState, useEffect } from "react"
import { ThemeProvider } from "next-themes"

export const ThemesProvider = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) {
    return null
  }

  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      {children}
    </ThemeProvider>
  )
}

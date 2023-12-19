"use client"

import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

export const ToggleThemeButton = () => {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <ul>

      <li>
        <button onClick={() => setTheme("light")}>
          Light
        </button>
      </li>
      <li>
        <button onClick={() => setTheme("dark")}>
          Dark
        </button>
      </li>
    </ul>

  )
}
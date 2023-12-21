"use client"

import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { MdLightMode, MdDarkMode } from "react-icons/md"


export const ToggleThemeButton = () => {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  if(theme === "dark") {
    return (
      <button className="flex justify-center" onClick={() => setTheme("light")}>
        <MdLightMode size={30}/>
      </button>
    )
  }

  if(theme === "light") {
    return (
      <button className="flex justify-center" onClick={() => setTheme("dark")}>
        <MdDarkMode size={30}/>
      </button>
    )
  }
}
"use client"

import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check initial theme
    const root = document.documentElement
    setIsDark(root.classList.contains("dark"))
  }, [])

  const toggleTheme = () => {
    const root = document.documentElement
    if (isDark) {
      root.classList.remove("dark")
      setIsDark(false)
    } else {
      root.classList.add("dark")
      setIsDark(true)
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 left-6 z-50 p-3 rounded-full bg-white dark:bg-black border-2 border-black dark:border-white hover:scale-110 transition-all duration-300 shadow-lg"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-black dark:text-white" />
      ) : (
        <Moon className="w-5 h-5 text-black dark:text-white" />
      )}
    </button>
  )
}

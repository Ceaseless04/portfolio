"use client"

import { useTheme } from "../context/ThemeContext"
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid"

/**
 * ThemeToggle component
 *
 * This component renders a button that toggles between light and dark themes.
 * It uses the useTheme hook to access and update the current theme.
 */
const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
      aria-label="Toggle theme"
    >
      {/* Render either a moon or sun icon based on the current theme */}
      {theme === "light" ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}
    </button>
  )
}

export default ThemeToggle


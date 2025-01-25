"use client"

import Link from "next/link"
import ThemeToggle from "./ThemeToggle"

/**
 * Header component
 *
 * This component renders the navigation bar at the top of the page.
 * It includes links to different sections of the portfolio and a theme toggle button.
 */
const Header = () => {
  return (
    <header className="bg-white shadow-sm dark:bg-gray-900">
      <nav className="container h-16 flex items-center justify-between">
        {/* Logo/Home link */}
        <Link href="/" className="text-2xl font-semibold text-teal-green dark:text-seafoam-green">
          Portfolio
        </Link>
        <div className="flex items-center space-x-6">
          {/* Navigation links */}
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-royal-blue dark:text-seafoam-green hover:text-teal">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-royal-blue dark:text-seafoam-green hover:text-teal">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="text-royal-blue dark:text-seafoam-green hover:text-teal">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-royal-blue dark:text-seafoam-green hover:text-teal">
                Contact
              </Link>
            </li>
          </ul>
          {/* Theme toggle button */}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}

export default Header


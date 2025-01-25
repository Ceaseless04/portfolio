import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "./context/ThemeContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Apple-Inspired Portfolio",
  description: "A sleek portfolio template using Next.js and Firebase",
}

/**
 * RootLayout component
 *
 * This is the main layout component that wraps all pages in the application.
 * It includes the ThemeProvider for managing dark/light mode and applies the Inter font.
 *
 * @param {Object} props - The component props
 * @param {React.ReactNode} props.children - The child components to be rendered within the layout
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}


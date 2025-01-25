import Header from "./components/Header"
import Link from "next/link"

/**
 * Home page component
 *
 * This component renders the main content of the home page, including
 * a welcome message, a brief description, and a call-to-action button.
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header component with navigation */}
      <Header />

      {/* Main content */}
      <main className="flex-grow container py-12">
        <section className="text-center">
          <h1 className="text-5xl font-bold mb-6 text-teal-green dark:text-seafoam-green">Welcome to My Portfolio</h1>
          <p className="text-xl mb-8 text-royal-blue dark:text-teal">
            I'm a passionate developer creating beautiful and functional web experiences.
          </p>
          {/* Call-to-action button */}
          <Link
            href="/projects"
            className="bg-teal dark:bg-teal-green text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-teal-green dark:hover:bg-teal transition-colors"
          >
            View My Work
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-royal-blue dark:bg-teal-green text-white py-4">
        <div className="container text-center">&copy; 2023 Your Name. All rights reserved.</div>
      </footer>
    </div>
  )
}


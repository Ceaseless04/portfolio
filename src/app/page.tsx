'use client'

import { useEffect, useState } from 'react'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Footer from '../components/Footer'
import WaveAnimation from '../components/WaveAnimation'
import FloatingElements from '../components/FloatingElements'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <FloatingElements />
      <WaveAnimation />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <Projects />
        <Skills />
        <Footer />
      </div>
    </main>
  )
}
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY) {
          setIsVisible(false)
        } else {
          setIsVisible(true)
        }
        setLastScrollY(window.scrollY)
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar)
      return () => {
        window.removeEventListener('scroll', controlNavbar)
      }
    }
  }, [lastScrollY])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
      style={{
        backdropFilter: 'blur(10px)',
        background: 'rgba(31, 31, 40, 0.95)',
        borderBottom: '1px solid var(--kanagawa-overlay)'
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold" style={{ color: 'var(--kanagawa-blue)' }}>
            浪
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative transition-colors duration-300 group"
                style={{ color: 'var(--kanagawa-fg-dim)' }}
                onMouseEnter={(e) => e.target.style.color = 'var(--kanagawa-cyan)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--kanagawa-fg-dim)'}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" 
                      style={{ backgroundColor: 'var(--kanagawa-cyan)' }} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
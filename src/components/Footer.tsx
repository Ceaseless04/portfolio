'use client'

import Link from 'next/link'

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', href: '#' },
    { name: 'LinkedIn', href: '#' },
    { name: 'Twitter', href: '#' },
    { name: 'Email', href: 'mailto:hello@example.com' },
  ]

  return (
    <footer 
      id="contact" 
      className="py-12 mt-20 relative z-10"
      style={{
        background: 'var(--kanagawa-surface)',
        borderTop: '1px solid var(--kanagawa-overlay)'
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-8 mb-8">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg transition-colors duration-300"
              style={{ color: 'var(--kanagawa-fg-dim)' }}
              onMouseEnter={(e) => e.target.style.color = 'var(--kanagawa-magenta)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--kanagawa-fg-dim)'}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <p style={{ color: 'var(--kanagawa-fg-dim)' }}>
          © 2024 Creative Developer. Inspired by the Great Wave.
        </p>
      </div>
    </footer>
  )
}

export default Footer
'use client'

import Link from 'next/link'

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 relative z-10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Creative Developer
          </h1>
          
          <p className="text-xl mb-8 leading-relaxed" style={{ color: 'var(--kanagawa-fg-dim)' }}>
            Crafting beautiful digital experiences with modern web technologies. 
            Inspired by the timeless art of Hokusai&apos;s Great Wave, I bring the same 
            attention to detail and artistic vision to every project.
          </p>
          
          <Link
            href="#projects"
            className="inline-block px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(126,156,216,0.4)]"
            style={{
              background: 'linear-gradient(45deg, var(--kanagawa-blue), var(--kanagawa-cyan))',
              color: 'white',
              boxShadow: '0 4px 20px rgba(126, 156, 216, 0.3)'
            }}
          >
            View My Work
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
'use client'

const Skills = () => {
  const skills = [
    {
      category: 'Frontend',
      icon: '⚛️',
      items: ['React & Next.js', 'TypeScript', 'Tailwind CSS', 'Three.js']
    },
    {
      category: 'Backend',
      icon: '🔧',
      items: ['Node.js', 'Python', 'PostgreSQL', 'GraphQL']
    },
    {
      category: 'Cloud & DevOps',
      icon: '☁️',
      items: ['AWS', 'Docker', 'CI/CD', 'Kubernetes']
    },
    {
      category: 'Design',
      icon: '🎨',
      items: ['UI/UX Design', 'Figma', 'Adobe Creative Suite', 'Motion Graphics']
    }
  ]

  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16" style={{ color: 'var(--kanagawa-yellow)' }}>
          Technical Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.category}
              className="rounded-xl p-6 text-center transition-transform duration-300 hover:-translate-y-1"
              style={{
                background: 'var(--kanagawa-surface)',
                border: '1px solid var(--kanagawa-overlay)'
              }}
            >
              <div className="text-4xl mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--kanagawa-orange)' }}>
                {skill.category}
              </h3>
              <ul className="space-y-2" style={{ color: 'var(--kanagawa-fg-dim)' }}>
                {skill.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
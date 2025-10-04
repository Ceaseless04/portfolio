'use client'

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with Next.js and Stripe integration. Features include user authentication, product catalog, and payment processing.',
      tags: ['Next.js', 'TypeScript', 'Stripe', 'Prisma']
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      tags: ['React', 'Socket.io', 'Node.js', 'MongoDB']
    },
    {
      title: 'Weather Visualization',
      description: 'An interactive weather dashboard that visualizes meteorological data with beautiful charts and animations using D3.js and real-time APIs.',
      tags: ['D3.js', 'Vue.js', 'API Integration', 'SVG']
    }
  ]

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16" style={{ color: 'var(--kanagawa-yellow)' }}>
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="rounded-xl p-6 transition-all duration-300 relative overflow-hidden group hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
              style={{
                background: 'var(--kanagawa-surface)',
                border: '1px solid var(--kanagawa-overlay)'
              }}
            >
              <div 
                className="absolute top-0 left-0 w-full h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                style={{
                  background: 'linear-gradient(90deg, var(--kanagawa-blue), var(--kanagawa-cyan))'
                }}
              />
              
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--kanagawa-green)' }}>
                {project.title}
              </h3>
              
              <p className="mb-6 leading-relaxed" style={{ color: 'var(--kanagawa-fg-dim)' }}>
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm rounded-full"
                    style={{
                      background: 'var(--kanagawa-overlay)',
                      color: 'var(--kanagawa-cyan)',
                      border: '1px solid rgba(127, 180, 202, 0.5)'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
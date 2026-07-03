import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProjectCard } from './ProjectCard'
import projectsData from '@/data/projects.json'
import type { Project } from '@/types'
import { useTheme } from '@/hooks/useTheme'

const projects: Project[] = projectsData

export function Projects() {
  const {  accentColor } = useTheme()

  return (
    <section
      id="projects"
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ background:'#0a0a0a'  }}
    >
      {/* Background accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: `linear-gradient(90deg, transparent, ${accentColor}40, transparent)` }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading
          label="My Work"
          title="Featured Projects"
          subtitle="A selection of projects that showcase my expertise in full-stack development"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: `linear-gradient(90deg, transparent, ${accentColor}40, transparent)` }}
      />
    </section>
  )
}

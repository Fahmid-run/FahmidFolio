import { useRef } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { ExternalLink, Code as Code2 } from 'lucide-react'
import type { Project } from '@/types'

function GithubIcon({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}
import { useTheme } from '@/hooks/useTheme'

interface ProjectCardProps {
  project: Project
  index: number
}

// Gradient presets per card
const gradients = [
  'linear-gradient(135deg, #1a0533 0%, #0d0d0d 50%, #0d1a2e 100%)',
  'linear-gradient(135deg, #0d1a0d 0%, #0d0d0d 50%, #1a1a0d 100%)',
  'linear-gradient(135deg, #1a0d0d 0%, #0d0d0d 50%, #0d0d1a 100%)',
]

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { accentColor, accentLight } = useTheme()
  const cardRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 })
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 })
  const rotateX = useTransform(springY, [-0.5, 0.5], ['8deg', '-8deg'])
  const rotateY = useTransform(springX, [-0.5, 0.5], ['-8deg', '8deg'])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.33, 1, 0.68, 1] }}
      style={{ perspective: 800 }}
    >
      <motion.div
        ref={cardRef}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ y: -8 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="group relative rounded-2xl overflow-hidden cursor-pointer h-full"
      >
        {/* Glow border on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, ${accentColor}20, transparent, ${accentLight}10)`,
            boxShadow: `inset 0 0 0 1px ${accentColor}50, 0 0 30px ${accentColor}20`,
          }}
        />

        {/* Card body */}
        <div
          className="relative h-full flex flex-col"
          style={{
            background: gradients[index % gradients.length],
            border: `1px solid rgba(255,255,255,0.07)`,
          }}
        >
          {/* Image/gradient placeholder */}
          <div className="relative h-48 overflow-hidden">
            <div
              className="w-full h-full"
              style={{
                background: `linear-gradient(135deg, ${accentColor}30 0%, rgba(0,0,0,0.4) 50%, ${accentLight}15 100%)`,
              }}
            />

            {/* Project icon overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-16 h-16 rounded-2xl flex items-center justify-center glass"
                style={{ border: `1px solid ${accentColor}40` }}
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Code2 size={28} style={{ color: accentLight }} strokeWidth={1.5} />
              </motion.div>
            </div>

            {/* Featured badge */}
            {project.featured && (
              <div
                className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold"
                style={{
                  background: `linear-gradient(135deg, ${accentColor}, ${accentLight})`,
                  color: '#fff',
                  fontSize: '10px',
                  letterSpacing: '0.1em',
                }}
              >
                FEATURED
              </div>
            )}

            {/* Hover image zoom effect */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `radial-gradient(circle at 50% 50%, ${accentColor}20, transparent 70%)`,
              }}
            />
          </div>

          {/* Content */}
          <div className="flex flex-col flex-1 p-6 gap-4">
            <div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-white transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed line-clamp-3">
                {project.description}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mt-auto">
              {project.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-full font-medium"
                  style={{
                    background: `${accentColor}15`,
                    border: `1px solid ${accentColor}25`,
                    color: accentLight,
                  }}
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 4 && (
                <span className="text-xs px-2.5 py-1 rounded-full text-white/30">
                  +{project.tags.length - 4}
                </span>
              )}
            </div>

            {/* Action buttons */}
            <div className="flex gap-3 pt-2 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold text-white transition-all"
                style={{
                  background: `linear-gradient(135deg, ${accentColor}, ${accentLight})`,
                  boxShadow: `0 0 15px ${accentColor}30`,
                }}
              >
                <ExternalLink size={12} />
                Live Demo
              </motion.a>
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold transition-all glass"
                style={{
                  border: `1px solid ${accentColor}30`,
                  color: accentLight,
                }}
              >
                <GithubIcon size={12} />
                GitHub
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

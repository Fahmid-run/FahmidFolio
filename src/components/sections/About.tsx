import { motion, type Variants } from 'framer-motion'
import { User } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { useTheme } from '@/hooks/useTheme'

const skills = [
  'JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Node.js',
  'Express.js', 'MongoDB', 'PostgreSQL', 'Prisma', 'JWT',
  'Tailwind CSS', 'Postman', 'RAG Systems',
]

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } },
}

const badgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } as object },
}

export function About() {
  const { accentColor, accentLight, isDark } = useTheme()

  return (
    <section
      id="about"
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ background: isDark ? '#0d0d0d' : '#fafafa' }}
    >
      {/* Ambient blob */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[120px] opacity-[0.06] pointer-events-none"
        style={{ background: accentColor }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading
          label="About Me"
          title="Who I Am"
          subtitle="A passionate developer from Bangladesh building the web of tomorrow"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            className="relative"
          >
            <motion.div
              whileHover={{ rotateY: 3, rotateX: -3 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className="relative mx-auto max-w-sm"
            >
              {/* Accent border frame */}
              <div
                className="absolute -inset-2 rounded-[28px] opacity-30 blur-sm"
                style={{ background: `linear-gradient(135deg, ${accentColor}, ${accentLight})` }}
              />

              {/* Image card */}
              <div
                className="relative rounded-3xl overflow-hidden aspect-[3/4]"
                style={{
                  border: `1px solid ${accentColor}40`,
                  boxShadow: `0 0 30px ${accentColor}20, 0 20px 50px rgba(0,0,0,0.4)`,
                }}
              >
                {/*
                  PHOTO PLACEHOLDER — Replace with Fahmid's about photo:
                  <img src="/assets/images/about-photo.jpg" alt="Fahmid" className="w-full h-full object-cover" />
                */}
                <div
                  className="w-full h-full min-h-[380px] flex flex-col items-center justify-center gap-4"
                  style={{
                    background: `linear-gradient(160deg, rgba(124,58,237,0.12) 0%, rgba(13,13,13,0.9) 60%, rgba(167,139,250,0.08) 100%)`,
                  }}
                >
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${accentColor}30, ${accentLight}20)`,
                      border: `2px solid ${accentColor}50`,
                    }}
                  >
                    <User size={36} style={{ color: accentLight }} strokeWidth={1.5} />
                  </div>
                  <div className="text-center px-8">
                    <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: accentLight }}>
                      Photo Placeholder
                    </p>
                    <p className="text-xs text-white/30 mt-1">Add about-photo.jpg to src/assets/images/</p>
                  </div>
                </div>
              </div>

              {/* Floating stat card */}
              <motion.div
                className="absolute -right-6 bottom-8 glass px-4 py-3 rounded-2xl"
                style={{ border: `1px solid ${accentColor}30` }}
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
              >
                <p className="text-xs text-white/40 mb-1">Based in</p>
                <p className="text-sm font-bold text-white">Bangladesh 🇧🇩</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right — content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
            className="space-y-8"
          >
            {/* Signature name */}
            <div>
              <div
                className="text-sm font-semibold tracking-[0.15em] uppercase mb-2"
                style={{ color: accentLight }}
              >
                — Full Stack Developer
              </div>
              <div
                className="w-12 h-0.5 rounded-full mb-6"
                style={{ background: `linear-gradient(90deg, ${accentColor}, ${accentLight})` }}
              />
            </div>

            {/* Bio */}
            <div className="space-y-4">
              <p className="text-base md:text-lg leading-relaxed" style={{ color: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)' }}>
                I'm an <span className="font-semibold text-white">18-year-old full-stack developer</span> from Bangladesh,
                passionate about building elegant and performant digital experiences.
                I love transforming complex problems into clean, intuitive solutions.
              </p>
              <p className="text-base md:text-lg leading-relaxed" style={{ color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.55)' }}>
                Currently exploring system design, AI integration, and scalable web architecture.
                I believe great software should be both technically sound and visually exceptional.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4">
              {[['15+', 'Projects'], ['2+', 'Years Exp'], ['10+', 'Technologies']].map(([num, label]) => (
                <div
                  key={label}
                  className="glass rounded-2xl p-4 text-center"
                  style={{ border: `1px solid ${accentColor}20` }}
                >
                  <p className="text-2xl font-black" style={{ color: accentLight }}>{num}</p>
                  <p className="text-xs text-white/40 mt-0.5">{label}</p>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-sm font-semibold tracking-widest uppercase text-white/40 mb-4">Tech Stack</h3>
              <motion.div
                className="flex flex-wrap gap-2.5"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={badgeVariants}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold glass cursor-default transition-colors"
                    style={{
                      border: `1px solid ${accentColor}30`,
                      color: accentLight,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, type Variants } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { useTheme } from '@/hooks/useTheme'

const roles = ['Full Stack Developer', 'React Developer', 'Backend Engineer', 'Problem Solver']

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' } as object,
  },
}

export function Hero() {
  const { accentColor, accentLight } = useTheme()
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const imageRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 80, damping: 30 })
  const springY = useSpring(mouseY, { stiffness: 80, damping: 30 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20
      const y = (e.clientY / window.innerHeight - 0.5) * 20
      mouseX.set(x)
      mouseY.set(y)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  useEffect(() => {
    const fullText = roles[roleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && displayed.length < fullText.length) {
      timeout = setTimeout(() => setDisplayed(fullText.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === fullText.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex((i) => (i + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: '#0d0d0d' }}
    >
      <div className="absolute inset-0 bg-grid opacity-60" />

      <motion.div
        className="blob absolute w-[500px] h-[500px] top-[-100px] left-[-100px] opacity-20"
        style={{ background: accentColor, x: springX, y: springY }}
      />
      <motion.div
        className="blob absolute w-[400px] h-[400px] bottom-[-50px] right-[-50px] opacity-10"
        style={{ background: accentLight, animationDelay: '-4s' }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-24 pt-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            <motion.div variants={itemVariants}>
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium glass mb-6"
                style={{
                  border: `1px solid ${accentColor}40`,
                  color: accentLight,
                }}
              >
                <span className="relative flex h-2 w-2">
                  <span
                    className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                    style={{ background: accentLight }}
                  />
                  <span
                    className="relative inline-flex rounded-full h-2 w-2"
                    style={{ background: accentLight }}
                  />
                </span>
                Available for work
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[0.92] mb-4"
            >
              <span className={'text-white'}>Hi, I'm</span>
              <br />
              <span
                style={{
                  color: `${accentLight}`,
                }}
              >
                Fahmid.
              </span>
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="text-xl md:text-2xl lg:text-3xl font-bold mb-6"
              style={{
                color: 'rgba(255,255,255,0.6)',
              }}
            >
              I'm a{' '}
              <span style={{ color: accentLight }}>
                {displayed}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.7 }}
                  className="inline-block w-0.5 h-6 ml-0.5 align-middle"
                  style={{ background: accentLight }}
                />
              </span>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg leading-relaxed mb-10 max-w-lg"
              style={{
                color: 'rgba(255,255,255,0.45)',
              }}
            >
              I build fast, scalable, visually polished web applications with
              modern technologies and clean architecture.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <MagneticButton
                variant="primary"
                onClick={() =>
                  document
                    .getElementById('projects')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                View My Work
                <ArrowRight size={15} />
              </MagneticButton>
              <MagneticButton
                variant="outline"
                onClick={() =>
                  document
                    .getElementById('contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Let's Talk
                <MessageCircle size={15} />
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* Right — image */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          >
            <motion.div
              ref={imageRef}
              style={{ rotateX: springY, rotateY: springX }}
              className="relative"
            >
              <div
                className="absolute inset-0 rounded-3xl blur-3xl opacity-30 scale-110"
                style={{
                  background: `radial-gradient(circle, ${accentColor}, transparent 70%)`,
                }}
              />

              <motion.div
                className="relative w-72 h-80 md:w-80 md:h-96 lg:w-96 lg:h-[450px] rounded-3xl overflow-hidden"
                style={{
                  border: `1px solid ${accentColor}50`,
                  boxShadow: `0 0 40px ${accentColor}30, 0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)`,
                }}
                animate={{ y: [0, -12, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: 'easeInOut',
                }}
              >
                <img
                  src="/assets/images/hero-photo.png"
                  alt="Fahmid"
                  className="mt-15"
                />

                <div
                  className="absolute bottom-0 left-0 right-0 p-4"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(13,13,13,0.9), transparent)',
                  }}
                >
                  <p className="text-white font-bold text-md">Fahmid</p>
                  <p className="text-xs" style={{ color: accentLight }}>
                    Full Stack Developer · Bangladesh
                  </p>
                </div>
              </motion.div>

              {/* //Experience Floating Box */}
              {/* <motion.div
                className="absolute -bottom-4 -left-6 glass px-4 py-2 rounded-xl"
                style={{ border: `1px solid ${accentColor}30` }}
                animate={{ y: [0, -6, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: 'easeInOut',
                  delay: 1,
                }}
              >
                <p className="text-xs text-white/50">Experience</p>
                <p className="text-sm font-bold text-white">2+ Years</p>
              </motion.div> */}
              {/* 
              <motion.div
                className="absolute -top-4 -right-4 glass px-4 py-2 rounded-xl"
                style={{ border: `1px solid ${accentColor}30` }}
                animate={{ y: [0, -6, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: 'easeInOut',
                  delay: 2,
                }}
              >
                <p className="text-xs text-white/50">Projects</p>
                <p className="text-sm font-bold text-white">0</p>
              </motion.div> */}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom, transparent, ${'#0d0d0d'})`,
        }}
      />
    </section>
  );
}

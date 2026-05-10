import { useEffect, useRef } from 'react'
import { motion, useScroll, useSpring, useMotionValue, useTransform } from 'framer-motion'
import { Navbar } from '@/components/ui/Navbar'
import { FloatingResumeBtn } from '@/components/ui/FloatingResumeBtn'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Projects } from '@/components/sections/Projects'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/sections/Footer'
import { useTheme } from '@/hooks/useTheme'

function MouseGlow() {
  const { accentColor } = useTheme()
  const x = useMotionValue(-200)
  const y = useMotionValue(-200)
  const springX = useSpring(x, { stiffness: 120, damping: 30 })
  const springY = useSpring(y, { stiffness: 120, damping: 30 })
  const translateX = useTransform(springX, (v) => v - 200)
  const translateY = useTransform(springY, (v) => v - 200)

  useEffect(() => {
    const move = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY) }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [x, y])

  return (
    <motion.div
      className="fixed pointer-events-none z-0 w-[400px] h-[400px] rounded-full opacity-[0.06]"
      style={{
        background: `radial-gradient(circle, ${accentColor}, transparent 70%)`,
        left: translateX,
        top: translateY,
      }}
    />
  )
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 40 })
  const { accentColor, accentLight } = useTheme()

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[9999] origin-left"
      style={{
        scaleX,
        background: `linear-gradient(90deg, ${accentColor}, ${accentLight})`,
        boxShadow: `0 0 8px ${accentColor}`,
      }}
    />
  )
}

function AppBody() {
  const { mode, accent, isDark } = useTheme()
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = rootRef.current
    if (!el) return
    el.setAttribute('data-mode', mode)
    el.setAttribute('data-theme', accent)
    document.documentElement.setAttribute('data-mode', mode)
    document.body.setAttribute('data-mode', mode)
  }, [mode, accent])

  return (
    <div
      ref={rootRef}
      data-mode={mode}
      data-theme={accent}
      className="relative vignette"
      style={{
        minHeight: '100vh',
        background: isDark ? '#0d0d0d' : '#fafafa',
        transition: 'background 0.4s ease, color 0.4s ease',
        color: isDark ? '#ffffff' : '#1a1a1a',
      }}
    >
      <MouseGlow />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <FloatingResumeBtn />
    </div>
  )
}

export default function App() {
  return <AppBody />
}

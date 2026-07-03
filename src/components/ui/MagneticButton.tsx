import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '@/hooks/useTheme'

interface MagneticButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'outline'
  onClick?: () => void
  href?: string
  className?: string
}

export function MagneticButton({ children, variant = 'primary', onClick, href, className = '' }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const { accentColor, accentLight } = useTheme()

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    setPosition({ x: x * 0.3, y: y * 0.3 })
  }

  const handleMouseLeave = () => setPosition({ x: 0, y: 0 })

  const baseClasses = `relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 overflow-hidden cursor-pointer ${className}`

  const primaryStyle = {
    background: `linear-gradient(135deg, ${accentColor}, ${accentLight})`,
    boxShadow: `0 0 20px ${accentColor}50, 0 4px 15px rgba(0,0,0,0.3)`,
    color: '#ffffff',
  }

  const outlineStyle = {
    background: 'transparent',
    border: `1px solid ${accentColor}60`,
    color: accentColor,
    backdropFilter: 'blur(10px)',
  }

  const style = variant === 'primary' ? primaryStyle : outlineStyle

  const Tag = href ? 'a' : 'button'

  return (
    <motion.div
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 350, damping: 20 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <motion.button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={baseClasses}
        style={style as React.CSSProperties}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        onClick={onClick}
        {...(href ? { as: Tag, href } : {})}
      >
        <motion.span
          className="absolute inset-0 rounded-full opacity-0"
          style={{ background: `radial-gradient(circle at 50% 50%, ${accentLight}30, transparent 70%)` }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </motion.button>
    </motion.div>
  )
}

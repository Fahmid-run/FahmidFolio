import { motion } from 'framer-motion'
import { useTheme } from '@/hooks/useTheme'

interface SectionHeadingProps {
  label: string
  title: string
  subtitle?: string
}

export function SectionHeading({ label, title, subtitle }: SectionHeadingProps) {
  const { accentLight } = useTheme()

  return (
    <motion.div
      className="text-center mb-16 md:mb-24"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
    >
      <motion.span
        className="inline-block text-sm font-semibold tracking-[0.2em] uppercase mb-4 px-4 py-1.5 rounded-full glass"
        style={{ color: accentLight, borderColor: `${accentLight}30` }}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {label}
      </motion.span>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mt-2">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-white/40 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <motion.div
        className="w-16 h-0.5 mx-auto mt-6 rounded-full"
        style={{ background: `linear-gradient(90deg, transparent, ${accentLight}, transparent)` }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
    </motion.div>
  )
}

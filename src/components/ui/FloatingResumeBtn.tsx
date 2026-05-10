import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'

export function FloatingResumeBtn() {
  const { accentColor, accentLight } = useTheme()

  return (
    <motion.a
      href="#"
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.5, type: 'spring', stiffness: 300, damping: 20 }}
      whileHover={{ scale: 1.08, y: -2 }}
      whileTap={{ scale: 0.96 }}
      className="fixed bottom-8 right-8 z-50 flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm text-white"
      style={{
        background: `linear-gradient(135deg, ${accentColor}, ${accentLight})`,
        boxShadow: `0 0 25px ${accentColor}60, 0 8px 25px rgba(0,0,0,0.4)`,
      }}
      aria-label="Download resume"
    >
      <motion.div
        animate={{ y: [0, -2, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
      >
        <Download size={14} />
      </motion.div>
      Resume
    </motion.a>
  )
}

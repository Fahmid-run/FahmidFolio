import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Palette } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'
import type { ThemeAccent } from '@/types'

const accents: { value: ThemeAccent; label: string; color: string }[] = [
  { value: 'violet', label: 'Violet', color: '#7c3aed' },
  { value: 'yellow', label: 'Yellow', color: '#ca8a04' },
  { value: 'orange', label: 'Orange', color: '#ea580c' },
]

export function ThemeSwitcher() {
  const { mode, accent, toggleMode, setAccent, accentColor } = useTheme()
  const [showAccents, setShowAccents] = useState(false)

  return (
    <div className="flex items-center gap-2">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleMode}
        className="w-9 h-9 rounded-full flex items-center justify-center glass transition-colors duration-200"
        style={{ border: `1px solid ${accentColor}30` }}
        aria-label="Toggle theme"
      >
        <AnimatePresence mode="wait">
          {mode === 'dark' ? (
            <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <Sun size={14} style={{ color: '#fbbf24' }} />
            </motion.div>
          ) : (
            <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <Moon size={14} className="text-white/70" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      <div className="relative">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowAccents(!showAccents)}
          className="w-9 h-9 rounded-full flex items-center justify-center glass transition-colors duration-200"
          style={{ border: `1px solid ${accentColor}30` }}
          aria-label="Change accent color"
        >
          <Palette size={14} style={{ color: accentColor }} />
        </motion.button>

        <AnimatePresence>
          {showAccents && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 top-12 glass rounded-xl p-2 flex flex-col gap-1.5 min-w-[120px] z-50"
              style={{ border: '1px solid rgba(255,255,255,0.08)' }}
            >
              {accents.map((a) => (
                <motion.button
                  key={a.value}
                  whileHover={{ x: 4 }}
                  onClick={() => { setAccent(a.value); setShowAccents(false) }}
                  className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-xs font-medium text-white/70 hover:text-white transition-colors"
                  style={{ background: accent === a.value ? `${a.color}20` : 'transparent' }}
                >
                  <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: a.color, boxShadow: `0 0 8px ${a.color}60` }} />
                  {a.label}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

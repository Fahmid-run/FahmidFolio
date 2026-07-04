import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';

export function FloatingResume() {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden xl:block"
    >
      <motion.a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ x: -5, scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group flex items-center"
      >
        <div className="relative">
          {/* Main Button */}
          <div className="w-14 h-48 bg-gradient-to-b from-primary-500 via-secondary-500 to-primary-600 rounded-l-2xl flex flex-col items-center justify-center gap-3 shadow-2xl shadow-primary-500/30 group-hover:shadow-primary-500/50 transition-shadow">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <FileText className="w-4 h-4 text-white" />
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-white text-xs font-bold tracking-widest [writing-mode:vertical-rl] rotate-180">
                RESUME
              </span>
            </div>
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <Download className="w-4 h-4 text-white" />
            </div>
          </div>

          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary-500 via-secondary-500 to-primary-600 rounded-l-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity -z-10" />

          {/* Left Border Glow */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
        </div>
      </motion.a>
    </motion.div>
  );
}

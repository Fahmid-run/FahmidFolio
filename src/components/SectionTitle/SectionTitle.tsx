import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export function SectionTitle({ title, subtitle, align = 'center' }: SectionTitleProps) {
  const textAlign = align === 'center' ? 'text-center' : 'text-left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${textAlign}`}
    >
      <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
        {title}
        <span className="text-primary-400">.</span>
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className={`mt-4 ${align === 'center' ? 'flex justify-center' : ''}`}>
        <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full" />
      </div>
    </motion.div>
  );
}

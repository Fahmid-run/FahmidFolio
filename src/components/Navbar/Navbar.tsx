import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { Menu, X, Code2, Home, User, Wrench, FolderOpen, Mail, FileText } from 'lucide-react';
import { navItems } from '../../data';
import { useScrollPosition, useScrollSpy } from '../../hooks';
import { SCROLL_OFFSET, SCROLL_DURATION } from '../../constants';

const navIcons = {
  home: Home,
  about: User,
  skills: Wrench,
  // experience: Briefcase,
  // education: GraduationCap,
  projects: FolderOpen,
  contact: Mail,
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isScrolled = useScrollPosition(50);
  const activeSection = useScrollSpy({
    sectionIds: navItems.map(item => item.id),
    offset: -100,
  });

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-dark/90 backdrop-blur-2xl shadow-2xl shadow-primary-900/20 border-b border-primary-500/20'
          : 'bg-gradient-to-b from-dark/50 to-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="home"
            smooth
            duration={SCROLL_DURATION}
            offset={SCROLL_OFFSET}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 via-secondary-500 to-primary-600 flex items-center justify-center shadow-lg shadow-primary-500/30 group-hover:shadow-primary-500/50 transition-shadow"
            >
              <Code2 className="w-7 h-7 text-white" />
            </motion.div>
            <div className="hidden sm:block">
              <span className="text-2xl font-display font-bold text-white">
                Fahmid<span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">Uddin</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = navIcons[item.id as keyof typeof navIcons] || Home;
              const isActive = activeSection === item.id;

              return (
                <Link
                  key={item.id}
                  to={item.href}
                  smooth
                  spy
                  duration={SCROLL_DURATION}
                  offset={SCROLL_OFFSET}
                  className="relative cursor-pointer"
                >
                  <motion.div
                    whileHover={{ y: -2 }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-primary-500/20 to-secondary-500/20 text-primary-400'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{item.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 rounded-xl border border-primary-500/30 bg-gradient-to-r from-primary-500/5 to-secondary-500/5"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </motion.div>
                </Link>
              );
            })}
          </div>

          {/* Resume Button Desktop */}
          <div className="hidden lg:block">
            <Link to="contact" smooth duration={SCROLL_DURATION} offset={SCROLL_OFFSET}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 transition-shadow"
              >
                <FileText className="w-4 h-4" />
                Resume
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative w-12 h-12 rounded-xl bg-dark-card border border-primary-500/20 flex items-center justify-center text-gray-300 hover:text-white hover:border-primary-500/40 transition-all"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-dark-surface/98 backdrop-blur-2xl border-t border-primary-500/10"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="grid grid-cols-2 gap-3">
                {navItems.map((item, index) => {
                  const Icon = navIcons[item.id as keyof typeof navIcons] || Home;
                  const isActive = activeSection === item.id;

                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={item.href}
                        smooth
                        duration={SCROLL_DURATION}
                        offset={SCROLL_OFFSET}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-3 px-4 py-4 rounded-xl transition-all cursor-pointer ${
                          isActive
                            ? 'bg-gradient-to-r from-primary-500/20 to-secondary-500/20 text-primary-400 border border-primary-500/30'
                            : 'text-gray-300 hover:text-white hover:bg-white/5 border border-transparent'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
                className="mt-4 pt-4 border-t border-primary-500/10"
              >
                <Link
                  to="contact"
                  smooth
                  duration={SCROLL_DURATION}
                  offset={SCROLL_OFFSET}
                  onClick={() => setIsOpen(false)}
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold shadow-lg shadow-primary-500/30"
                  >
                    <FileText className="w-5 h-5" />
                    Download Resume
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

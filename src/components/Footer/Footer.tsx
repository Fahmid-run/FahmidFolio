import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowUp, Code2, Github, Linkedin, Facebook, Mail } from 'lucide-react';
import { navItems, socialLinks } from '../../data';
import { SCROLL_DURATION, SCROLL_OFFSET } from '../../constants';

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  facebook: Facebook,
  mail: Mail,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-surface border-t border-primary-500/10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <Link
              to="home"
              smooth
              duration={SCROLL_DURATION}
              offset={SCROLL_OFFSET}
              className="flex items-center gap-2 cursor-pointer mb-4"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-display font-bold text-white">
                Portfolio<span className="text-primary-400">.</span>
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Building modern web experiences with clean code and creative solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-display font-bold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.href}
                  smooth
                  duration={SCROLL_DURATION}
                  offset={SCROLL_OFFSET}
                  className="text-gray-400 hover:text-primary-400 transition-colors cursor-pointer"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-display font-bold mb-4">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = socialIcons[link.icon as keyof typeof socialIcons] || Github;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-dark border border-primary-500/20 flex items-center justify-center text-gray-400 hover:text-primary-400 hover:border-primary-500/50 transition-all"
                    aria-label={link.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-500/10 ">
          <p className="text-gray-400 text-sm text-center md:text-center">
            © {currentYear} Portfolio. All rights reserved.
          </p>
          
        </div>
      </div>

      {/* Back to Top Button */}
      <Link
        to="home"
        smooth
        duration={SCROLL_DURATION}
        offset={SCROLL_OFFSET}
        className="fixed bottom-8 right-8 cursor-pointer z-40"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white shadow-lg shadow-primary-500/25"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.div>
      </Link>
    </footer>
  );
}

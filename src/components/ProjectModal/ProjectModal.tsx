import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle, Lightbulb, Code } from 'lucide-react';
import { Project } from '../../types';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <div className="relative min-h-screen flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-dark-card border border-primary-500/20 rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-dark border border-primary-500/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary-500/40 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-dark-card/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 max-h-[60vh] overflow-y-auto">
                {/* Title & Description */}
                <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                  {project.title}
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {project.fullDescription}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Code className="w-5 h-5 text-primary-400" />
                    <h3 className="text-lg font-semibold text-white">Technologies Used</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 text-sm rounded-lg bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-500/20 text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="w-5 h-5 text-primary-400" />
                    <h3 className="text-lg font-semibold text-white">Features</h3>
                  </div>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {project.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-start gap-2 text-gray-300"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2 flex-shrink-0" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Challenges */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Lightbulb className="w-5 h-5 text-secondary-400" />
                    <h3 className="text-lg font-semibold text-white">Challenges Solved</h3>
                  </div>
                  <ul className="space-y-2">
                    {project.challenges.map((challenge, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-start gap-2 text-gray-300"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary-400 mt-2 flex-shrink-0" />
                        {challenge}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 md:flex-none px-6 py-3 rounded-xl bg-dark border border-primary-500/20 text-gray-300 hover:text-white hover:border-primary-500/40 transition-colors flex items-center justify-center gap-2"
                  >
                    <Github className="w-5 h-5" />
                    View Code
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 md:flex-none px-6 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-secondary-600 text-white flex items-center justify-center gap-2 shadow-lg shadow-primary-500/25"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}

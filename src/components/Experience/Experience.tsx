import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { SectionTitle } from '../SectionTitle';
import { experiences } from '../../data';

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-dark-surface/50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <SectionTitle
          title="Experience"
          subtitle="My professional journey"
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-secondary-500 to-transparent transform md:-translate-x-1/2" />

          {/* Experience Cards */}
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 top-8 w-4 h-4 bg-primary-500 rounded-full transform -translate-x-1/2 md:-translate-x-1/2 shadow-glow z-10" />

              {/* Content Card */}
              <div className={`flex-1 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'} pl-8 md:pl-0`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-dark-card border border-primary-500/10 rounded-2xl p-6 hover:border-primary-500/30 transition-colors group"
                >
                  {/* Duration Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 text-primary-400 text-sm font-medium mb-4">
                    <Calendar className="w-4 h-4" />
                    {exp.duration}
                  </div>

                  {/* Title & Company */}
                  <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                    {exp.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm mb-4">
                    <div className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      {exp.company}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Technologies */}
                  {exp.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full bg-dark border border-primary-500/20 text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              </div>

              {/* Empty spacer for alternating layout */}
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

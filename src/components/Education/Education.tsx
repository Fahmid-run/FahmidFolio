import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, CheckCircle } from 'lucide-react';
import { SectionTitle } from '../SectionTitle';
import { educations } from '../../data';

export function Education() {
  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <SectionTitle
          title="Education"
          subtitle="My academic background"
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-secondary-500 via-primary-500 to-transparent transform md:-translate-x-1/2" />

          {/* Education Cards */}
          {educations.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? '' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 top-8 w-4 h-4 bg-secondary-500 rounded-full transform -translate-x-1/2 md:-translate-x-1/2 shadow-glow z-10" />

              {/* Content Card */}
              <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-8 md:pl-0`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-dark-card border border-primary-500/10 rounded-2xl p-6 hover:border-primary-500/30 transition-colors group"
                >
                  {/* Status Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-500/10 text-secondary-400 text-sm font-medium mb-4">
                    <CheckCircle className="w-4 h-4" />
                    {edu.status}
                  </div>

                  {/* Degree & Institution */}
                  <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-secondary-400 transition-colors">
                    {edu.degree}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm mb-4">
                    <div className="flex items-center gap-1">
                      <GraduationCap className="w-4 h-4" />
                      {edu.institution}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {edu.year}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed">
                    {edu.description}
                  </p>
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

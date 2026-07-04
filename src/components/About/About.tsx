import { motion } from 'framer-motion';
import { MapPin, Calendar, Languages, Briefcase, Sparkles, Code2 } from 'lucide-react';
import { SectionTitle } from '../SectionTitle';
import { personalInfo } from '../../data';

const infoItems = [
  { icon: MapPin, label: 'Location', value: personalInfo.location, color: 'from-violet-500 to-purple-500' },
  { icon: Calendar, label: 'Age', value: personalInfo.age.toString(), color: 'from-purple-500 to-fuchsia-500' },
  { icon: Languages, label: 'Languages', value: personalInfo.languages.join(', '), color: 'from-fuchsia-500 to-pink-500' },
  { icon: Briefcase, label: 'Availability', value: personalInfo.availability, color: 'from-pink-500 to-rose-500' },
];

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-40 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-40 w-80 h-80 bg-secondary-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <SectionTitle title="About Me" subtitle="Get to know me better" />

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative">
              {/* Decorative Background */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary-500/20 via-secondary-500/20 to-primary-500/20 rounded-3xl blur-2xl" />

              {/* Main Image Container */}
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  {/* Border Frame */}
                  <div className="absolute -inset-1 bg-gradient-to-br from-primary-500 via-secondary-500 to-primary-500 rounded-3xl opacity-75 blur-sm" />

                  {/* Image */}
                  <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden bg-dark-card">
                    <img
                      src="/assets/hero-photo.png"
                      alt="Developer"
                      className="w-full  object-cover about-image"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent" />

                    {/* Overlay Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-3">
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="w-3 h-3 rounded-full bg-green-500"
                        />
                        <span className="text-white font-medium">{personalInfo.availability}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Card */}
                

                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: 'spring' }}
                  animate={{ y: [0, -10, 0] }}
                  className="absolute -top-4 -left-4 md:-left-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl p-3 shadow-lg"
                >
                  <Sparkles className="w-6 h-6 text-white" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            {/* Bio Card */}
            <div className="bg-dark-card/50 border border-primary-500/10 rounded-3xl p-6 md:p-8 backdrop-blur-sm">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-6">
                Who I Am<span className="text-primary-400">.</span>
              </h3>

              <div className="space-y-4 text-gray-300 leading-relaxed">
                {personalInfo.bio.split('\n\n').slice(0, 3).map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {infoItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="group"
                  >
                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-dark border border-primary-500/10 hover:border-primary-500/30 transition-all duration-300">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider">{item.label}</p>
                        <p className="text-white font-semibold">{item.value}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

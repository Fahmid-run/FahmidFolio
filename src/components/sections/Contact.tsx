import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, MapPin, Send, Loader as Loader2, CircleCheck as CheckCircle2 } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { contactSchema, type ContactFormData } from '@/schemas/contactSchema'
import { useTheme } from '@/hooks/useTheme'

type FormErrors = Partial<Record<keyof ContactFormData, string>>

function GithubIcon({ size = 16, style }: { size?: number; style?: React.CSSProperties }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={style}>
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function LinkedinIcon({ size = 16, style }: { size?: number; style?: React.CSSProperties }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={style}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export function Contact() {
  const { accentColor, accentLight } = useTheme()
  const [form, setForm] = useState<ContactFormData>({ name: '', subject: '', message: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [shake, setShake] = useState<keyof ContactFormData | null>(null)

  const validate = (): boolean => {
    const result = contactSchema.safeParse(form)
    if (result.success) {
      setErrors({})
      return true
    }
    const newErrors: FormErrors = {}
    for (const issue of result.error.issues) {
      const field = issue.path[0] as keyof ContactFormData
      if (!newErrors[field]) newErrors[field] = issue.message
    }
    setErrors(newErrors)
    const firstField = result.error.issues[0]?.path[0] as keyof ContactFormData
    if (firstField) {
      setShake(firstField)
      setTimeout(() => setShake(null), 500)
    }
    return false
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1500))
    console.log('Form submitted:', form)
    setLoading(false)
    setSuccess(true)
    setForm({ name: '', subject: '', message: '' })
    setTimeout(() => setSuccess(false), 4000)
  }

  const inputClass = (field: keyof ContactFormData) =>
    `w-full px-4 py-3.5 rounded-xl text-sm text-white placeholder-white/25 outline-none transition-all duration-300 resize-none ${shake === field ? 'animate-bounce' : ''}`

  const inputStyle = (field: keyof ContactFormData): React.CSSProperties => ({
    background: 'rgba(255,255,255,0.04)',
    border: `1px solid ${errors[field] ? '#ef4444' : 'rgba(255,255,255,0.08)'}`,
    boxShadow: errors[field] ? '0 0 12px rgba(239, 68, 68, 0.2)' : 'none',
  })

  return (
    <section
      id="contact"
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ background:  '#0d0d0d'  }}
    >
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full blur-[120px] opacity-[0.05] pointer-events-none"
        style={{ background: accentColor }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading
          label="Get In Touch"
          title="Let's Work Together"
          subtitle="Have a project in mind? I'd love to hear about it."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Say Hello</h3>
              <p className="text-white/45 leading-relaxed text-sm">
                I'm always open to discussing new projects, creative ideas, or opportunities
                to be part of your vision. Let's create something amazing together.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Mail, label: 'Email', value: 'fahmiduddinnabil6064@gmail.com' },
                { icon: MapPin, label: 'Location', value: 'Noakhali, Bangladesh' },
              ].map(({ icon: Icon, label, value }) => (
                <motion.div
                  key={label}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{ background: `${accentColor}15`, border: `1px solid ${accentColor}30` }}
                  >
                    <Icon size={16} style={{ color: accentLight }} />
                  </div>
                  <div>
                    <p className="text-xs text-white/35 font-medium">{label}</p>
                    <p className="text-sm text-white/75 font-medium">{value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              {[
                { icon: GithubIcon, href: '#', label: 'GitHub' },
                { icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center transition-all duration-300"
                  style={{ border: `1px solid ${accentColor}30`, color: 'rgba(255,255,255,0.5)' }}
                  aria-label={label}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>

            {/* Availability */}
            {/* <div
              className="glass rounded-2xl p-5"
              style={{ border: `1px solid ${accentColor}20` }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                </span>
                <span className="text-green-400 text-xs font-semibold">Available for work</span>
              </div>
              <p className="text-xs text-white/40 leading-relaxed">
                Currently accepting new freelance projects and full-time opportunities.
              </p>
            </div> */}
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-3"
          >
            <div
              className="glass rounded-3xl p-6 md:p-8 relative overflow-hidden"
              style={{ border: `1px solid rgba(255,255,255,0.07)` }}
            >
              <AnimatePresence>
                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    className="absolute inset-x-4 top-4 flex items-center gap-3 px-5 py-4 rounded-2xl text-sm font-semibold z-10"
                    style={{
                      background: 'rgba(34, 197, 94, 0.15)',
                      border: '1px solid rgba(34, 197, 94, 0.3)',
                      color: '#4ade80',
                    }}
                  >
                    <CheckCircle2 size={18} />
                    Message sent! I'll get back to you soon.
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label className="block text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass('name')}
                    style={inputStyle('name')}
                  />
                  <AnimatePresence>
                    {errors.name && (
                      <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        className="text-xs text-red-400 mt-1.5"
                      >
                        {errors.name}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className={inputClass('subject')}
                    style={inputStyle('subject')}
                  />
                  <AnimatePresence>
                    {errors.subject && (
                      <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        className="text-xs text-red-400 mt-1.5"
                      >
                        {errors.subject}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    placeholder="Your Message"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    className={inputClass('message')}
                    style={inputStyle('message')}
                  />
                  <AnimatePresence>
                    {errors.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        className="text-xs text-red-400 mt-1.5"
                      >
                        {errors.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={!loading ? { scale: 1.02 } : {}}
                  whileTap={!loading ? { scale: 0.98 } : {}}
                  className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl font-semibold text-sm text-white transition-all duration-300"
                  style={{
                    background: loading
                      ? `${accentColor}60`
                      : `linear-gradient(135deg, ${accentColor}, ${accentLight})`,
                    boxShadow: loading ? 'none' : `0 0 20px ${accentColor}40, 0 4px 15px rgba(0,0,0,0.3)`,
                    cursor: loading ? 'not-allowed' : 'pointer',
                  }}
                >
                  {loading ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

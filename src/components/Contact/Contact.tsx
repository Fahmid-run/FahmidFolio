import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { Mail, Phone, MapPin, Github, Linkedin, Facebook, Send } from 'lucide-react';
import { SectionTitle } from '../SectionTitle';
import { Button } from '../Button';
import { contactInfo, socialLinks } from '../../data';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  facebook: Facebook,
  mail: Mail,
};

export function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        toast.error('EmailJS not configured. Please add environment variables.');
        return;
      }

      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      toast.success('Message sent successfully!');
      reset();
    } catch {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <SectionTitle
          title="Get In Touch"
          subtitle="Let's work together"
        />

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-dark-card border border-primary-500/10 rounded-2xl p-6 md:p-8 h-full">
              <h3 className="text-2xl font-display font-bold text-white mb-6">
                Let's Connect<span className="text-primary-400">.</span>
              </h3>

              <p className="text-gray-300 leading-relaxed mb-8">
                I'm currently looking for new opportunities. Whether you have a project in mind or just want to say hi, I'll try my best to get back to you!
              </p>

              {/* Contact Details */}
              <div className="space-y-4 mb-8">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-dark border border-primary-500/10 hover:border-primary-500/30 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center group-hover:from-primary-500/30 group-hover:to-secondary-500/30 transition-colors">
                    <Mail className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white font-medium">{contactInfo.email}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-dark border border-primary-500/10 hover:border-primary-500/30 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center group-hover:from-primary-500/30 group-hover:to-secondary-500/30 transition-colors">
                    <Phone className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="text-white font-medium">{contactInfo.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-dark border border-primary-500/10 hover:border-primary-500/30 transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center group-hover:from-primary-500/30 group-hover:to-secondary-500/30 transition-colors">
                    <MapPin className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-white font-medium">{contactInfo.location}</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-gray-400 mb-4">Follow me on social media</p>
                <div className="flex gap-3">
                  {socialLinks.map((link) => {
                    const Icon = socialIcons[link.icon as keyof typeof socialIcons] || Github;
                    return (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 rounded-xl bg-dark border border-primary-500/20 flex items-center justify-center text-gray-400 hover:text-primary-400 hover:border-primary-500/50 hover:bg-primary-500/10 transition-all"
                        aria-label={link.name}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-dark-card border border-primary-500/10 rounded-2xl p-6 md:p-8 h-full">
              <h3 className="text-2xl font-display font-bold text-white mb-6">
                Send a Message<span className="text-primary-400">.</span>
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Your Name</label>
                  <input
                    type="text"
                    {...register('name', { required: 'Name is required' })}
                    className="w-full px-4 py-3 rounded-xl bg-dark border border-primary-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/50 transition-colors"
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Your Email</label>
                  <input
                    type="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    className="w-full px-4 py-3 rounded-xl bg-dark border border-primary-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/50 transition-colors"
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Subject</label>
                  <input
                    type="text"
                    {...register('subject', { required: 'Subject is required' })}
                    className="w-full px-4 py-3 rounded-xl bg-dark border border-primary-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/50 transition-colors"
                    placeholder="Subject"
                  />
                  {errors.subject && (
                    <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Message</label>
                  <textarea
                    {...register('message', { required: 'Message is required' })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-dark border border-primary-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/50 transition-colors resize-none"
                    placeholder="Send Message..."
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <Button type="submit" variant="primary" className="w-full" isLoading={isLoading}>
                  <Send className="w-5 h-5" />
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

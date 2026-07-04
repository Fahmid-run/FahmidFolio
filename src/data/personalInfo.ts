import { PersonalInfo, SocialLink, ContactInfo } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Fahmid Uddin',
  title: 'Full Stack Developer',
  tagline: 'Building modern web experiences with clean code and creative solutions',
  bio: `I am a 20-year-old Full Stack Web Developer from Bangladesh with a strong passion for building modern, scalable, and user-friendly web applications.

I enjoy turning ideas into real products while continuously improving my skills through hands-on projects.

My primary focus is creating responsive frontend interfaces and robust backend systems using modern JavaScript technologies.

I have experience working with HTML, CSS, Tailwind CSS, DaisyUI, JavaScript, TypeScript, React, Next.js, Node.js, Express.js, MongoDB, PostgreSQL, Prisma ORM, and Postman.

Currently, I am focused on building production-ready projects, improving software architecture skills, and preparing for professional software engineering opportunities.

Outside of coding, I enjoy learning new technologies, solving programming challenges, and exploring UI/UX design.`,
  location: 'Bangladesh',
  age: 20,
  languages: ['English','Bangla'],
  availability: 'Open to work',
  resumeUrl: '/resume.pdf',
};

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/Fahmid-run', icon: 'github' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
  { name: 'Email', url: 'mailto:fahmiduddinnabil6064@gmail.com', icon: 'mail' },
];

export const contactInfo: ContactInfo = {
  email: 'fahmiduddinnabil6064@gmail.com',
  phone: '01629279365',
  location: 'Bangladesh',
};

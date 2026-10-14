import { PersonalInfo, SocialLink, ContactInfo } from "../types";

export const personalInfo: PersonalInfo = {
  name: "Fahmid Nabil",
  title: "Full Stack Developer",
  tagline:
    "Building modern web applications with PERN, Prisma, and a problem-solving mindset.",
  bio: `Hi, I'm Fahmid Uddin Nabil, a Full-Stack Web Developer passionate about building modern, responsive, and user-friendly web applications.

I work with the PERN stack (PostgreSQL, Express.js, React.js, and Node.js), along with Prisma ORM, to build full-stack web applications with reliable backends and well-structured databases. I enjoy turning ideas into functional web experiences and exploring how different technologies work together to solve real-world problems.

I'm a continuous learner who believes in improving through hands-on projects, experimentation, and consistent practice. Currently, I'm focused on strengthening my problem-solving skills, data structures and algorithms, and software engineering fundamentals** while expanding my knowledge of full-stack development.

I'm always eager to learn, take on new challenges, and build applications that are useful, maintainable, and impactful.`,
  location: "Bangladesh",
  age: 20,
  languages: ["English", "Bangla"],
  availability: "Open to work",
  resumeUrl: "/resume.pdf",
};

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/Fahmid-run", icon: "github" },
  {
    name: "LinkedIn",
    url: "www.linkedin.com/in/fahmiduddinnabil",
    icon: "linkedin",
  },
  { name: "Email", url: "mailto:fahmiduddinnabil6064@gmail.com", icon: "mail" },
];

export const contactInfo: ContactInfo = {
  email: "fahmiduddinnabil6064@gmail.com",
  phone: "01629279365",
  location: "Bangladesh",
};

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
  level?: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  technologies?: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  year: string;
  status: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  githubUrl: string;
  liveUrl: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  location: string;
  age: number;
  languages: string[];
  availability: string;
  resumeUrl: string;
}

export type Theme = 'dark' | 'light';

import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Toodish',
    shortDescription:
      'A modern and intuitive todo list application with task categorization, reminders, and progress tracking.',
    fullDescription:
      'A feature-rich todo list application designed to help users organize daily tasks efficiently. It supports task creation, categorization, due dates, reminders, and progress tracking. The app is built with a focus on simplicity, performance, and a smooth user experience across devices.',
    image: '',
    technologies: [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'JWT',
      'TailwindCSS',
    ],
    features: [
      'Add, edit, and delete tasks',
      'Task categorization (work, personal, urgent)',
      'Due date and reminder system',
      'Mark tasks as completed or pending',
      'Filter and search tasks',
      'Responsive UI with dark mode support',
    ],
    challenges: [
      'Implemented efficient state management for real-time task updates',
      'Designed a scalable schema for task categories and priorities',
      'Handled date-based filtering and reminder logic',
      'Ensured smooth UX with optimistic UI updates',
    ],
    githubUrl: 'https://github.com',
    liveUrl: 'https://medi-care-hospital-management.vercel.app/',
  },
  {
    id: '2',
    title: 'Hospital Appointment Management System',
    shortDescription:
      'A full-stack healthcare platform that streamlines doctor appointments, patient management, prescriptions, and administrative operations through role-based access control.',

    fullDescription:
      'A modern Hospital Appointment Management System built with the PERN stack. Patients can browse doctors, book and track appointments, view prescriptions and invoices, while doctors manage availability, appointments, and prescriptions. Administrators oversee doctors, patients, appointments, and platform operations through a dedicated dashboard. The project focuses on scalable architecture, secure authentication, RESTful APIs, and responsive user experience.',

    image: '/assets/mediProject.jpg',

    technologies: [
      'React',
      'React Router',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Prisma ORM',
      'JWT',
      'Bcrypt',
    ],

    features: [
      'JWT Authentication & Role-Based Authorization',
      'Patient, Doctor & Admin Dashboards',
      'Doctor Search, Filtering & Appointment Booking',
      'Appointment Tracking with Unique Tracking ID',
      'Doctor Availability & Schedule Management',
      'Prescription & Invoice Management',
      'Review & Rating System',
      'Responsive UI for All Devices',
    ],

    challenges: [
      'Designed a scalable relational database with Prisma and PostgreSQL',
      'Implemented secure authentication and role-based authorization using JWT',
      'Prevented appointment scheduling conflicts through backend validation',
      'Managed complex relationships between users, doctors, patients, appointments, prescriptions, and invoices',
      'Built reusable RESTful APIs with clean architecture and modular folder structure',
      'Developed responsive dashboards for multiple user roles while maintaining a consistent UI',
    ],

    githubUrl: 'https://github.com/Fahmid-run/MediCare-Hospital-Management',

    liveUrl: 'https://medi-care-hospital-management.vercel.app/',
  },
  {
    id: '3',
    title: 'Buggy',
    shortDescription:
      'A modern full-stack bug tracking system with project collaboration, role-based access control, and advanced issue management.',
    fullDescription:
      'Buggy is a full-featured SaaS-style issue tracking platform built for development teams to efficiently manage projects, track bugs, and collaborate in real time. It supports multi-project workspaces, role-based permissions, and detailed bug lifecycle management including assignment, prioritization, status updates, and internal notes. The system is designed with scalability and team productivity in mind, offering a clean dashboard experience with filtering, sorting, and responsive UI for all devices.',

    image: '/assets/buggy.jpg',

    technologies: [
      'React',
      'React Router DOM',
      'TailwindCSS',
      'DaisyUI',
      'Axios',
      'Node.js',
      'Express',
      'Prisma',
      'PostgreSQL',
      'JWT Authentication',
    ],

    features: [
      'Secure authentication with JWT-based login and registration',
      'Role-based access control for project members and admins',
      'Multi-project workspace management',
      'Full CRUD operations for bugs, projects, and notes',
      'Advanced filtering, searching, and sorting for better productivity',
      'Bug lifecycle management (open, in-progress, closed, reopened)',
      'Project collaboration with member assignment system',
      'Responsive dashboard with analytics-style overview',
      'Dark mode support with persistent theme storage',
      'Toast notifications and loading states for better UX',
    ],

    challenges: [
      'Designing a scalable relational database structure for projects, users, and bugs',
      'Managing complex permissions between project owners and team members',
      'Implementing efficient filtering and sorting logic for large datasets',
      'Building a clean and responsive dashboard without using heavy UI libraries',
      'Handling global state without overcomplicating architecture',
    ],

    githubUrl: 'https://github.com/Fahmid-run/Buggy',
    liveUrl: 'https://medi-care-hospital-management.vercel.app/',
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};

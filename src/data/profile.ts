import { ProfileData } from '@/types';

const profileData: ProfileData = {
    personalInfo: {
        name: 'Turki Aziz',
        title: 'Software Engineer',
        subtitle: 'I build systems that hold up under pressure.',
        description: 'Full-stack engineer with a focus on clean architecture and real-world performance. From backend systems and database design to responsive frontends — I care about the craft end to end.',
        bio: [
            'I\'m a software engineer who genuinely gets excited about how things are built under the hood. Not just "it works" — but why it works, what breaks it at scale, and how to design it so the next person doesn\'t suffer. I hold an Engineering Degree in ICT from Sup\'Com Tunisia, but honestly most of what I know came from breaking things and being too stubborn to leave them broken.',
            'I obsess over architecture, clean abstractions, and the kind of code that reads like it was meant to exist. When I\'m not deep in a codebase, I\'m probably starting a side project at 11pm because some random idea wouldn\'t leave me alone. That curiosity is what keeps me sharp — and occasionally sleep-deprived.',
        ],
        location: 'Ariana, Tunisia',
        email: 'mohamedaziz.torki@supcom.tn',
        phone: '+216 28 097 931',
        linkedin: 'https://www.linkedin.com/in/turkimedaziz/',
        github: 'https://github.com/azisauce',
        availableForHire: true,
    },

    skills: [
        {
            icon: 'languages',
            title: 'Languages',
            skills: ['JavaScript', 'TypeScript', 'Python', 'C/C++', 'PHP'],
        },
        {
            icon: 'frontend',
            title: 'Frontend',
            skills: ['React', 'Next.js', 'Angular', 'Vue.js', 'Tailwind CSS'],
        },
        {
            icon: 'backend',
            title: 'Backend',
            skills: ['Node.js', 'NestJS', 'Express.js', 'FastAPI', 'Laravel'],
        },
        {
            icon: 'devops',
            title: 'DevOps',
            skills: ['Docker', 'Nginx', 'GitHub Actions', 'CI/CD', 'Linux'],
        },
        {
            icon: 'cloud',
            title: 'Cloud',
            skills: ['AWS', 'Vercel', 'Neon', 'Cloudinary'],
        },
    ],

    stats: [
        { value: '2+', label: 'Years Exp.' },
        { value: '10+', label: 'Projects' },
    ],

    experiences: [
        {
            title: 'Software Engineer & Tech Lead',
            company: 'Drivago',
            location: 'Ariana, Tunisia',
            startDate: 'Dec. 2024',
            endDate: 'Present',
            bullets: [
                'Promoted to Tech Lead (Dec. 2025) — established architecture standards, enforced code review processes, and mentored developers.',
                'Spearheaded a platform-wide migration to Clean Architecture, decoupling business logic from infrastructure.',
                'Designed and enforced an RBAC system across all platform applications, centralizing permission management.',
                'Engineered a real-time notification system using WebSockets, reducing latency compared to polling-based approach.',
                'Optimized backend performance through multi-layer caching and advanced state management.',
            ],
        },
        {
            title: 'Software Developer — Part-Time, Scrum Master',
            company: 'Drivago',
            location: 'Ariana, Tunisia',
            startDate: 'Sep. 2024',
            endDate: 'Dec. 2024',
            bullets: [
                'Modernized the frontend stack from Angular 14 to Angular 19 across all platform applications.',
                'Redesigned the platform UI with a mobile-first approach, overhauling layouts and UX patterns.',
            ],
        },
        {
            title: 'Software Development Intern',
            company: 'Autoecoleplus.tn',
            location: 'Ariana, Tunisia',
            startDate: 'Jul. 2024',
            endDate: 'Aug. 2024',
            bullets: [
                'Architected a real-time communication system using WebSockets and Socket.io.',
            ],
        },
        {
            title: 'Frontend Development Intern',
            company: 'E-rivez',
            location: 'Ariana, Tunisia',
            startDate: 'Jun. 2024',
            endDate: 'Jun. 2024',
            bullets: [
                'Built a fully responsive UI for an e-education platform using Angular.',
            ],
        },
    ],

    projects: [
        {
            name: 'ConquestMap',
            tagline: 'Interactive Tunisian Map',
            description: 'An interactive geographic application using OpenStreetMap with React-Leaflet for dynamic map rendering and hierarchical navigation across multiple geographic levels.',
            image: '/images/project-conquestmap.png',
            techStack: ['React', 'React-Leaflet', 'OpenStreetMap'],
            githubUrl: 'https://github.com/azisauce/interactive-tunisia-map',
        },
        {
            name: 'Priority',
            tagline: 'Smart Planner',
            description: 'A Next.js web app that ranks user-submitted items based on configurable scoring parameters with a dynamic scoring engine supporting grouped items and customizable formulas.',
            image: '/images/project-priority.png',
            techStack: ['Next.js', 'Neon', 'Cloudinary', 'Vercel'],
            githubUrl: 'https://github.com/azisauce/priority',
            liveUrl: 'https://priority.etorkie.tech/',
        },
        {
            name: 'tekoKard',
            tagline: 'Team-Based Social Platform',
            description: 'A team-oriented social media platform using Vue.js and Express.js, enabling users to create posts, react, comment, and reply within collaborative spaces.',
            image: '/images/project-tekokard.png',
            techStack: ['Vue.js', 'Express.js', 'JWT', 'RBAC'],
            githubUrl: 'https://github.com/azisauce/tekokard',
        },
    ],

    education: [
        {
            degree: 'Engineering Degree, ICT',
            school: 'Higher School of Communication of Tunis — SUPCOM',
            startDate: '2022',
            endDate: '2025',
            details: ['Relevant coursework: Software Architecture, Distributed Systems, Databases, Networks'],
        },
        {
            degree: 'Pre-engineering Degree, Maths-Physics',
            school: 'Tunis Preparatory Engineering Institute — IPEIT',
            startDate: '2020',
            endDate: '2022',
            details: ['Ranked 109/1,500 nationally'],
        },
    ],
};

export default profileData;

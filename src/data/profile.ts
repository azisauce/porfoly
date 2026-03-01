import { ProfileData } from '@/types';

const profileData: ProfileData = {
    personalInfo: {
        name: 'Turki Aziz',
        title: 'Full-Stack Engineer',
        subtitle: 'specializing in scalable APIs',
        bio: [
            'I am a software engineer with strong experience in building web applications. I hold an Engineering Degree in ICT from Sup\'Com Tunisia, and I am deeply passionate about turning complex problems into code, designing server-side logic and clean code structure, and ensuring seamless user experiences.',
            'When I am not coding, I am contributing to open source projects or pushing the boundaries of personal projects. I value code quality, architectural patterns, testing and adapting to the ever-evolving tech landscape.',
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
            icon: '💬',
            title: 'Languages',
            skills: ['JavaScript', 'TypeScript', 'Python', 'C/C++', 'PHP'],
        },
        {
            icon: '⚙️',
            title: 'Backend & Cloud',
            skills: ['Node.js', 'NestJS', 'Express.js', 'FastAPI', 'Laravel', 'Docker', 'Nginx', 'GitHub Actions', 'CI/CD'],
        },
        {
            icon: '🎨',
            title: 'Frontend',
            skills: ['React', 'Next.js', 'Angular', 'Vue.js', 'Tailwind CSS'],
        },
    ],

    stats: [
        { value: '3+', label: 'Years Exp.' },
        { value: '10+', label: 'Projects' },
        { value: '4', label: 'Internships' },
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
            image: '/images/project-conquestmap.jpg',
            techStack: ['React', 'React-Leaflet', 'OpenStreetMap'],
            githubUrl: 'https://github.com/azisauce/interactive-tunisia-map',
        },
        {
            name: 'Priority',
            tagline: 'Smart Planner',
            description: 'A Next.js web app that ranks user-submitted items based on configurable scoring parameters with a dynamic scoring engine supporting grouped items and customizable formulas.',
            image: '/images/project-priority.jpg',
            techStack: ['Next.js', 'Neon', 'Cloudinary', 'Vercel'],
            liveUrl: 'https://priority-umber.vercel.app/',
        },
        {
            name: 'tekoKard',
            tagline: 'Team-Based Social Platform',
            description: 'A team-oriented social media platform using Vue.js and Express.js, enabling users to create posts, react, comment, and reply within collaborative spaces.',
            image: '/images/project-tekokard.jpg',
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

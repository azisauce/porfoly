export interface PersonalInfo {
    name: string;
    title: string;
    subtitle: string;
    bio: string[];
    location: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    availableForHire: boolean;
}

export interface SkillCategory {
    icon: string;
    title: string;
    skills: string[];
}

export interface Experience {
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    bullets: string[];
}

export interface Project {
    name: string;
    tagline: string;
    description: string;
    image: string;
    techStack: string[];
    liveUrl?: string;
    githubUrl?: string;
}

export interface Education {
    degree: string;
    school: string;
    startDate: string;
    endDate: string;
    details: string[];
}

export interface Stat {
    value: string;
    label: string;
}

export interface ProfileData {
    personalInfo: PersonalInfo;
    skills: SkillCategory[];
    experiences: Experience[];
    projects: Project[];
    education: Education[];
    stats: Stat[];
}

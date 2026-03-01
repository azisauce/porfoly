import React from 'react';
import styles from './Projects.module.css';
import profileData from '@/data/profile';
import ProjectCard from '@/components/ui/ProjectCard';

export default function Projects() {
    const { projects } = profileData;

    return (
        <section className={styles.projects} id="projects">
            <div className="container">
                <div className={styles.headerRow}>
                    <div>
                        <h2>Featured Projects</h2>
                        <p>A handful of things I&apos;ve built recently — each one a different problem, the same obsession with getting it right.</p>
                    </div>
                    <a href={profileData.personalInfo.github} className={styles.viewAll} target="_blank" rel="noopener noreferrer">
                        View All →
                    </a>
                </div>

                <div className={styles.grid}>
                    {projects.map((project) => (
                        <ProjectCard key={project.name} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}

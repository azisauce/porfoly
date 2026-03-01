import React from 'react';
import styles from './Projects.module.css';
import profileData from '@/data/profile';

export default function Projects() {
    const { projects } = profileData;

    return (
        <section className={styles.projects} id="projects">
            <div className="container">
                <div className={styles.headerRow}>
                    <div>
                        <h2>Featured Projects</h2>
                        <p>A handful of things I've built recently — each one a different problem, the same obsession with getting it right.</p>
                    </div>
                    <a href={profileData.personalInfo.github} className={styles.viewAll} target="_blank" rel="noopener noreferrer">
                        View All →
                    </a>
                </div>

                <div className={styles.grid}>
                    {projects.map((project) => (
                        <a
                            key={project.name}
                            href={project.liveUrl || project.githubUrl || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.card}
                        >
                            <div className={styles.cardImage}>
                                <div className={styles.cardImagePlaceholder}>
                                    {project.name === 'ConquestMap' ? '🗺️' : project.name === 'Priority' ? '📊' : '💬'}
                                </div>
                            </div>
                            <div className={styles.cardBody}>
                                <h3 className={styles.cardTitle}>{project.name}</h3>
                                <p className={styles.cardDescription}>{project.description}</p>
                                <div className={styles.techTags}>
                                    {project.techStack.map((tech) => (
                                        <span key={tech} className={styles.techTag}>{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

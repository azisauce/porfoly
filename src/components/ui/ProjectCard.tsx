import React from 'react';
import styles from './ProjectCard.module.css';
import { Project } from '@/types';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import MapIcon from '@mui/icons-material/Map';
import BarChartIcon from '@mui/icons-material/BarChart';
import ForumIcon from '@mui/icons-material/Forum';

interface ProjectCardProps {
    project: Project;
}

const placeholderIconMap: Record<string, React.ReactNode> = {
    ConquestMap: <MapIcon sx={{ fontSize: 64, color: 'rgba(255,255,255,0.4)' }} />,
    Priority: <BarChartIcon sx={{ fontSize: 64, color: 'rgba(255,255,255,0.4)' }} />,
    tekoKard: <ForumIcon sx={{ fontSize: 64, color: 'rgba(255,255,255,0.4)' }} />,
};

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.cardImage}>
                {project.image ? (
                    <img
                        src={project.image}
                        alt={`${project.name} screenshot`}
                        className={styles.projectImage}
                    />
                ) : (
                    <div className={styles.cardImagePlaceholder}>
                        {placeholderIconMap[project.name] ?? (
                            <LanguageIcon sx={{ fontSize: 64, color: 'rgba(255,255,255,0.4)' }} />
                        )}
                    </div>
                )}
            </div>

            <div className={styles.cardBody}>
                <div className={styles.cardHeader}>
                    <h3 className={styles.cardTitle}>{project.name}</h3>
                    <div className={styles.cardActions}>
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.iconLink}
                                aria-label={`${project.name} GitHub repository`}
                                title="View on GitHub"
                            >
                                <GitHubIcon sx={{ fontSize: 20 }} />
                            </a>
                        )}
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.iconLink}
                                aria-label={`${project.name} live site`}
                                title="Visit live site"
                            >
                                <LanguageIcon sx={{ fontSize: 20 }} />
                            </a>
                        )}
                    </div>
                </div>

                <p className={styles.cardDescription}>{project.description}</p>

                <div className={styles.techTags}>
                    {project.techStack.map((tech) => (
                        <span key={tech} className={styles.techTag}>{tech}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

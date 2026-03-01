import React from 'react';
import styles from './Footer.module.css';
import profileData from '@/data/profile';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
    const { personalInfo } = profileData;
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.inner}`}>
                <p className={styles.copyright}>
                    © {currentYear} <span className={styles.copyrightAccent}>{personalInfo.name}</span>. Built with passion and innovation.
                </p>

                <div className={styles.socials}>
                    <a
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                        aria-label="LinkedIn"
                    >
                        <LinkedInIcon />
                    </a>
                    <a
                        href={personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                        aria-label="GitHub"
                    >
                        <GitHubIcon />
                    </a>
                    <a
                        href={`mailto:${personalInfo.email}`}
                        className={styles.socialLink}
                        aria-label="Email"
                    >
                        <EmailIcon />
                    </a>
                </div>
            </div>
        </footer>
    );
}

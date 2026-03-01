import React from 'react';
import styles from './Footer.module.css';
import profileData from '@/data/profile';

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
                        in
                    </a>
                    <a
                        href={personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                        aria-label="GitHub"
                    >
                        ⌨
                    </a>
                    <a
                        href={`mailto:${personalInfo.email}`}
                        className={styles.socialLink}
                        aria-label="Email"
                    >
                        ✉
                    </a>
                </div>
            </div>
        </footer>
    );
}

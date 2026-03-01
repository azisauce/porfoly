import React from 'react';
import styles from './Experience.module.css';
import profileData from '@/data/profile';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';

export default function Experience() {
    const { experiences, education } = profileData;

    return (
        <section className={styles.experience} id="experience">
            <div className="container">
                <div className={styles.grid}>
                    {/* Work Experience */}
                    <div className={styles.column}>
                        <h3>
                            <span className={styles.columnIcon}><WorkIcon /></span>
                            Work Experience
                        </h3>
                        <div className={styles.timeline}>
                            {experiences.map((exp, index) => (
                                <div key={index} className={styles.entry}>
                                    <div className={styles.dot} />
                                    <div className={styles.entryTitle}>{exp.title}</div>
                                    <div className={styles.entryCompany}>{exp.company}</div>
                                    <div className={styles.entryDate}>{exp.startDate} — {exp.endDate}</div>
                                    <div className={styles.entryBullets}>
                                        {exp.bullets.map((bullet, i) => (
                                            <div key={i} className={styles.entryBullet}>{bullet}</div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education */}
                    <div className={styles.column}>
                        <h3>
                            <span className={styles.columnIcon}><SchoolIcon /></span>
                            Education & Certs
                        </h3>
                        <div className={styles.timeline}>
                            {education.map((edu, index) => (
                                <div key={index} className={styles.entry}>
                                    <div className={styles.dot} />
                                    <div className={styles.entryTitle}>{edu.degree}</div>
                                    <div className={styles.entryCompany}>{edu.school}</div>
                                    <div className={styles.entryDate}>{edu.startDate} — {edu.endDate}</div>
                                    <div className={styles.entryBullets}>
                                        {edu.details.map((detail, i) => (
                                            <div key={i} className={styles.entryBullet}>{detail}</div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

import React from 'react';
import styles from './About.module.css';
import StatCard from '@/components/ui/StatCard';
import profileData from '@/data/profile';

export default function About() {
    const { personalInfo, stats } = profileData;

    return (
        <section className={styles.about} id="about">
            <div className="container">
                <div className={styles.bio}>
                    <h2>Obsessed with the why behind the what.</h2>
                    {personalInfo.bio.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>

                <div className={styles.statsBar}>
                    {stats.map((stat) => (
                        <StatCard key={stat.label} value={stat.value} label={stat.label} />
                    ))}
                </div>
            </div>
        </section>
    );
}

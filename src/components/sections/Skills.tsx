import React from 'react';
import styles from './Skills.module.css';
import SkillBadge from '@/components/ui/SkillBadge';
import SectionHeader from '@/components/ui/SectionHeader';
import profileData from '@/data/profile';

export default function Skills() {
    const { skills } = profileData;

    return (
        <section className={styles.skills} id="skills">
            <div className="container">
                <SectionHeader
                    title="Skills & Technologies"
                    subtitle="Technologies and tools I work with to build modern, scalable applications."
                />

                <div className={styles.grid}>
                    {skills.map((category) => (
                        <div key={category.title} className={styles.card}>
                            <div className={styles.categoryHeader}>
                                <div className={styles.categoryIcon}>{category.icon}</div>
                                <span className={styles.categoryTitle}>{category.title}</span>
                            </div>
                            <div className={styles.badges}>
                                {category.skills.map((skill) => (
                                    <SkillBadge key={skill} skill={skill} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

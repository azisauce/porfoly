import React from 'react';
import styles from './Skills.module.css';
import SkillBadge from '@/components/ui/SkillBadge';
import SectionHeader from '@/components/ui/SectionHeader';
import profileData from '@/data/profile';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import BrushIcon from '@mui/icons-material/Brush';
import { SvgIconComponent } from '@mui/icons-material';

const iconMap: Record<string, SvgIconComponent> = {
    languages: CodeIcon,
    backend: StorageIcon,
    frontend: BrushIcon,
};

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
                    {skills.map((category) => {
                        const IconComponent = iconMap[category.icon];
                        return (
                            <div key={category.title} className={styles.card}>
                                <div className={styles.categoryHeader}>
                                    <div className={styles.categoryIcon}>
                                        {IconComponent ? <IconComponent /> : null}
                                    </div>
                                    <span className={styles.categoryTitle}>{category.title}</span>
                                </div>
                                <div className={styles.badges}>
                                    {category.skills.map((skill) => (
                                        <SkillBadge key={skill} skill={skill} />
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

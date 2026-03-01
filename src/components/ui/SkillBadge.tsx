import React from 'react';
import styles from './SkillBadge.module.css';

interface SkillBadgeProps {
    skill: string;
}

export default function SkillBadge({ skill }: SkillBadgeProps) {
    return <span className={styles.badge}>{skill}</span>;
}

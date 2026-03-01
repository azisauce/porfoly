import React from 'react';
import styles from './SectionHeader.module.css';

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    align?: 'center' | 'left';
    light?: boolean;
}

export default function SectionHeader({
    title,
    subtitle,
    align = 'center',
    light = false,
}: SectionHeaderProps) {
    return (
        <div className={`${styles.header} ${align === 'left' ? styles.headerLeft : ''}`}>
            <h2 className={`${styles.title} ${light ? styles.titleLight : ''}`}>{title}</h2>
            {subtitle && (
                <p
                    className={`${styles.subtitle} ${align === 'left' ? styles.subtitleLeft : ''} ${light ? styles.subtitleLight : ''}`}
                >
                    {subtitle}
                </p>
            )}
        </div>
    );
}

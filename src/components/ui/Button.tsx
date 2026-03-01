import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'dark';
    href?: string;
    onClick?: () => void;
    type?: 'button' | 'submit';
    className?: string;
}

export default function Button({
    children,
    variant = 'primary',
    href,
    onClick,
    type = 'button',
    className = '',
}: ButtonProps) {
    const classes = `${styles.button} ${styles[variant]} ${className}`.trim();

    if (href) {
        return (
            <a href={href} className={classes} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                {children}
            </a>
        );
    }

    return (
        <button type={type} className={classes} onClick={onClick}>
            {children}
        </button>
    );
}

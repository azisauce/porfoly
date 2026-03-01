'use client';

import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import DescriptionIcon from '@mui/icons-material/Description';

const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Contact', href: '#contact', id: 'contact' },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const NAVBAR_HEIGHT = 80;

        const getSectionTops = () =>
            navItems.map((item) => {
                const el = document.getElementById(item.id);
                if (!el) return { id: item.id, top: Infinity };
                // Absolute position from the top of the document (not viewport)
                return { id: item.id, top: el.getBoundingClientRect().top + window.scrollY };
            });

        const updateActive = () => {
            const scrollY = window.scrollY;
            const sections = getSectionTops();

            // Edge case: at the very bottom of the page → last section wins
            const atBottom =
                window.innerHeight + scrollY >= document.body.scrollHeight - 4;
            if (atBottom) {
                setActiveSection(sections[sections.length - 1].id);
                return;
            }

            // The active section is the last one whose absolute top is
            // at or above (scrollY + NAVBAR_HEIGHT)
            let current = sections[0].id;
            for (const { id, top } of sections) {
                if (top <= scrollY + NAVBAR_HEIGHT) {
                    current = id;
                }
            }
            setActiveSection(current);
        };

        // Delay first run slightly so client-rendered sections are in the DOM
        const timer = setTimeout(updateActive, 100);
        window.addEventListener('scroll', updateActive, { passive: true });

        return () => {
            clearTimeout(timer);
            window.removeEventListener('scroll', updateActive);
        };
    }, []);


    return (
        <nav className={styles.navbar} id="navbar">
            <div className={styles.inner}>
                <a href="#home" className={styles.logo}>
                    Turki&apos;s Portfolio
                    <span className={styles.logoAccent}>.</span>
                </a>

                <div
                    className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span />
                    <span />
                    <span />
                </div>

                <div className={`${styles.navLinks} ${menuOpen ? styles.navLinksOpen : ''}`}>
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className={`${styles.navLink} ${activeSection === item.id ? styles.navLinkActive : ''}`}
                            onClick={() => setMenuOpen(false)}
                        >
                            {item.label}
                        </a>
                    ))}
                    <a
                        href="/Turki_Aziz_Resume.pdf"
                        download="Turki_Aziz_Resume.pdf"
                        className={styles.resumeBtn}
                        onClick={() => setMenuOpen(false)}
                    >
                        <DescriptionIcon sx={{ fontSize: 18 }} />
                        Resume
                    </a>
                </div>
            </div>
        </nav>
    );
}

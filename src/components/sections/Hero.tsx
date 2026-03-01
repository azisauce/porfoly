import React from 'react';
import styles from './Hero.module.css';
import Button from '@/components/ui/Button';
import profileData from '@/data/profile';
import WorkIcon from '@mui/icons-material/Work';
import WavingHandIcon from '@mui/icons-material/WavingHand';

export default function Hero() {
    const { personalInfo } = profileData;

    return (
        <section className={styles.hero} id="home">
            <div className={styles.decorCircle + ' ' + styles.decorCircle1} />
            <div className={styles.decorCircle + ' ' + styles.decorCircle2} />

            <div className={`container ${styles.inner}`}>
                <div className={styles.content}>
                    <p className={styles.greeting}>
                        Hello, I&apos;m <span className={styles.greetingName}>Aziz Turki</span> <WavingHandIcon sx={{ fontSize: 28, verticalAlign: 'middle', color: '#facc15' }} />
                    </p>

                    <h1 className={styles.headline}>
                        {personalInfo.title}
                        <br />
                        <span className={styles.headlineAccent}>{personalInfo.subtitle}</span>
                    </h1>

                    <p className={styles.subtitle}>
                        {personalInfo.description}
                    </p>

                    <div className={styles.actions}>
                        <Button variant="primary" href="#projects">
                            View My Work
                        </Button>
                        <Button variant="secondary" href="#contact">
                            Contact Me
                        </Button>
                    </div>
                </div>

                <div className={styles.imageWrapper}>
                    <div className={styles.profileImage}>
                        <img
                            src="/images/profile.png"
                            alt={personalInfo.name}
                            width={420}
                            height={480}
                        />
                    </div>
                    <div className={styles.floatingCard}>
                        <div className={styles.floatingIcon}>
                            <WorkIcon sx={{ fontSize: 28 }} />
                        </div>
                        <div>
                            <div className={styles.floatingLabel}>Experience</div>
                            <div className={styles.floatingValue}>2+ Years</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

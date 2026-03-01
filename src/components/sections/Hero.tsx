import React from 'react';
import styles from './Hero.module.css';
import Button from '@/components/ui/Button';
import profileData from '@/data/profile';

export default function Hero() {
    const { personalInfo } = profileData;

    return (
        <section className={styles.hero} id="home">
            <div className={styles.decorCircle + ' ' + styles.decorCircle1} />
            <div className={styles.decorCircle + ' ' + styles.decorCircle2} />

            <div className={`container ${styles.inner}`}>
                <div className={styles.content}>
                    {/* {personalInfo.availableForHire && (
                        <div className={styles.badge}>
                            <span className={styles.badgeDot} />
                            AVAILABLE FOR HIRE
                        </div>
                    )} */}

                    <p className={styles.greeting}>
                        Hello, I&apos;m <span className={styles.greetingName}>Aziz Turki</span> 👋
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

                    {/* <div className={styles.socialProof}>
                        <div className={styles.avatars}>
                            {['#0d9488', '#0ea5e9', '#8b5cf6', '#f59e0b'].map((color, i) => (
                                <div
                                    key={i}
                                    className={styles.avatar}
                                    style={{ background: color }}
                                >
                                    {String.fromCharCode(65 + i)}
                                </div>
                            ))}
                        </div>
                        <div className={styles.proofText}>
                            <span className={styles.proofNumber}>10+</span> Projects Delivered
                        </div>
                    </div> */}
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
                        <div className={styles.floatingIcon}>💼</div>
                        <div>
                            <div className={styles.floatingLabel}>Experience</div>
                            <div className={styles.floatingValue}>3+ Years</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

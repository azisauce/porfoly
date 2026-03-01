'use client';

import React from 'react';
import styles from './Contact.module.css';
import profileData from '@/data/profile';

export default function Contact() {
    const { personalInfo } = profileData;

    return (
        <section className={styles.contact} id="contact">
            <div className="container">
                <div className={styles.grid}>
                    {/* Left — Info Card */}
                    <div className={styles.info}>
                        <h2>
                            Let&apos;s build
                            <br />
                            <span className={styles.infoAccent}>something amazing</span>
                            <br />
                            together.
                        </h2>
                        <p>
                            I&apos;m always open to new opportunities. Whether you have a
                            project idea, a job offer, or just want to say hi, I&apos;d love to
                            hear from you.
                        </p>

                        <div className={styles.contactDetail}>
                            <div className={styles.contactIcon}>✉️</div>
                            <div>
                                <div className={styles.contactLabel}>Email</div>
                                <div className={styles.contactValue}>{personalInfo.email}</div>
                            </div>
                        </div>

                        <div className={styles.contactDetail}>
                            <div className={styles.contactIcon}>📍</div>
                            <div>
                                <div className={styles.contactLabel}>Location</div>
                                <div className={styles.contactValue}>{personalInfo.location}</div>
                            </div>
                        </div>

                        <div className={styles.socialLinks}>
                            <p>Connect with me:</p>
                            <div className={styles.socialIcons}>
                                <a
                                    href={personalInfo.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.socialIcon}
                                    aria-label="LinkedIn"
                                >
                                    in
                                </a>
                                <a
                                    href={personalInfo.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.socialIcon}
                                    aria-label="GitHub"
                                >
                                    ⌨
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right — Form */}
                    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                        <div className={styles.formRow}>
                            <div className={styles.inputGroup}>
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" id="firstName" placeholder="John" />
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" id="lastName" placeholder="Doe" />
                            </div>
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="john@example.com" />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" placeholder="Tell me about your project..." />
                        </div>

                        <button type="submit" className={styles.submitBtn}>
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

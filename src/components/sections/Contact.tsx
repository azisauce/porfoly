'use client';

import React, { useState } from 'react';
import styles from './Contact.module.css';
import profileData from '@/data/profile';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

interface FormState {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
}

export default function Contact() {
    const { personalInfo } = profileData;

    const [form, setForm] = useState<FormState>({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState<FormStatus>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const res = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || 'Failed to send message.');
            }

            setStatus('success');
            setForm({ firstName: '', lastName: '', email: '', message: '' });
        } catch (err: unknown) {
            setStatus('error');
            setErrorMessage(
                err instanceof Error ? err.message : 'Something went wrong. Please try again.'
            );
        }
    };

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
                            <div className={styles.contactIcon}><EmailIcon /></div>
                            <div>
                                <div className={styles.contactLabel}>Email</div>
                                <div className={styles.contactValue}>{personalInfo.email}</div>
                            </div>
                        </div>

                        <div className={styles.contactDetail}>
                            <div className={styles.contactIcon}><LocationOnIcon /></div>
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
                                    <LinkedInIcon />
                                </a>
                                <a
                                    href={personalInfo.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.socialIcon}
                                    aria-label="GitHub"
                                >
                                    <GitHubIcon />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right — Form */}
                    <form className={styles.form} onSubmit={handleSubmit} noValidate>
                        <div className={styles.formRow}>
                            <div className={styles.inputGroup}>
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    placeholder="John"
                                    value={form.firstName}
                                    onChange={handleChange}
                                    required
                                    disabled={status === 'loading'}
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    placeholder="Doe"
                                    value={form.lastName}
                                    onChange={handleChange}
                                    required
                                    disabled={status === 'loading'}
                                />
                            </div>
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="john@example.com"
                                value={form.email}
                                onChange={handleChange}
                                required
                                disabled={status === 'loading'}
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Tell me about your project..."
                                value={form.message}
                                onChange={handleChange}
                                required
                                disabled={status === 'loading'}
                            />
                        </div>

                        {/* Feedback */}
                        {status === 'success' && (
                            <div className={styles.feedbackSuccess}>
                                <CheckCircleOutlineIcon sx={{ fontSize: 20 }} />
                                Message sent! I&apos;ll get back to you soon.
                            </div>
                        )}
                        {status === 'error' && (
                            <div className={styles.feedbackError}>
                                <ErrorOutlineIcon sx={{ fontSize: 20 }} />
                                {errorMessage}
                            </div>
                        )}

                        <button
                            type="submit"
                            className={`${styles.submitBtn} ${status === 'loading' ? styles.submitBtnLoading : ''}`}
                            disabled={status === 'loading'}
                        >
                            {status === 'loading' ? (
                                <>
                                    <span className={styles.spinner} />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <SendIcon sx={{ fontSize: 18 }} />
                                    Send Message
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

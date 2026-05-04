"use client";

import { useEffect, useRef, useState } from 'react';
import { Send } from 'lucide-react';
import styles from './Contact.module.css';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className={styles.contact} ref={sectionRef}>
      <div
        className={styles.sectionHeader}
        style={{
          opacity: revealed ? 1 : 0,
          transform: revealed ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        <span className={styles.sectionTag}>// contact</span>
        <h2 className={styles.title}>Travaillons ensemble</h2>
        <p className={styles.text}>
          Un projet en tête&nbsp;? N&apos;hésitez pas à m&apos;envoyer un message, je serai ravi d&apos;en discuter.
        </p>
      </div>

      <div
        style={{
          opacity: revealed ? 1 : 0,
          transform: revealed ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.9s cubic-bezier(0.16,1,0.3,1) 150ms, transform 0.9s cubic-bezier(0.16,1,0.3,1) 150ms',
        }}
      >
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label htmlFor="name" className={styles.label}>Nom complet</label>
              <input type="text" id="name" className={styles.input} placeholder="Jean Dupont" required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input type="email" id="email" className={styles.input} placeholder="jean@example.com" required />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="subject" className={styles.label}>Sujet</label>
            <input type="text" id="subject" className={styles.input} placeholder="Création d'un site vitrine..." />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="message" className={styles.label}>Message</label>
            <textarea
              id="message"
              className={styles.textarea}
              placeholder="Parlez-moi de votre projet..."
              required
            />
          </div>

          <button type="submit" className={`${styles.submitBtn} ${sent ? styles.sent : ''}`}>
            {sent ? (
              <>Message envoyé ✓</>
            ) : (
              <>
                Envoyer le message
                <Send size={17} className={styles.sendIcon} />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}

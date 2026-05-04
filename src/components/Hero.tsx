"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiJavascript, SiPython, SiReact } from 'react-icons/si';
import BlurText from './ui/BlurText';
import styles from './Hero.module.css';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 120);
    return () => clearTimeout(t);
  }, []);

  const fadeUp = (delay: number): React.CSSProperties => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'translateY(0)' : 'translateY(18px)',
    transition: `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
  });

  const imageAnim: React.CSSProperties = {
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'scale(1) translateY(0)' : 'scale(0.96) translateY(20px)',
    transition: 'opacity 1.1s cubic-bezier(0.16,1,0.3,1) 180ms, transform 1.1s cubic-bezier(0.16,1,0.3,1) 180ms',
  };

  return (
    <section className={styles.hero}>
      {/* Background layers */}
      <div className={styles.gridBg} />
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      <div className={styles.orb3} />

      {/* Floating Tech Icons */}
      <div className={`${styles.floatingIcon} ${styles.icon1}`}>
        <SiJavascript size={38} color="#F7DF1E" />
      </div>
      <div className={`${styles.floatingIcon} ${styles.icon2}`}>
        <SiPython size={38} color="#3776AB" />
      </div>
      <div className={`${styles.floatingIcon} ${styles.icon3}`}>
        <SiReact size={38} color="#61DAFB" />
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <div style={fadeUp(0)}>
            <div className={styles.statusBadge}>
              <span className={styles.statusDot} />
              Disponible pour une mission freelance
            </div>
          </div>

          <div style={fadeUp(80)}>
            <p className={styles.greeting}>Hello, I&apos;m</p>
          </div>

          <BlurText
            text="Flo.Dev"
            as="h1"
            className={styles.title}
            delay={110}
            startVisible={false}
            style={{ letterSpacing: '-0.05em', lineHeight: '1', marginTop: '-0.25rem' }}
          />

          <div style={fadeUp(400)}>
            <h3 className={styles.headline}>
              <span className={styles.headlineBlue}>Concevoir l&apos;expérience.</span>
              <br />
              <span className={styles.headlineBlue}>Construire le produit.</span>
            </h3>
          </div>

          <div style={fadeUp(550)}>
            <p className={styles.subtitle}>
              J&apos;accompagne les équipes de la{' '}
              <strong className={styles.strongText}>réflexion produit</strong> jusqu&apos;à la{' '}
              <strong className={styles.strongText}>mise en production</strong>.
              Développement web et conception, avec une approche structurée et orientée résultats.
            </p>
          </div>

          <div className={styles.actions} style={fadeUp(700)}>
            <button
              className={styles.primaryBtn}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Discutons de votre projet
              <span className={styles.btnArrow}>→</span>
            </button>
            <button
              className={styles.secondaryBtn}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Voir mes réalisations
            </button>
          </div>

          <div className={styles.socials} style={fadeUp(850)}>
            <a href="#" className={styles.socialBtn} aria-label="GitHub">
              <FaGithub size={19} />
            </a>
            <a href="#" className={styles.socialBtn} aria-label="LinkedIn">
              <FaLinkedin size={19} />
            </a>
            <a href="#" className={styles.socialBtn} aria-label="Email">
              <FaEnvelope size={19} />
            </a>
          </div>
        </div>

        <div className={styles.imageWrapper} style={imageAnim}>
          <div className={styles.imageGlow} />
          <Image
            src="/hero-portrait.png"
            alt="Portrait de Flo.Dev"
            width={400}
            height={500}
            className={styles.profileImage}
            priority
          />
          <div className={styles.imageBorder} />
        </div>
      </div>
    </section>
  );
}

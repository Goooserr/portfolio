"use client";

import Image from 'next/image';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiJavascript, SiPython, SiReact } from 'react-icons/si';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Floating Tech Icons */}
      <div className={`${styles.floatingIcon} ${styles.icon1}`}>
        <SiJavascript size={40} color="#F7DF1E" />
      </div>
      <div className={`${styles.floatingIcon} ${styles.icon2}`}>
        <SiPython size={40} color="#3776AB" />
      </div>
      <div className={`${styles.floatingIcon} ${styles.icon3}`}>
        <SiReact size={40} color="#61DAFB" />
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.statusBadge}>
            <span className={styles.statusDot}></span>
            Disponible pour une mission freelance
          </div>
          
          <h2 className={styles.greeting}>Hello, I'm</h2>
          <h1 className={styles.title}>Flo.Dev <span className={styles.wave}>👋</span></h1>
          
          <h3 className={styles.headline}>
            <span className={styles.headlineBlue}>Concevoir l'expérience.</span><br />
            <span className={styles.headlineBlue}>Construire le produit.</span>
          </h3>
          
          <p className={styles.subtitle}>
            J'accompagne les équipes de la <strong className={styles.strongText}>réflexion produit</strong> jusqu'à la <strong className={styles.strongText}>mise en production</strong>. 
            Développement web et conception, avec une approche structurée et orientée résultats.
          </p>
          
          <div className={styles.actions}>
            <button className={styles.primaryBtn} onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Discutons de votre projet &rarr;
            </button>
            <button className={styles.secondaryBtn} onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              Voir mes réalisations
            </button>
          </div>

          <div className={styles.socials}>
            <a href="#" className={styles.socialBtn}><FaGithub size={20} /></a>
            <a href="#" className={styles.socialBtn}><FaLinkedin size={20} /></a>
            <a href="#" className={styles.socialBtn}><FaEnvelope size={20} /></a>
          </div>
        </div>
        
        <div className={styles.imageWrapper}>
          <Image 
            src="/hero-portrait.png" 
            alt="Portrait" 
            width={400} 
            height={500} 
            className={styles.profileImage} 
            priority 
          />
        </div>
      </div>
    </section>
  );
}

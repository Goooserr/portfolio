"use client";

import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        Flo<span>.Dev</span>
      </div>
      <nav className={styles.nav}>
        <a href="#skills" className={styles.link}>Compétences</a>
        <a href="#projects" className={styles.link}>Projets</a>
        <a href="#pricing" className={styles.link}>Tarifs</a>
        <a href="#contact" className={styles.contactBtn}>Me contacter</a>
      </nav>
    </header>
  );
}

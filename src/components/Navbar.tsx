"use client";

import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <header className={styles.header}>
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

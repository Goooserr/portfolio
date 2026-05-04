"use client";

import { useEffect, useRef, useState } from 'react';
import { Code2, Braces, FileJson, Layout, Terminal, GitBranch } from 'lucide-react';
import styles from './Skills.module.css';

const skills = [
  {
    name: 'React & Next.js',
    description: "Développement d'interfaces modernes, rapides et optimisées pour le SEO avec React et Next.js.",
    icon: <Braces size={26} />,
  },
  {
    name: 'TypeScript',
    description: 'Typage statique pour un code plus robuste, maintenable et avec moins de bugs en production.',
    icon: <FileJson size={26} />,
  },
  {
    name: 'JavaScript & DOM',
    description: "Maîtrise du langage natif pour des interactions complexes et des animations fluides.",
    icon: <Code2 size={26} />,
  },
  {
    name: 'Design & Intégration',
    description: "Je transforme les maquettes Figma en composants réutilisables avec HTML5, CSS3, ou Tailwind.",
    icon: <Layout size={26} />,
  },
  {
    name: 'Backend Node.js',
    description: "Création d'API RESTful robustes et gestion de bases de données relationnelles ou NoSQL.",
    icon: <Terminal size={26} />,
  },
  {
    name: 'Outils & DevOps',
    description: 'Utilisation quotidienne de Git, GitHub, et déploiements continus sur Vercel ou VPS.',
    icon: <GitBranch size={26} />,
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);

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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--glow-x', `${e.clientX - rect.left}px`);
    card.style.setProperty('--glow-y', `${e.clientY - rect.top}px`);
    card.style.setProperty('--glow-opacity', '1');
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.setProperty('--glow-opacity', '0');
  };

  return (
    <section id="skills" className={styles.skills} ref={sectionRef}>
      <div
        className={styles.sectionHeader}
        style={{
          opacity: revealed ? 1 : 0,
          transform: revealed ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        <span className={styles.sectionTag}>// compétences</span>
        <h2 className={styles.title}>Ce que je maîtrise</h2>
        <p className={styles.subtitle}>Du design à la production, je construis des applications pensées pour durer.</p>
      </div>

      <div className={styles.grid}>
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`${styles.skillCard} ${revealed ? styles.cardReveal : ''}`}
            style={{ '--card-delay': `${index * 90}ms` } as React.CSSProperties}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className={styles.cardGlow} />
            <div className={styles.iconWrapper}>
              <span className={styles.skillIcon}>{skill.icon}</span>
            </div>
            <h3 className={styles.skillName}>{skill.name}</h3>
            <p className={styles.skillDescription}>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

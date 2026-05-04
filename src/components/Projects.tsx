"use client";

import { useEffect, useRef, useState } from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import styles from './Projects.module.css';

const projects = [
  {
    title: 'Flozy',
    description:
      'Plateforme SaaS tout-en-un pour artisans et TPE. Gestion de devis, facturation, CRM et réservations avec une interface intuitive et performante.',
    tags: ['Node.js', 'React', 'Stripe', 'PostgreSQL', 'SaaS'],
    link: 'https://www.flozy.fr/',
    image: '/flozy.png',
  },
  {
    title: 'FrenchLifeRP (Arma 3)',
    description:
      "Développement complet d'un serveur de jeu de rôle type Altis Life. Création de scripts complexes, interfaces in-game, et gestion de la base de données joueurs.",
    tags: ['SQF', 'MySQL (extDB3)', 'UI/UX Arma', 'Admin Serveur'],
    link: 'https://frenchliferp.fr/',
    image: '/frenchliferp.png',
  },
  {
    title: 'Projet E-commerce',
    description:
      "Une plateforme de vente en ligne complète avec panier, paiement sécurisé et panel d'administration.",
    tags: ['Next.js', 'Stripe', 'TailwindCSS'],
    image: '/ecommerce.png',
  },
  {
    title: 'Portfolio Personnel',
    description: 'Mon propre portfolio conçu avec un design moderne, dark mode et des animations fluides.',
    tags: ['Next.js', 'Vanilla CSS', 'UI/UX'],
    image: '/portfolio.png',
  },
];

export default function Projects() {
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
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className={styles.projects} ref={sectionRef}>
      <div
        className={styles.sectionHeader}
        style={{
          opacity: revealed ? 1 : 0,
          transform: revealed ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        <span className={styles.sectionTag}>// projets</span>
        <h2 className={styles.title}>Mes Réalisations</h2>
      </div>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div
            key={index}
            className={`${styles.card} ${revealed ? styles.cardReveal : ''}`}
            style={{ '--card-delay': `${index * 100}ms` } as React.CSSProperties}
          >
            <div className={styles.imageWrapper}>
              {project.image && (
                <Image src={project.image} alt={project.title} fill style={{ objectFit: 'cover' }} />
              )}
              <div className={styles.imageOverlay}>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.overlayBtn}
                  >
                    <ArrowUpRight size={20} />
                    Visiter le site
                  </a>
                )}
              </div>
            </div>

            <div className={styles.content}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.tags}>
                {project.tags.map((tag, i) => (
                  <span key={i} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  Visiter le site <ExternalLink size={14} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

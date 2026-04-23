import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import styles from './Projects.module.css';

const projects = [
  {
    title: "Flozy",
    description: "Plateforme SaaS tout-en-un pour artisans et TPE. Gestion de devis, facturation, CRM et réservations avec une interface intuitive et performante.",
    tags: ["Node.js", "React", "Stripe", "PostgreSQL", "SaaS"],
    link: "https://www.flozy.fr/",
    image: "/flozy.png"
  },
  {
    title: "FrenchLifeRP (Arma 3)",
    description: "Développement complet d'un serveur de jeu de rôle type Altis Life. Création de scripts complexes, interfaces in-game, et gestion de la base de données joueurs.",
    tags: ["SQF", "MySQL (extDB3)", "UI/UX Arma", "Admin Serveur", "API Teamspeak"],
    link: "https://frenchliferp.fr/",
    image: "/frenchliferp.png"
  },
  {
    title: "Projet E-commerce",
    description: "Une plateforme de vente en ligne complète avec panier, paiement sécurisé et panel d'administration.",
    tags: ["Next.js", "Stripe", "TailwindCSS"],
    image: "/ecommerce.png"
  },
  {
    title: "Portfolio Personnel",
    description: "Mon propre portfolio conçu avec un design moderne, dark mode et des animations fluides.",
    tags: ["Next.js", "Vanilla CSS", "UI/UX"],
    image: "/portfolio.png"
  }
];

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.title}>Mes Projets</h2>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imagePlaceholder}>
              {project.image ? (
                <Image src={project.image} alt={project.title} fill style={{ objectFit: "cover" }} />
              ) : (
                `[Image ${index + 1}]`
              )}
            </div>
            <div className={styles.content}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.tags}>
                {project.tags.map((tag, i) => (
                  <span key={i} className={styles.tag}>{tag}</span>
                ))}
              </div>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                  Visiter le site <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

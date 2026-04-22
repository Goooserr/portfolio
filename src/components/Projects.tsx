import styles from './Projects.module.css';

const projects = [
  {
    title: "Projet E-commerce",
    description: "Une plateforme de vente en ligne complète avec panier, paiement sécurisé et panel d'administration.",
    tags: ["Next.js", "Stripe", "TailwindCSS"]
  },
  {
    title: "Application Météo",
    description: "Une application web dynamique qui affiche la météo en temps réel en utilisant une API externe.",
    tags: ["React", "API", "CSS Modules"]
  },
  {
    title: "Portfolio Personnel",
    description: "Mon propre portfolio conçu avec un design moderne, dark mode et des animations fluides.",
    tags: ["Next.js", "Vanilla CSS", "UI/UX"]
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
              [Image {index + 1}]
            </div>
            <div className={styles.content}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.tags}>
                {project.tags.map((tag, i) => (
                  <span key={i} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

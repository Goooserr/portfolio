import { Code2, Braces, FileJson, Hash, Database, Layout, Terminal, GitBranch } from 'lucide-react';
import styles from './Skills.module.css';

const skills = [
  { name: "React & Next.js", description: "Développement d'interfaces modernes, rapides et optimisées pour le SEO avec React et Next.js.", icon: <Braces size={28} /> },
  { name: "TypeScript", description: "Typage statique pour un code plus robuste, maintenable et avec moins de bugs en production.", icon: <FileJson size={28} /> },
  { name: "JavaScript & DOM", description: "Maîtrise du langage natif pour des interactions complexes et des animations fluides.", icon: <Code2 size={28} /> },
  { name: "Design & Intégration", description: "Je transforme les maquettes Figma en composants réutilisables avec HTML5, CSS3, ou Tailwind.", icon: <Layout size={28} /> },
  { name: "Backend Node.js", description: "Création d'API RESTful robustes et gestion de bases de données relationnelles ou NoSQL.", icon: <Terminal size={28} /> },
  { name: "Outils & DevOps", description: "Utilisation quotidienne de Git, GitHub, et déploiements continus sur Vercel ou VPS.", icon: <GitBranch size={28} /> }
];

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <h2 className={styles.title}>Compétences</h2>
      <p className={styles.subtitle}>Du design à la production, je construis des applications pensées pour durer.</p>
      
      <div className={styles.grid}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skillCard}>
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

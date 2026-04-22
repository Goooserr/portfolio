import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.imageContainer}>
        <div className={styles.imagePlaceholder}>
          [Photo de Florian]
        </div>
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>À propos de moi</h2>
        <p className={styles.text}>
          Passionné par le web et les nouvelles technologies, je m'appelle Florian, j'ai 23 ans et je viens de Chambéry. 
          Mon objectif est de créer des sites internet qui ne sont pas seulement fonctionnels, mais qui offrent une véritable expérience utilisateur.
        </p>
        <p className={styles.text}>
          Toujours à la recherche de nouveaux défis, j'aime résoudre des problèmes complexes et transformer des idées en réalité grâce au code.
        </p>
      </div>
    </section>
  );
}

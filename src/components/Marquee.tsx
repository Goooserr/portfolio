import styles from './Marquee.module.css';

const companies = [
  "NewQuest",
  "Zeecom",
  "Cappuccino",
  "Oscar Black",
  "Savoiecom",
  "LR Agency",
  "Opallio",
  "Nouvel Oeil",
  "Digital Savoie",
  "Kairn"
];

export default function Marquee() {
  return (
    <section className={styles.container}>
      <p className={styles.label}>Ils me font confiance à Chambéry</p>
      <div className={styles.marquee}>
        <div className={styles.track}>
          {/* First set of companies */}
          {companies.map((company, index) => (
            <div key={`c1-${index}`} className={styles.card}>
              <span className={styles.companyName}>{company}</span>
            </div>
          ))}
          {/* Second set for seamless looping */}
          {companies.map((company, index) => (
            <div key={`c2-${index}`} className={styles.card}>
              <span className={styles.companyName}>{company}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

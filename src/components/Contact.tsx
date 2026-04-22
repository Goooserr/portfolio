"use client";

import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h2 className={styles.title}>Me Contacter</h2>
      <p className={styles.text}>
        Un projet en tête ? N'hésitez pas à m'envoyer un message, je serai ravi d'en discuter avec vous !
      </p>
      
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <div className={styles.inputGroup}>
          <label htmlFor="name" className={styles.label}>Nom complet</label>
          <input type="text" id="name" className={styles.input} placeholder="John Doe" required />
        </div>
        
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input type="email" id="email" className={styles.input} placeholder="john@example.com" required />
        </div>
        
        <div className={styles.inputGroup}>
          <label htmlFor="message" className={styles.label}>Message</label>
          <textarea id="message" className={styles.textarea} placeholder="Parlez-moi de votre projet..." required></textarea>
        </div>
        
        <button type="submit" className={styles.submitBtn}>
          Envoyer le message
        </button>
      </form>
    </section>
  );
}

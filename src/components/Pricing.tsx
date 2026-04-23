"use client";

import { Check } from 'lucide-react';
import styles from './Pricing.module.css';

const pricingPlans = [
  {
    name: "Mission Régie",
    price: "350€",
    unit: "/ jour",
    description: "Idéal pour renforcer votre équipe sur une durée définie.",
    features: [
      "Développement Frontend & Backend",
      "Intégration au sein de votre équipe",
      "Méthodologie Agile",
      "Disponibilité immédiate"
    ],
    recommended: false
  },
  {
    name: "Forfait Projet",
    price: "Sur devis",
    unit: "",
    description: "Création d'un site ou d'une application web de A à Z.",
    features: [
      "Maquettes et Design UX/UI",
      "Développement sur-mesure",
      "Optimisation SEO et performances",
      "Mise en ligne et hébergement"
    ],
    recommended: true
  },
  {
    name: "Maintenance (TMA)",
    price: "150€",
    unit: "/ mois",
    description: "Garantissez la sécurité et la stabilité de votre produit.",
    features: [
      "Mises à jour de sécurité",
      "Sauvegardes régulières",
      "Correction de bugs mineurs",
      "Support prioritaire"
    ],
    recommended: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className={styles.pricing}>
      <h2 className={styles.title}>Tarifs</h2>
      <p className={styles.subtitle}>Des prestations adaptées à vos besoins et à votre budget.</p>
      
      <div className={styles.grid}>
        {pricingPlans.map((plan, index) => (
          <div key={index} className={`${styles.card} ${plan.recommended ? styles.recommended : ''}`}>
            {plan.recommended && <div className={styles.badge}>Le plus demandé</div>}
            <h3 className={styles.cardName}>{plan.name}</h3>
            <p className={styles.cardDescription}>{plan.description}</p>
            <div className={styles.priceContainer}>
              <span className={styles.price}>{plan.price}</span>
              <span className={styles.unit}>{plan.unit}</span>
            </div>
            
            <ul className={styles.features}>
              {plan.features.map((feature, i) => (
                <li key={i} className={styles.feature}>
                  <Check size={20} className={styles.checkIcon} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <button className={plan.recommended ? styles.primaryBtn : styles.secondaryBtn} onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Me contacter
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

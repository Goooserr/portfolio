"use client";

import { useEffect, useRef, useState } from 'react';
import { Check } from 'lucide-react';
import styles from './Pricing.module.css';

const pricingPlans = [
  {
    name: 'Mission Régie',
    price: '350€',
    unit: '/ jour',
    description: 'Idéal pour renforcer votre équipe sur une durée définie.',
    features: [
      'Développement Frontend & Backend',
      'Intégration au sein de votre équipe',
      'Méthodologie Agile',
      'Disponibilité immédiate',
    ],
    recommended: false,
  },
  {
    name: 'Forfait Projet',
    price: 'Sur devis',
    unit: '',
    description: "Création d'un site ou d'une application web de A à Z.",
    features: [
      'Maquettes et Design UX/UI',
      'Développement sur-mesure',
      'Optimisation SEO et performances',
      'Mise en ligne et hébergement',
    ],
    recommended: true,
  },
  {
    name: 'Maintenance (TMA)',
    price: '150€',
    unit: '/ mois',
    description: 'Garantissez la sécurité et la stabilité de votre produit.',
    features: [
      'Mises à jour de sécurité',
      'Sauvegardes régulières',
      'Correction de bugs mineurs',
      'Support prioritaire',
    ],
    recommended: false,
  },
];

export default function Pricing() {
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
    <section id="pricing" className={styles.pricing} ref={sectionRef}>
      <div
        className={styles.sectionHeader}
        style={{
          opacity: revealed ? 1 : 0,
          transform: revealed ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        <span className={styles.sectionTag}>// tarifs</span>
        <h2 className={styles.title}>Tarifs</h2>
        <p className={styles.subtitle}>Des prestations adaptées à vos besoins et à votre budget.</p>
      </div>

      <div className={styles.grid}>
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`${styles.card} ${plan.recommended ? styles.recommended : ''} ${revealed ? styles.cardReveal : ''}`}
            style={{ '--card-delay': `${index * 120}ms` } as React.CSSProperties}
          >
            {plan.recommended && <div className={styles.badge}>Le plus demandé ✦</div>}

            <div className={styles.cardTop}>
              <h3 className={styles.cardName}>{plan.name}</h3>
              <p className={styles.cardDescription}>{plan.description}</p>
            </div>

            <div className={styles.priceContainer}>
              <span className={styles.price}>{plan.price}</span>
              {plan.unit && <span className={styles.unit}>{plan.unit}</span>}
            </div>

            <ul className={styles.features}>
              {plan.features.map((feature, i) => (
                <li key={i} className={styles.feature}>
                  <span className={styles.checkIcon}>
                    <Check size={15} strokeWidth={3} />
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className={plan.recommended ? styles.primaryBtn : styles.secondaryBtn}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Me contacter
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

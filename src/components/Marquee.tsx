"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Marquee.module.css';

const companies = [
  { name: "BA Production", logo: "https://logo.clearbit.com/ba-production.fr" },
  { name: "Ouiglass Chambéry", logo: "https://logo.clearbit.com/ouiglass.com" },
  { name: "Valiant-esport", logo: "https://logo.clearbit.com/valiant-esport.fr" },
  { name: "DataSolution", logo: "https://logo.clearbit.com/datasolution.fr" }
];

export default function Marquee() {
  return (
    <section className={styles.container}>
      <p className={styles.label}>Ils me font confiance</p>
      <div className={styles.marquee}>
        <div className={styles.track}>
          {[...companies, ...companies, ...companies, ...companies].map((company, index) => (
            <div key={index} className={styles.card}>
              <LogoItem company={company} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LogoItem({ company }: { company: typeof companies[0] }) {
  const [error, setError] = useState(false);

  if (error || !company.logo) {
    return <span className={styles.companyName}>{company.name}</span>;
  }

  return (
    <div className={styles.logoWrapper}>
      <Image 
        src={company.logo} 
        alt={company.name} 
        width={150}
        height={50}
        className={styles.logo} 
        onError={() => setError(true)}
        unoptimized // Necessary for Clearbit external URLs
      />
    </div>
  );
}

import React from "react";
import styles from "./FirstSection.module.scss";

const FirstSection: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <div className={styles.textBlock}>
          <h1 className={styles.title}>
            Psicologia para uma vida mais leve
          </h1>
          <p className={styles.subtitle}>
            Atendimento humanizado e especializado para você superar desafios emocionais e conquistar bem-estar.
          </p>
          <a href="#" className={styles.ctaButton}>
            Agende sua consulta
          </a>
        </div>
        <div className={styles.imageBlock}>
          <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80" alt="Psicólogo em atendimento" className={styles.heroImage} />
        </div>
      </div>
    </section>
  );
};

export default FirstSection;

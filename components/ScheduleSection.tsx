import Link from "next/link";
import React from "react";
import styles from "./ScheduleSection.module.scss";

const ScheduleSection: React.FC = () => {
  return (
    <section className={styles.scheduleSection}>
      <h2 className={styles.title}>Agende seu Atendimento</h2>
      <p className={styles.description}>
        Entre em contato conosco e agende seu atendimento de forma rápida e fácil.
      </p>
      <a href="#" className={styles.ctaButton}>
        Agendar Atendimento
      </a>
    </section>
  );
};

export default ScheduleSection;

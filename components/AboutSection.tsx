import React from "react";
import styles from "./AboutSection.module.scss";

const AboutSection: React.FC = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.contentWrapper}>
        <img
          src="https://randomuser.me/api/portraits/men/12.jpg"
          alt="Psicólogo"
          className={styles.avatar}
        />
        <div className={styles.textContent}>
          <h2 className={styles.title}>Sobre mim</h2>
          <p className={styles.description}>
            Olá! Meu nome é <strong>Dr. João Silva</strong>, psicólogo formado pela Universidade Federal, com mais de 10 anos de experiência em atendimento clínico. Minha trajetória é marcada pelo compromisso em ajudar pessoas a superarem desafios emocionais, sempre com ética, empatia e constante atualização profissional.<br/><br/>
            Ao longo dos anos, participei de diversos cursos e especializações, aprimorando meu olhar para as demandas contemporâneas da saúde mental. Acredito que cada pessoa é única e merece um atendimento personalizado, acolhedor e baseado em evidências.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

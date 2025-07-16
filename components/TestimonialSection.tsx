import React from "react";
import Image from "next/image";
import styles from "./TestimonialSection.module.scss";

const testimonials = [
  {
    name: "Ana Souza",
    text: "O atendimento foi excelente e superou minhas expectativas. Recomendo muito!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Carlos Pereira",
    text: "Equipe muito profissional e atenciosa. Voltarei com certeza!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Juliana Lima",
    text: "Serviço ágil, transparente e de alta qualidade. Fiquei muito satisfeita!",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg"
  }
];

const TestimonialSection: React.FC = () => {
  return (
    <section className={styles.testimonialSection}>
      <h2 className={styles.title}>Depoimentos de Clientes</h2>
      <div className={styles.testimonialsGrid}>
        {testimonials.map((t, idx) => (
          <div className={styles.testimonialCard} key={idx}>
            <Image width={140} height={140} src={t.avatar} alt={t.name} className={styles.avatar} />
            <p className={styles.text}>&quot;{t.text}&quot;</p>
            <span className={styles.name}>{t.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;

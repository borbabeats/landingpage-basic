import React from "react";
import styles from "./AreasSection.module.scss";
import { FaHeart, FaUserShield, FaUserFriends, FaUserAlt, FaMedal, FaLeaf, FaSadTear } from "react-icons/fa";

const areas = [
  {
    icon: <FaHeart />,
    title: "Terapia de Casais",
    desc: "Apoio para casais em busca de harmonia, comunicação e fortalecimento do vínculo."
  },
  {
    icon: <FaUserShield />,
    title: "Estresse Pós-Traumático",
    desc: "Atendimento especializado para pessoas que passaram por situações traumáticas."
  },
  {
    icon: <FaUserFriends />,
    title: "Adolescentes",
    desc: "Acompanhamento psicológico para jovens em fase de desenvolvimento e desafios."
  },
  {
    icon: <FaUserAlt />,
    title: "Sobreviventes de Violência",
    desc: "Cuidado e acolhimento para quem vivenciou situações de violência física ou emocional."
  },
  {
    icon: <FaSadTear />,
    title: "Ansiedade e Depressão",
    desc: "Tratamento baseado em evidências para transtornos de humor e ansiedade."
  },
  {
    icon: <FaLeaf />,
    title: "Luto e Perdas",
    desc: "Apoio emocional para enfrentar perdas e processos de luto."
  },
  {
    icon: <FaMedal />,
    title: "Desenvolvimento Pessoal",
    desc: "Auxílio no autoconhecimento, autoestima e realização de metas pessoais."
  }
];

const AreasSection: React.FC = () => {
  return (
    <section className={styles.areasSection}>
      <h2 className={styles.title}>Áreas de Atuação</h2>
      <div className={styles.grid}>
        {areas.map((area, idx) => (
          <div className={styles.areaCard} key={idx}>
            <span className={styles.icon}>{area.icon}</span>
            <h3 className={styles.areaTitle}>{area.title}</h3>
            <p className={styles.areaDesc}>{area.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AreasSection;

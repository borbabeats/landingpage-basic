import styles from './BenefitsSection.module.scss';
import { FaSmile, FaHeart, FaComments, FaLightbulb } from 'react-icons/fa';

const benefits = [
  {
    icon: <FaSmile />,
    title: 'Bem-estar emocional',
    description: 'A terapia ajuda a lidar com emoções, ansiedade e estresse, promovendo equilíbrio e autoconhecimento.'
  },
  {
    icon: <FaHeart />,
    title: 'Relacionamentos saudáveis',
    description: 'Melhore suas relações interpessoais, aprendendo a se comunicar e estabelecer limites de forma saudável.'
  },
  {
    icon: <FaComments />,
    title: 'Apoio profissional',
    description: 'Conte com um profissional qualificado para te escutar, orientar e apoiar em momentos difíceis.'
  },
  {
    icon: <FaLightbulb />,
    title: 'Crescimento pessoal',
    description: 'Desenvolva habilidades, supere desafios e descubra novas perspectivas para sua vida.'
  }
];

export default function BenefitsSection() {
  return (
    <section className={styles.benefitsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Benefícios do Tratamento Psicológico</h2>
        <div className={styles.cards}>
          {benefits.map((benefit, idx) => (
            <div className={styles.card} key={idx}>
              <div className={styles.icon}>{benefit.icon}</div>
              <h3 className={styles.cardTitle}>{benefit.title}</h3>
              <p className={styles.cardDescription}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

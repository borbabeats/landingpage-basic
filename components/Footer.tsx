import React from 'react';
import styles from './Footer.module.scss';
import { FaWhatsapp, FaInstagram, FaFacebook, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const phone = '(11) 99999-8888';
const email = 'contato@consultoriopsico.com';
const instagram = 'https://instagram.com/consultorio_psico';
const facebook = 'https://facebook.com/consultorio_psico';
const whatsapp = 'https://wa.me/5511999998888';
const endereco = 'Rua Exemplo, 123 - Bairro, Cidade/SP';
const horarios = 'Seg a Sex: 8h às 19h | Sáb: 8h às 13h';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.info}>
        <div>
          <FaWhatsapp /> <a href={whatsapp} target="_blank" rel="noopener noreferrer">{phone}</a>
        </div>
        <div>
          <FaEnvelope /> <a href={`mailto:${email}`}>{email}</a>
        </div>
        <div>
          <FaMapMarkerAlt /> {endereco}
        </div>
        <div>
          <FaClock /> {horarios}
        </div>
      </div>
      <div className={styles.socials}>
        <a href={instagram} target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href={facebook} target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
      </div>
    </footer>
  );
}

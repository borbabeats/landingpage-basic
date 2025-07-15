import React from 'react';
import styles from './Header.module.scss';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';

const phone = '(11) 99999-8888';
const instagram = 'https://instagram.com/consultorio_psico';
const facebook = 'https://facebook.com/consultorio_psico';
const whatsapp = 'https://wa.me/5511999998888';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.contact}>
        <a href={whatsapp} target="_blank" rel="noopener noreferrer">
          <FaWhatsapp /> {phone}
        </a>
      </div>
      <div className={styles.socials}>
        <a href={instagram} target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href={facebook} target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
      </div>
    </header>
  );
}

import React from 'react';
import styles from './Footer.module.css';
import Logo from '../ui/Logo';

const WA_LINK = 'https://wa.me/573027447175?text=Hola%2C%20quiero%20agendar%20una%20cita';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        {/* Top section */}
        <div className={styles.topGrid}>
          <div className={styles.brand}>
            <Logo />
            <p className={styles.tagline}>
              Cuidado dental de excelencia con calidez humana en Duitama, Boyacá.
            </p>
          </div>

          <div className={styles.linkCol}>
            <h4>Navegación</h4>
            <a href="#inicio">Inicio</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#servicios">Servicios</a>
            <a href="#equipo">Equipo</a>
            <a href="#ubicacion">Contacto</a>
          </div>

          <div className={styles.linkCol}>
            <h4>Servicios</h4>
            <a href="#servicios">Odontología</a>
            <a href="#servicios">Ortodoncia</a>
            <a href="#servicios">Estética Dental</a>
            <a href="#servicios">Implantes</a>
            <a href="#servicios">Blanqueamiento</a>
          </div>

          <div className={styles.contactCol}>
            <h4>Escríbenos</h4>
            <p className={styles.contactText}>
              Agenda tu cita o resuelve tus dudas al instante por WhatsApp.
            </p>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={styles.contactBtn}>
              Agendar Cita →
            </a>
            <div className={styles.contactInfo}>
              <p>📍 Calle 17 #9a-04, Duitama</p>
              <p>📞 +57 302 744 7175</p>
            </div>
            <div className={styles.socials}>
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="Instagram">in</a>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">wa</a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className={styles.bottom}>
          <p>© 2026 Drs. Bustos — Clínica Odontológica. Todos los derechos reservados.</p>
          <div className={styles.bottomLinks}>
            <a href="#">Política de Privacidad</a>
            <a href="#">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

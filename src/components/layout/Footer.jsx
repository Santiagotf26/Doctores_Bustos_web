import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: 'var(--primary)'}}><path d="M7 12c.5 0 1 .5 1 1v2c0 .5-.5 1-1 1s-1-.5-1-1v-2c0-.5.5-1 1-1z"/><path d="M17 12c.5 0 1 .5 1 1v2c0 .5-.5 1-1 1s-1-.5-1-1v-2c0-.5.5-1 1-1z"/><path d="M7 18h10a2 2 0 0 1 2 2v1a0 0 0 0 1 0 0H5a0 0 0 0 1 0 0v-1a2 2 0 0 1 2-2z"/><path d="M22 6c0-3-4-5-4-5s-1 1-1 2c0 2 1 3 3 5a3 3 0 0 0 2-2z"/><path d="M2 6c0-3 4-5 4-5s1 1 1 2c0 2-1 3-3 5a3 3 0 0 1-2-2z"/><path d="M12 2C7 2 5 7 5 12c0 3 1.5 5.5 3 7.5a12 12 0 0 0 8 0c1.5-2 3-4.5 3-7.5 0-5-2-10-7-10z"/></svg>
              <span className={styles.logoText}>Drs.<span>Bustos</span></span>
            </div>
            <p className={styles.tagline}>Excelencia dental y calidez humana en el corazón de Boyacá.</p>
            <div className={styles.socials}>
              <a href="#" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
            </div>
          </div>
          
          <div className={styles.links}>
            <h4 className={styles.linkTitle}>Navegación</h4>
            <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>
          
          <div className={styles.links}>
            <h4 className={styles.linkTitle}>Legales</h4>
            <ul>
              <li><a href="#">Privacidad</a></li>
              <li><a href="#">Términos</a></li>
              <li><a href="#">Consentimiento</a></li>
            </ul>
          </div>
          
          <div className={styles.newsletter}>
            <h4 className={styles.linkTitle}>Duitama, Boyacá</h4>
            <p>Visítanos en el Centro Comercial Plaza.</p>
            <p className={styles.copy}>© 2026 Clínica Drs. Bustos. <br/>Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

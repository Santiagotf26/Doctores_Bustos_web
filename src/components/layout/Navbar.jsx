import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import styles from './Navbar.module.css';
import Button from '../ui/Button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={`container ${styles.topBarContainer}`}>
          <div className={styles.topInfo}>
            <span><Phone size={14} /> (310) 000-0000</span>
            <span><Mail size={14} /> contacto@drsbustos.com</span>
            <span><MapPin size={14} /> Duitama, Boyacá - C.C. Plaza</span>
          </div>
          <div className={styles.topSocials}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </div>
        </div>
      </div>

      <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={`container ${styles.navContainer}`}>
          <div className={styles.logo}>
            <div className={styles.logoIcon}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: 'var(--primary)'}}><path d="M7 12c.5 0 1 .5 1 1v2c0 .5-.5 1-1 1s-1-.5-1-1v-2c0-.5.5-1 1-1z"/><path d="M17 12c.5 0 1 .5 1 1v2c0 .5-.5 1-1 1s-1-.5-1-1v-2c0-.5.5-1 1-1z"/><path d="M7 18h10a2 2 0 0 1 2 2v1a0 0 0 0 1 0 0H5a0 0 0 0 1 0 0v-1a2 2 0 0 1 2-2z"/><path d="M22 6c0-3-4-5-4-5s-1 1-1 2c0 2 1 3 3 5a3 3 0 0 0 2-2z"/><path d="M2 6c0-3-4-5-4-5s1 1 1 2c0 2-1 3-3 5a3 3 0 0 1-2-2z"/><path d="M12 2C7 2 5 7 5 12c0 3 1.5 5.5 3 7.5a12 12 0 0 0 8 0c1.5-2 3-4.5 3-7.5 0-5-2-10-7-10z"/></svg>
            </div>
            <span className={styles.logoText}>Drs.<span>Bustos</span></span>
          </div>

          <div className={styles.desktopMenu}>
            <a href="#inicio">Inicio</a>
            <a href="#servicios">Servicios</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#contacto">Contacto</a>
            <Button variant="primary" size="md" className={styles.bookBtn}>Reserva Ahora</Button>
          </div>

          <button 
            className={styles.mobileMenuToggle}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.active : ''}`}>
          <a href="#inicio" onClick={() => setIsMobileMenuOpen(false)}>Inicio</a>
          <a href="#servicios" onClick={() => setIsMobileMenuOpen(false)}>Servicios</a>
          <a href="#nosotros" onClick={() => setIsMobileMenuOpen(false)}>Nosotros</a>
          <a href="#contacto" onClick={() => setIsMobileMenuOpen(false)}>Contacto</a>
          <Button variant="primary" size="md" className={styles.mobileButton}>Reserva Ahora</Button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';
import Logo from '../ui/Logo';

const WA_LINK = 'https://wa.me/573027447175?text=Hola%2C%20quiero%20agendar%20una%20cita';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('#inicio');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const close = useCallback(() => setMobileOpen(false), []);

  const links = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#equipo', label: 'Equipo' },
    { href: '#ubicacion', label: 'Contacto' },
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : styles.transparent}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#inicio" className={styles.logo}>
          <Logo variant={scrolled ? 'dark' : 'light'} />
        </a>

        <nav className={styles.desktopNav}>
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className={`${styles.navLink} ${active === l.href ? styles.navActive : ''} ${!scrolled ? styles.navLight : ''}`}
              onClick={() => setActive(l.href)}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className={styles.right}>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={styles.cta}>
            Agendar Cita
          </a>
          <button className={`${styles.hamburger} ${!scrolled ? styles.navLight : ''}`} onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && <div className={styles.backdrop} onClick={close} />}
      <aside className={`${styles.sidebar} ${mobileOpen ? styles.open : ''}`}>
        <div className={styles.sidebarTop}>
          <Logo variant="dark" />
          <button onClick={close}><X size={22} /></button>
        </div>
        <nav className={styles.sidebarLinks}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={close}>{l.label}</a>
          ))}
        </nav>
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={styles.sidebarCta}>Agendar Cita</a>
      </aside>
    </header>
  );
};

export default Navbar;

import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

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
    { href: '#inicio', label: 'Home' },
    { href: '#servicios', label: 'Services' },
    { href: '#nosotros', label: 'About Us' },
    { href: '#testimonios', label: 'Testimonials' },
    { href: '#contacto', label: 'Contact' },
  ];

  const LogoComponent = ({ light = false }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C9.5 2 8 4 8 6C8 8.5 10 10 10 13C10 16.5 8 19 6 19C4 19 3 17 3 15" stroke={light ? '#ffffff' : '#0d9488'} strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M12 2C14.5 2 16 4 16 6C16 8.5 14 10 14 13C14 16.5 16 19 18 19C20 19 21 17 21 15" stroke={light ? '#ffffff' : '#0d9488'} strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M12 22C14.5 22 17 20 17 17C17 14 14.5 12 12 12C9.5 12 7 14 7 17C7 20 9.5 22 12 22Z" fill={light ? '#ffffff' : '#0d9488'}/>
      </svg>
      <span style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: '20px',
        fontWeight: 700,
        letterSpacing: '-0.02em',
        color: light ? '#ffffff' : '#0f172a'
      }}>
        Dentora
      </span>
    </div>
  );

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#inicio" className={styles.logo}>
          <LogoComponent light={!scrolled} />
        </a>

        <nav className={styles.desktopNav}>
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className={`${styles.navLink} ${active === l.href ? styles.navActive : ''}`}
              onClick={() => setActive(l.href)}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className={styles.right}>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={styles.cta}>
            Book a Call
          </a>
          <button className={styles.hamburger} onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && <div className={styles.backdrop} onClick={close} />}
      <aside className={`${styles.sidebar} ${mobileOpen ? styles.open : ''}`}>
        <div className={styles.sidebarTop}>
          <LogoComponent />
          <button onClick={close}><X size={22} /></button>
        </div>
        <nav className={styles.sidebarLinks}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={close}>{l.label}</a>
          ))}
        </nav>
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={styles.sidebarCta}>Book a Call</a>
      </aside>
    </header>
  );
};

export default Navbar;

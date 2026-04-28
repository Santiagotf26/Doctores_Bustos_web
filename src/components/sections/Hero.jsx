import React from 'react';
import { motion } from 'framer-motion';
import { Play, User, Phone, Calendar, Clock } from 'lucide-react';
import styles from './Hero.module.css';
import Button from '../ui/Button';
import dentistImage from '../../assets/hero_v2.png';

const Hero = () => {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeIcon}>🦷</span>
            <span>Cuidado Dental de Primera Clase</span>
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.title}
          >
            Tu <span className={styles.highlight}>Mejor Sonrisa</span> <br />
            Comienza <span className={styles.highlight}>Aquí</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={styles.description}
          >
            Ofrecemos tratamientos odontológicos avanzados con la última tecnología y un equipo humano excepcional en Duitama.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={styles.actions}
          >
            <Button variant="primary" size="lg" className={styles.roundedBtn}>Ver Servicios</Button>
            <button className={styles.watchVideo}>
              <div className={styles.playIcon}><Play size={16} fill="currentColor" /></div>
              <span>Ver Video</span>
            </button>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className={styles.imageContainer}
        >
          <div className={styles.blueCircle}></div>
          <img src={dentistImage} alt="Dentista" className={styles.dentistImage} />
        </motion.div>
      </div>

      {/* Appointment Bar */}
      <div className={`container ${styles.bookingContainer}`}>
        <div className={styles.bookingBar}>
          <div className={styles.bookingItem}>
            <label><User size={16} /> Nombre</label>
            <input type="text" placeholder="Tu nombre" />
          </div>
          <div className={styles.divider}></div>
          <div className={styles.bookingItem}>
            <label><Phone size={16} /> Teléfono</label>
            <input type="text" placeholder="Tu número" />
          </div>
          <div className={styles.divider}></div>
          <div className={styles.bookingItem}>
            <label><Calendar size={16} /> Fecha</label>
            <input type="text" placeholder="dd/mm/aaaa" />
          </div>
          <div className={styles.divider}></div>
          <div className={styles.bookingItem}>
            <label><Clock size={16} /> Hora</label>
            <input type="text" placeholder="00:00" />
          </div>
          <Button variant="primary" className={styles.bookingBtn}>Agendar Cita</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

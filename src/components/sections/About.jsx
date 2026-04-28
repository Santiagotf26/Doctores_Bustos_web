import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import styles from './About.module.css';
import Button from '../ui/Button';
import aboutImage from '../../assets/about_v2.png';

const About = () => {
  return (
    <section id="nosotros" className={`${styles.about} section-padding`}>
      <div className="container">
        <div className={styles.grid}>
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.imageContainer}
          >
            <div className={styles.imageShape}>
              <img src={aboutImage} alt="Cuidado Dental" className={styles.image} />
              <div className={styles.toothIcon}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="white" stroke="var(--primary)" strokeWidth="1.5"><path d="M12 2C7 2 5 7 5 12c0 3 1.5 5.5 3 7.5a12 12 0 0 0 8 0c1.5-2 3-4.5 3-7.5 0-5-2-10-7-10z"/></svg>
              </div>
            </div>
          </motion.div>
          
          <div className={styles.content}>
            <span className={styles.subtitle}>NOSOTROS</span>
            <h2 className={styles.title}>15 Años de Excelencia en Cuidado Dental</h2>
            <p className={styles.text}>
              En Drs. Bustos, nos dedicamos a transformar sonrisas con un enfoque humano y profesional. Nuestra clínica en Duitama cuenta con especialistas en todas las áreas de la odontología.
            </p>
            
            <div className={styles.features}>
              <div className={styles.featureItem}>
                <CheckCircle2 className={styles.checkIcon} size={20} />
                <span>Servicios de Odontología Premium</span>
              </div>
              <div className={styles.featureItem}>
                <CheckCircle2 className={styles.checkIcon} size={20} />
                <span>Especialistas Altamente Calificados</span>
              </div>
              <div className={styles.featureItem}>
                <CheckCircle2 className={styles.checkIcon} size={20} />
                <span>Tecnología de Vanguardia</span>
              </div>
            </div>

            <Button variant="primary" size="lg" className={styles.learnMoreBtn}>Saber Más</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';
import styles from './Services.module.css';
import Button from '../ui/Button';
import s1 from '../../assets/service1.png';
import s2 from '../../assets/service2.png';
import s3 from '../../assets/service3.png';

const ToothIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C7 2 5 7 5 12c0 3 1.5 5.5 3 7.5a12 12 0 0 0 8 0c1.5-2 3-4.5 3-7.5 0-5-2-10-7-10z"/></svg>
);

const services = [
  {
    image: s1,
    icon: <ToothIcon size={24} />,
    title: 'Odontología General',
    description: 'Cuidado preventivo y restaurativo integral para mantener tu salud oral en óptimas condiciones.',
  },
  {
    image: s2,
    icon: <ShieldCheck size={24} />,
    title: 'Implantes Dentales',
    description: 'Soluciones permanentes y estéticas para recuperar la funcionalidad y confianza de tu sonrisa.',
  },
  {
    image: s3,
    icon: <Sparkles size={24} />,
    title: 'Blanqueamiento',
    description: 'Tratamientos avanzados para iluminar tu sonrisa de forma segura y efectiva.',
  }
];

const Services = () => {
  return (
    <section id="servicios" className="section-padding">
      <div className="container">
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <span className={styles.subtitle}>NUESTROS SERVICIOS</span>
            <h2 className={styles.title}>Una Amplia Gama de Tratamientos para Tu Sonrisa</h2>
          </div>
          <Button variant="primary" className={styles.headerBtn}>Explorar Todos</Button>
        </div>
        
        <div className={styles.grid}>
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={styles.card}
            >
              <div className={styles.imageWrapper}>
                <img src={service.image} alt={service.title} className={styles.image} />
                <div className={styles.iconOverlay}>
                  {service.icon}
                </div>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDescription}>{service.description}</p>
                <a href="#contacto" className={styles.learnMore}>
                  Saber más <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

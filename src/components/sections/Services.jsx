import React from 'react';
import { motion } from 'framer-motion';
import styles from './Services.module.css';
import serviceImg from '../../assets/service_estetica.png';

const WA_LINK = 'https://wa.me/573027447175?text=Hola%2C%20quiero%20información%20sobre%20';

const services = [
  'Odontología General', 'Ortodoncia Especializada',
  'Estética Dental', 'Implantes Dentales',
  'Blanqueamiento Dental', 'Limpieza Profesional',
  'Endodoncia', 'Odontopediatría',
];

const Services = () => {
  return (
    <section id="servicios" className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.textCol}
          >
            <span className={styles.label}>Tratamientos Destacados</span>
            <h2 className={styles.title}>
              Cuidado Dental Avanzado para una{' '}
              <span>Sonrisa Más Sana</span>
            </h2>
            <p className={styles.desc}>
              Acompaña a cientos de pacientes que logran sonrisas más saludables y brillantes con nuestros tratamientos especializados y atención personalizada.
            </p>

            <div className={styles.servicesGrid}>
              {services.map((s, i) => (
                <a
                  key={i}
                  href={`${WA_LINK}${encodeURIComponent(s)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.serviceItem}
                >
                  {s}
                </a>
              ))}
            </div>

            <a href={`${WA_LINK}servicios`} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
              Consultar Tratamientos →
            </a>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className={styles.imageCol}
          >
            <div className={styles.imageWrap}>
              <img src={serviceImg} alt="Tratamiento dental avanzado" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;

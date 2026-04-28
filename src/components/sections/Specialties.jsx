import React from 'react';
import { motion } from 'framer-motion';
import styles from './Specialties.module.css';
import imgOdonto from '../../assets/service_odontologia.png';
import imgOrtod from '../../assets/service_ortodoncia.png';
import imgEstet from '../../assets/service_estetica.png';

const WA_LINK = 'https://wa.me/573027447175?text=Hola%2C%20quiero%20información%20sobre%20';

const specialties = [
  {
    image: imgOdonto,
    tag: 'Odontología',
    title: 'Odontología General',
    desc: 'Cuidado integral preventivo y restaurativo para mantener tu salud oral en las mejores condiciones.',
    color: '#2563eb',
  },
  {
    image: imgOrtod,
    tag: 'Ortodoncia',
    title: 'Ortodoncia Especializada',
    desc: 'Alineación dental con brackets y sistemas invisibles para una sonrisa perfectamente armónica.',
    color: '#7c3aed',
  },
  {
    image: imgEstet,
    tag: 'Estética',
    title: 'Estética Dental',
    desc: 'Diseño de sonrisa, carillas y blanqueamiento para transformar tu imagen con resultados naturales.',
    color: '#0891b2',
  },
];

const Specialties = () => {
  return (
    <section id="especialidades" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.badge}>Nuestras Especialidades</span>
          <h2 className={styles.title}>
            Cuidado Dental Integral para Cada <span>Sonrisa</span>
          </h2>
          <p className={styles.subtitle}>
            En Drs. Bustos ofrecemos tratamientos especializados con tecnología de vanguardia para mantener tu sonrisa saludable y hermosa.
          </p>
        </div>

        <div className={styles.grid}>
          {specialties.map((sp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={styles.card}
            >
              <div className={styles.cardImage}>
                <img src={sp.image} alt={sp.title} />
                <span className={styles.cardTag} style={{ background: sp.color }}>{sp.tag}</span>
              </div>
              <div className={styles.cardBody}>
                <h3>{sp.title}</h3>
                <p>{sp.desc}</p>
                <a
                  href={`${WA_LINK}${encodeURIComponent(sp.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.cardLink}
                >
                  Consultar por WhatsApp →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;

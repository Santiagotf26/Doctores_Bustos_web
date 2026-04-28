import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import styles from './Doctors.module.css';
import doc1 from '../../assets/about_team.png';

const WA_LINK = 'https://wa.me/573027447175?text=Hola%2C%20quiero%20agendar%20una%20cita';

const Doctors = () => {
  return (
    <section id="equipo" className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left — Doctor profile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.profileCol}
          >
            <div className={styles.profileCard}>
              <img src={doc1} alt="Equipo Drs. Bustos" className={styles.profileImg} />
              <div className={styles.profileInfo}>
                <h3>Dr. Juan Camilo Bustos</h3>
                <span className={styles.role}>Ortodoncista Especializado</span>
                <div className={styles.ratingRow}>
                  <div className={styles.stars}>
                    {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="#fbbf24" color="#fbbf24" />)}
                  </div>
                  <span>4.9 (45+ reseñas)</span>
                </div>
              </div>
            </div>

            <div className={styles.profileCard2}>
              <div className={styles.profileInfo}>
                <h3>Dra. Angélica Bustos</h3>
                <span className={styles.role}>Odontóloga General</span>
                <div className={styles.ratingRow}>
                  <div className={styles.stars}>
                    {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="#fbbf24" color="#fbbf24" />)}
                  </div>
                  <span>4.9 (38+ reseñas)</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Stats & progress */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className={styles.statsCol}
          >
            <div className={styles.statsCard}>
              <div className={styles.statsHeader}>
                <span>Recomendaciones</span>
                <span>Promedio de</span>
              </div>
              <div className={styles.statsGrid}>
                <div className={styles.statBox}>
                  <span className={styles.statLabel}>Revisiones al Año</span>
                  <div className={styles.statValue}>
                    <strong>2</strong>
                    <small>Visitas</small>
                  </div>
                </div>
                <div className={styles.statBox}>
                  <span className={styles.statLabel}>Duración del Tratamiento</span>
                  <div className={styles.statValue}>
                    <strong>40</strong>
                    <small>Min</small>
                  </div>
                </div>
              </div>

              <div className={styles.progressBlock}>
                <div className={styles.progressHeader}>
                  <span>Citas Hoy</span>
                  <span className={styles.progressPct}>85%</span>
                </div>
                <div className={styles.progressBar}>
                  <div className={styles.progressFill} style={{ width: '85%' }} />
                </div>
              </div>
            </div>

            <p className={styles.joinText}>
              Únete a los cientos de pacientes que logran sonrisas más saludables y brillantes con nuestro equipo de especialistas.
            </p>

            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
              Agendar Cita
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Doctors;

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import styles from './FeatureTreatment.module.css';
import doctorImg from '../../assets/hero_dentist.png';
import clinicImg from '../../assets/service_odontologia.png';

const FeatureTreatment = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.leftContent}
          >
            <span className={styles.label}>Tratamiento Destacado</span>
            <h2 className={styles.title}>
              Cuidado Dental Avanzado<br/>para una Sonrisa Más Saludable
            </h2>
            <p className={styles.desc}>
              Únete a los cientos de pacientes que logran sonrisas más saludables y brillantes a través de especialistas expertos y tratamientos personalizados.
            </p>

            {/* Doctor Card */}
            <div className={styles.doctorCard}>
              <img src={doctorImg} alt="Dr. Juan Camilo Bustos" className={styles.doctorImg} />
              <div className={styles.doctorInfo}>
                <h4>Dr. Juan Camilo Bustos</h4>
                <p>Especialista Líder en Ortodoncia</p>
                <div className={styles.rating}>
                  <Star size={12} fill="#fbbf24" color="#fbbf24" />
                  <span>4.9 (45+ reseñas)</span>
                </div>
              </div>
            </div>

            <p className={styles.doctorDesc}>
              Únete a los cientos de pacientes que logran sonrisas más saludables y brillantes a través de especialistas expertos.
            </p>
          </motion.div>

          {/* Right Content - Images & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.rightContent}
          >
            {/* Main Clinic Image */}
            <div className={styles.clinicImageWrap}>
              <img src={clinicImg} alt="Clínica dental" className={styles.clinicImage} />
            </div>

            {/* Stats Card */}
            <div className={styles.statsCard}>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Recomendación</span>
                <span className={styles.statValue}>2 Visitas</span>
                <span className={styles.statSub}>Chequeos por Año</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Tiempo Promedio de Tratamiento</span>
                <span className={styles.statValue}>40 Min</span>
                <div className={styles.progressBar}>
                  <div className={styles.progressFill} style={{ width: '60%' }}></div>
                </div>
                <span className={styles.progressText}>60%</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeatureTreatment;

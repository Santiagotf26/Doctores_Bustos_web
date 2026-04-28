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
            <span className={styles.label}>Feature Treatment</span>
            <h2 className={styles.title}>
              Advanced Dental Care<br/>for a Healthier Smile
            </h2>
            <p className={styles.desc}>
              Join hundreds of patients achieving healthier, brighter smiles through expert clinicians and personalized treatments.
            </p>

            {/* Doctor Card */}
            <div className={styles.doctorCard}>
              <img src={doctorImg} alt="Dr. Daniel Carter" className={styles.doctorImg} />
              <div className={styles.doctorInfo}>
                <h4>Dr. Daniel Carter</h4>
                <p>Lead Dental Specialist</p>
                <div className={styles.rating}>
                  <Star size={12} fill="#fbbf24" color="#fbbf24" />
                  <span>4.9 (40+ reviews)</span>
                </div>
              </div>
            </div>

            <p className={styles.doctorDesc}>
              Join hundreds of patients achieving healthier, brighter smiles through expert clinicians.
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
              <img src={clinicImg} alt="Dental clinic" className={styles.clinicImage} />
            </div>

            {/* Stats Card */}
            <div className={styles.statsCard}>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Recommendation</span>
                <span className={styles.statValue}>2 Visits</span>
                <span className={styles.statSub}>Checkups Per Year</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Average Treatment Time</span>
                <span className={styles.statValue}>40 Mins</span>
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

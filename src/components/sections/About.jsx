import React from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.css';
import teamImg1 from '../../assets/hero_dentist.png';
import teamImg2 from '../../assets/hero_smile.png';
import patientImg from '../../assets/service_estetica.png';

const About = () => {
  return (
    <section id="nosotros" className={styles.section}>
      <div className="container">
        <div className={styles.aboutGrid}>
          {/* Left Column - Label & Team Photos */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.leftCol}
          >
            <span className={styles.label}>About Us</span>
            <div className={styles.teamPhotos}>
              <img src={teamImg1} alt="Team member 1" className={styles.teamPhoto} />
              <img src={teamImg2} alt="Team member 2" className={styles.teamPhoto} />
            </div>
          </motion.div>

          {/* Center Column - Main Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.centerCol}
          >
            <h2 className={styles.mainText}>
              We deliver personalized dental treatments with <span className={styles.highlight}>modern</span> technology and gentle care ensuring healthy confident smiles for every patient.
            </h2>
          </motion.div>

          {/* Right Column - Patient Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.rightCol}
          >
            <div className={styles.patientImageWrap}>
              <img src={patientImg} alt="Happy patient" className={styles.patientImage} />
            </div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.statsRow}
        >
          <p className={styles.statsLabel}>Thousands Trust Us for Smiles!</p>
          <div className={styles.statsGrid}>
            <div className={styles.stat}>
              <span className={styles.statValue}>98%</span>
              <span className={styles.statLabel}>Satisfaction Rate</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>2k+</span>
              <span className={styles.statLabel}>Smiles Transformed</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>4.9*</span>
              <span className={styles.statLabel}>Customer Rating</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

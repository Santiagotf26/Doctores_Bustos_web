import React from 'react';
import { motion } from 'framer-motion';
import styles from './SectionTitle.module.css';

const SectionTitle = ({ subtitle, title, centered = false }) => {
  return (
    <div className={`${styles.container} ${centered ? styles.centered : ''}`}>
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={styles.subtitle}
      >
        {subtitle}
      </motion.span>
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={styles.title}
      >
        {title}
      </motion.h2>
      <div className={styles.underline}></div>
    </div>
  );
};

export default SectionTitle;

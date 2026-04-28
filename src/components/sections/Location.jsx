import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone } from 'lucide-react';
import styles from './Location.module.css';

const WA_LINK = 'https://wa.me/573027447175?text=Hola%2C%20quiero%20agendar%20una%20cita';
const MAPS_LINK = 'https://www.google.com/maps/dir//Calle+17+%239a-04,+Duitama,+Boyac%C3%A1,+Colombia';

const Location = () => {
  return (
    <section id="ubicacion" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.label}>Ubicación</span>
          <h2 className={styles.title}>Encuéntranos en <span>Duitama</span></h2>
        </div>

        <div className={styles.grid}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.mapCol}
          >
            <div className={styles.mapWrap}>
              <iframe
                title="Drs. Bustos - Duitama"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.8!2d-73.389!3d5.826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6a45daffffff%3A0x0!2sCalle%2017%20%239a-04%2C%20Duitama%2C%20Boyac%C3%A1!5e0!3m2!1ses!2sco!4v1700000000000"
                width="100%" height="100%" style={{ border: 0 }}
                allowFullScreen="" loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className={styles.infoCol}
          >
            <div className={styles.infoCard}>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}><MapPin size={20} /></div>
                <div>
                  <strong>Dirección</strong>
                  <p>Calle 17 #9a - 04, Duitama, Boyacá</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}><Clock size={20} /></div>
                <div>
                  <strong>Horario</strong>
                  <p>Lun–Vie: 8:00–18:00 | Sáb: 8:00–13:00</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}><Phone size={20} /></div>
                <div>
                  <strong>WhatsApp</strong>
                  <p>+57 302 744 7175</p>
                </div>
              </div>
            </div>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={styles.waCta}>Escribir por WhatsApp</a>
            <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className={styles.mapCta}>Abrir en Google Maps</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;

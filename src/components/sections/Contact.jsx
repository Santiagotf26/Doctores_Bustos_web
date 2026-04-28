import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Send } from 'lucide-react';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '', email: '', telefono: '', mensaje: '', website: ''
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.website) return; // honeypot

    if (!formData.nombre || !formData.telefono) {
      setStatus('error');
      return;
    }

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setFormData({ nombre: '', email: '', telefono: '', mensaje: '', website: '' });
    }, 1500);
  };

  const contactInfo = [
    { icon: <MapPin size={22} />, label: 'Dirección', value: 'Calle 15 # 12-45, Centro Comercial Plaza, Duitama' },
    { icon: <Phone size={22} />, label: 'Teléfono', value: '+57 320 123 4567' },
    { icon: <Clock size={22} />, label: 'Horario', value: 'Lun – Vie: 8am – 6pm | Sáb: 8am – 1pm' },
  ];

  return (
    <section id="contacto" className={styles.contact}>
      <div className="container">
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <span className={styles.badge}>CONTÁCTANOS</span>
          <h2 className={styles.sectionTitle}>Estamos Ubicados en Duitama</h2>
          <p className={styles.sectionDesc}>
            Visítanos o llámanos para agendar tu cita hoy mismo.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.infoCol}
          >
            <div className={styles.infoCards}>
              {contactInfo.map((item, i) => (
                <div key={i} className={`${styles.infoCard} glass-card`}>
                  <div className={styles.infoIcon}>{item.icon}</div>
                  <div>
                    <p className={styles.infoLabel}>{item.label}</p>
                    <p className={styles.infoValue}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className={styles.mapWrap}>
              <div className={styles.mapPlaceholder}>
                <MapPin size={40} color="var(--primary)" />
                <p>Mapa Interactivo de Duitama</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className={`${styles.formCard} glass-card`}
          >
            <h3 className={styles.formTitle}>Agenda tu Cita</h3>
            <p className={styles.formSubtitle}>Completa el formulario y te contactaremos pronto.</p>

            <form className={styles.form} onSubmit={handleSubmit}>
              {/* Honeypot */}
              <input type="text" name="website" value={formData.website} onChange={handleChange}
                style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

              <div className={styles.formGroup}>
                <label htmlFor="nombre">Nombre Completo</label>
                <input type="text" id="nombre" name="nombre" placeholder="Tu nombre..."
                  value={formData.nombre} onChange={handleChange} required />
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="correo@ejemplo.com"
                    value={formData.email} onChange={handleChange} />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="telefono">Teléfono</label>
                  <input type="tel" id="telefono" name="telefono" placeholder="320..."
                    value={formData.telefono} onChange={handleChange} required />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="mensaje">¿Cómo podemos ayudarte?</label>
                <textarea id="mensaje" name="mensaje" rows="4" placeholder="Escribe tu mensaje aquí..."
                  value={formData.mensaje} onChange={handleChange} />
              </div>

              <button type="submit" className={styles.submitBtn} disabled={status === 'loading'}>
                {status === 'loading' ? 'Enviando...' : (
                  <>Enviar Mensaje <Send size={16} /></>
                )}
              </button>

              {status === 'success' && (
                <p className={styles.successMsg}>¡Mensaje enviado! Te contactaremos pronto.</p>
              )}
              {status === 'error' && (
                <p className={styles.errorMsg}>Por favor completa los campos obligatorios.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

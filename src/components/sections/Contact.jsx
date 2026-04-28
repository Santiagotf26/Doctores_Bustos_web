import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import styles from './Contact.module.css';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
    // Honeypot field for security
    website: '' 
  });
  
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple honeypot check
    if (formData.website) {
      console.log('Bot detected');
      return;
    }

    // Validation (basic)
    if (!formData.nombre || !formData.telefono) {
      setStatus('error');
      return;
    }

    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ nombre: '', email: '', telefono: '', mensaje: '', website: '' });
    }, 1500);
  };

  return (
    <section id="contacto" className="section-padding">
      <div className="container">
        <SectionTitle 
          subtitle="Contáctanos"
          title="Estamos Ubicados en Duitama"
          centered
        />
        
        <div className={styles.grid}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.info}
          >
            <h3 className={styles.infoTitle}>Información de Contacto</h3>
            <p className={styles.infoSubtitle}>Visítanos o llámanos para agendar tu cita hoy mismo.</p>
            
            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}><MapPin size={24} /></div>
                <div>
                  <p className={styles.infoLabel}>Dirección</p>
                  <p className={styles.infoValue}>Calle 15 # 12-45, Centro Comercial Plaza, Duitama</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}><Phone size={24} /></div>
                <div>
                  <p className={styles.infoLabel}>Teléfono</p>
                  <p className={styles.infoValue}>+57 320 123 4567</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}><Clock size={24} /></div>
                <div>
                  <p className={styles.infoLabel}>Horario</p>
                  <p className={styles.infoValue}>Lun - Vie: 8am - 6pm | Sáb: 8am - 1pm</p>
                </div>
              </div>
            </div>
            
            <div className={styles.mapContainer}>
              {/* Replace with actual Google Maps Iframe if needed */}
              <div className={styles.mapPlaceholder}>
                <MapPin size={48} color="var(--primary)" />
                <p>Mapa Interactivo de Duitama</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={styles.formContainer}
          >
            <form className={styles.form} onSubmit={handleSubmit}>
              {/* Honeypot field (hidden) */}
              <input 
                type="text" 
                name="website" 
                value={formData.website} 
                onChange={handleChange} 
                className={styles.hidden} 
                tabIndex="-1" 
                autoComplete="off" 
              />
              
              <div className={styles.formGroup}>
                <label htmlFor="nombre">Nombre Completo</label>
                <input 
                  type="text" 
                  id="nombre" 
                  name="nombre" 
                  placeholder="Tu nombre..."
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="correo@ejemplo.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="telefono">Teléfono</label>
                  <input 
                    type="tel" 
                    id="telefono" 
                    name="telefono" 
                    placeholder="320..."
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="mensaje">¿Cómo podemos ayudarte?</label>
                <textarea 
                  id="mensaje" 
                  name="mensaje" 
                  rows="4" 
                  placeholder="Escribe tu mensaje aquí..."
                  value={formData.mensaje}
                  onChange={handleChange}
                ></textarea>
              </div>
              
              <Button 
                type="submit" 
                variant="primary" 
                className={styles.submitButton}
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Enviando...' : (
                  <>
                    Enviar Mensaje <Send size={18} />
                  </>
                )}
              </Button>
              
              {status === 'success' && (
                <p className={styles.successMessage}>¡Mensaje enviado con éxito! Te contactaremos pronto.</p>
              )}
              {status === 'error' && (
                <p className={styles.errorMessage}>Por favor completa los campos obligatorios.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

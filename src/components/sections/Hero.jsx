import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star, ArrowRight, ChevronDown, Phone } from 'lucide-react';
import styles from './Hero.module.css';
import heroImage from '../../assets/hero_dentist.png';
import doctorThumb from '../../assets/service_odontologia.png';

const WA_LINK = 'https://wa.me/573027447175?text=Hola%2C%20quiero%20agendar%20una%20cita';

const services = ['Dental Checkup', 'Teeth Cleaning', 'Tooth Filling', 'Gum Treatment', 'Retainers'];

const processSteps = ['Smile Assessment', 'Care Planning', 'Treatment Process', 'Dental Maintenance'];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const totalSlides = 5;

  const goNext = useCallback(() => setCurrent(p => (p + 1) % totalSlides), []);
  const goPrev = useCallback(() => setCurrent(p => (p - 1 + totalSlides) % totalSlides), []);

  useEffect(() => {
    const t = setInterval(goNext, 6000);
    return () => clearInterval(t);
  }, [goNext]);

  return (
    <section id="inicio" className={styles.hero}>
      {/* Background Image */}
      <div className={styles.bgImage}>
        <img src={heroImage} alt="Dental care" />
        <div className={styles.overlay} />
      </div>

      {/* Content */}
      <div className={`container ${styles.content}`}>
        <div className={styles.textCol}>
          <h1 className={styles.title}>
            Family-Friendly<br/>Dental Care
          </h1>
          <p className={styles.desc}>
            Permanent natural-looking solutions to replace missing teeth and restore confident healthy smiles.
          </p>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
            Book a Appointment <span className={styles.ctaIcon}><Phone size={14} /></span>
          </a>

          {/* Floating card */}
          <div className={styles.floatingCard}>
            <div className={styles.cardThumb}>
              <img src={doctorThumb} alt="Doctor" />
            </div>
            <div className={styles.cardContent}>
              <p>Restore natural healthy confident dental growth.</p>
              <div className={styles.ratingRow}>
                <div className={styles.stars}>
                  {[...Array(5)].map((_,i) => <Star key={i} size={10} fill="#fbbf24" color="#fbbf24" />)}
                </div>
                <span>4.9 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomInner}`}>
          <div className={styles.bottomLeft}>
            <span className={styles.motto}>Your Teeth Our Science</span>
          </div>

          <div className={styles.sliderControls}>
            <button onClick={goPrev} className={styles.arrowBtn}><ChevronLeft size={16} /></button>
            <span className={styles.slideCount}>
              <strong>Preview</strong> {String(current + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')} <strong>Next</strong>
            </span>
            <button onClick={goNext} className={styles.arrowBtn}><ChevronRight size={16} /></button>
          </div>

          <div className={styles.bottomRight}>
            <span className={styles.scrollHint}>Scroll for More <ChevronDown size={14} /></span>
          </div>
        </div>
      </div>

      {/* Service Pills */}
      <div className={styles.pillsBar}>
        <div className={`container ${styles.pillsInner}`}>
          {services.map((s, i) => (
            <a key={i} href="#servicios" className={styles.pill}>{s}</a>
          ))}
        </div>
      </div>

      {/* Process Steps */}
      <div className={styles.processBar}>
        <div className={`container ${styles.processInner}`}>
          {processSteps.map((step, i) => (
            <div key={i} className={styles.processStep}>
              <span className={styles.stepName}>{step}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import styles from './ServicesTicker.module.css';

const items = ['Odontología General', 'Blanqueamiento Dental', 'Implantes Dentales', 'Ortodoncia Invisible', 'Limpieza Dental', 'Endodoncia'];

const ServicesTicker = () => {
  return (
    <div className={styles.ticker}>
      <div className={styles.track}>
        {[...Array(4)].map((_, i) => (
          <React.Fragment key={i}>
            {items.map((item, j) => (
              <div key={`${i}-${j}`} className={styles.item}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" opacity="0.6">
                  <path d="M12 2C7 2 5 7 5 12c0 3 1.5 5.5 3 7.5a12 12 0 0 0 8 0c1.5-2 3-4.5 3-7.5 0-5-2-10-7-10z"/>
                </svg>
                {item}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ServicesTicker;

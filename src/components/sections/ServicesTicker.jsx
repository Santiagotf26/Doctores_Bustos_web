import React from 'react';
import styles from './ServicesTicker.module.css';

const items = ['Odontología General', 'Blanqueamiento Dental', 'Implantes Dentales', 'Ortodoncia Invisible'];

const ServicesTicker = () => {
  return (
    <div className={styles.ticker}>
      <div className={styles.track}>
        {[...Array(10)].map((_, i) => (
          <React.Fragment key={i}>
            {items.map((item, j) => (
              <div key={`${i}-${j}`} className={styles.item}>
                <span className={styles.dot}>🦷</span>
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

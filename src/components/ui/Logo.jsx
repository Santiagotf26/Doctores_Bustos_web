import React from 'react';
import logoImg from '../../assets/logo_transparent.png';

const Logo = ({ variant = 'dark', className = '' }) => {
  // If variant is dark, we are on a light background, so we need a dark logo.
  // Since the image is white text, we use invert to make it dark.
  const filterStyle = variant === 'dark' ? 'invert(1) brightness(0.2)' : 'none';

  return (
    <div className={`${className}`} style={{ display: 'flex', alignItems: 'center' }}>
      <img 
        src={logoImg} 
        alt="Drs. Bustos" 
        style={{ 
          height: 'clamp(40px, 5vw, 60px)', 
          width: 'auto', 
          filter: filterStyle,
          transition: 'all 0.3s ease'
        }} 
      />
    </div>
  );
};

export default Logo;

import React from 'react';

const Logo = ({ variant = 'dark', className = '' }) => {
  const color = variant === 'light' ? '#ffffff' : '#0f1729';
  const teal = '#0d9488';

  return (
    <div className={`flex items-center gap-2 ${className}`} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C10.5 2 9.5 3.5 9.5 5C9.5 7 11 8.5 11 11C11 13.5 9 15 7 15C5 15 4 13.5 4 12" stroke={teal} strokeWidth="2.5" strokeLinecap="round" />
        <path d="M12 2C13.5 2 14.5 3.5 14.5 5C14.5 7 13 8.5 13 11C13 13.5 15 15 17 15C19 15 20 13.5 20 12" stroke={teal} strokeWidth="2.5" strokeLinecap="round" />
        <path d="M12 22C14.5 22 17 20.5 17 18C17 15.5 14.5 14 12 14C9.5 14 7 15.5 7 18C7 20.5 9.5 22 12 22Z" fill={teal} />
      </svg>
      <span style={{ 
        fontFamily: "'Inter', sans-serif", 
        fontSize: '20px', 
        fontWeight: '800', 
        letterSpacing: '-0.02em',
        color: color
      }}>
        Drs.<span style={{ color: teal }}>Bustos</span>
      </span>
    </div>
  );
};

export default Logo;

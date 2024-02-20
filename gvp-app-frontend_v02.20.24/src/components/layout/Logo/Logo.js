import React from 'react';
import './Logo.css';

const Logo = () => {
  return (
    <div className="logo">
      <img src="./graphics/logo192.png" alt="Logo" className="logo-icon" />
        <div className='brand-container'>
          <span className="brand">Garage</span>
          <span className="subBrand">V. Parrot</span>
        </div>
    </div>
  );
}

export default Logo;

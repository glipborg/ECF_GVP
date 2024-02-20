import React, { useState } from 'react';
import { Home, Menu, Arrow, Atelier, Layer,Close } from '../../common/Icons/Icons';
import './Navigation.css';
import { useTranslation } from 'react-i18next';

const Navigation = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navigation">
      <div className="menu-icon" onClick={toggleMenu}>
        <Menu />
      </div>
      <div className="nav-links">
        <a href="#home">{t('Nav.Home')}</a>
              
        <a href="/#services">{t('Nav.Services')}</a>
              
        <a href="/#atelier">{t('Nav.Atelier')}</a>
              
        <a href="/#cars">{t('Nav.Cars')}</a>
      </div>
      
      {isOpen && (
        <div className='mobile-nav-overlay'>
          <div className="mobile-nav">
            <div className='mobile-nav-header'>
              <div className='mobile-nav-header-row'>
                <span className="mobile-nav-title">Garage V. Parrot</span>
                <button className="close-button" onClick={closeMenu}>
                  <Close />
                </button>
              </div>
            </div>
                <div className="list-divider"></div>
              <div className="mobile-nav-link">
                <a href="/#home" onClick={closeMenu}><Home />{t('Nav.Home')}</a>
                <a href="/#services" onClick={closeMenu}><Arrow /> {t('Nav.Services')}</a>
                
                <a href="/#atelier" onClick={closeMenu}><Atelier /> {t('Nav.Atelier')}</a>
                
                <a href="/#cars" onClick={closeMenu}><Layer /> {t('Nav.Cars')}</a>
              </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;

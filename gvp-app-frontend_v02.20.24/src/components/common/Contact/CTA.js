import React from 'react';
import { useTranslation } from 'react-i18next';
import './CTA.css';

const CTA = () => {
  const { t } = useTranslation();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="cta-container">
      <h1>{t('Button.Contact')}</h1>
      <button onClick={scrollToContact}>{t('Button.Contact')}</button>
    </div>
  );
};

export default CTA;

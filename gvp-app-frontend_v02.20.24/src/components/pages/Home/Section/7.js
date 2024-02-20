import React from 'react';
import { useTranslation } from 'react-i18next';
import ContactForm from '../../../common/Form/Contact';
import './7.css';

const Section7 = () => {
  const { t } = useTranslation();

  return (
      <div className="contact-section">
          <div className="contact-content">
              <div className="contact-info">
                  <h1>{t('Pages.Home.section7.Title')}</h1>
                  <h2>{t('Pages.Home.section7.Subtitle')}</h2>
                  <p>{t('Modal.Address.Name')}</p>
                  <p>{t('Modal.Address.Street')}</p>
                  <p>{`${t('Modal.Address.ZIP')} - ${t('Modal.Address.City')}`}</p>
                  <p>{t('Modal.Address.Phone')}</p>
              </div>
              <div className="contact-form">
                  <ContactForm />
              </div>
          </div>
      </div>
  );
};

export default Section7;

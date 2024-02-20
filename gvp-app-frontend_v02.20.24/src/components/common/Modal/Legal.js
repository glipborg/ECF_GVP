import React from 'react';
import './Modal.css';
import { useTranslation } from 'react-i18next';
import { Close } from '../Icons/Icons';

const LegalModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  return (
    isOpen && (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-body" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
            <Close />
          </button>
          <div className="modal-title">
            {t('Modal.Legal.Title')}
          </div>
          <div className="modal-content">
            <h2>{t('Modal.Legal.Content.Chapter1.Title')}</h2>
            <p>{t('Modal.Legal.Content.Chapter1.Content')}</p>
            <h2>{t('Modal.Legal.Content.Chapter2.Title')}</h2>
            <p>{t('Modal.Legal.Content.Chapter2.Content')}</p>
            <h2>{t('Modal.Legal.Content.Chapter3.Title')}</h2>
            <p>{t('Modal.Legal.Content.Chapter3.Content')}</p>
            <h2>{t('Modal.Legal.Content.Chapter4.Title')}</h2>
            <p>{t('Modal.Legal.Content.Chapter4.Content')}</p>
          </div>
        </div>
      </div>
    )
  );
};

export default LegalModal;

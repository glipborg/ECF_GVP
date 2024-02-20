import React from 'react';
import './Modal.css';
import { useTranslation } from 'react-i18next';
import { Close } from '../Icons/Icons';

const HoursModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  return (
    isOpen && (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-body" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
            <Close />
          </button>
          <div className="modal-title">
            {t('Modal.Hours.Title')}
          </div>
          <div className="modal-content">
            {t('Modal.Hours.Day.1')} : {t('Modal.Hours.Hours.1')}<br/>
            {t('Modal.Hours.Day.2')} : {t('Modal.Hours.Hours.2')}<br/>
            {t('Modal.Hours.Day.3')} : {t('Modal.Hours.Hours.3')}<br/>
            {t('Modal.Hours.Day.4')} : {t('Modal.Hours.Hours.4')}<br/>
            {t('Modal.Hours.Day.5')} : {t('Modal.Hours.Hours.5')}<br/>
            {t('Modal.Hours.Day.6')} : {t('Modal.Hours.Hours.6')}<br/>
            {t('Modal.Hours.Day.7')} : {t('Modal.Hours.Hours.7')}
          </div>
          <div>
            <img src='./graphics/hours.jpg'></img>
          </div>
        </div>
      </div>
    )
  );
};

export default HoursModal;

import React from 'react';
import './Modal.css';
import { useTranslation } from 'react-i18next';
import { Close } from '../Icons/Icons';

const AddressModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  return (
    isOpen && (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-body" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
            <Close />
          </button>
          <div className="modal-title">
            {t('Modal.Address.Title')}
          </div>
          <div className="modal-content">
            {t('Modal.Address.Name')}<br/>
            {t('Modal.Address.Street')}<br/>
            {t('Modal.Address.ZIP')} - {t('Modal.Address.City')}
          </div>
          <div>
            <img src='./graphics/address.jpg'></img>
          </div>
        </div>
      </div>
    )
  );
};

export default AddressModal;

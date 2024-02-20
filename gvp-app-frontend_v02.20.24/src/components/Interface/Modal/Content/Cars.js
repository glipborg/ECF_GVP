import React from 'react';
import '../DashboardModal.css';
import { useTranslation } from 'react-i18next';
import { Close } from '../../../common/Icons/Icons';

const CarsModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  return (
    isOpen && (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-body" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
            <Close />
          </button>
          <div className="modal-title">
            <h1>Cars</h1>
          </div>
          <div className="modal-content">
            <p>Cars</p>
            <p>Cars</p>
            <p>Cars</p>
            <p>Cars</p>
          </div>
        </div>
      </div>
    )
  );
};

export default CarsModal;

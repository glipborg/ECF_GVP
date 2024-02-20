import React from 'react';
import '../DashboardModal.css';
import { useTranslation } from 'react-i18next';
import { Close } from '../../../common/Icons/Icons';

const ReviewModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  return (
    isOpen && (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-body" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
            <Close />
          </button>
          <div className="modal-title">
            <h1>Review</h1>
          </div>
          <div className="modal-content">
            <p>Review</p>
            <p>Review</p>
            <p>Review</p>
            <p>Review</p>
          </div>
        </div>
      </div>
    )
  );
};

export default ReviewModal;

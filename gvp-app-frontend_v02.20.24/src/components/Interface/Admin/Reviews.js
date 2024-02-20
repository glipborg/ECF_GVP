import React, { useState } from 'react';
import ReviewModal from '../Modal/Moderation/Review';
import '../Interface.css'

const ReviewsManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="admin-card">
      <h2>Gestion des avis clients</h2>
      <button className='modal-button' onClick={handleOpenModal}>Avis Clients</button>
      {isModalOpen && <ReviewModal isOpen={isModalOpen} onClose={handleCloseModal} />}
    </div>
  );
};

export default ReviewsManagement;

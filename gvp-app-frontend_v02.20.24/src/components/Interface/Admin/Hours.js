import React, { useState } from 'react';
import HourModal from '../Modal/Content/Hours';
import '../Interface.css'

const HoursManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="admin-card">
      <h2>Heures d'ouverture</h2>
      <button className='modal-button' onClick={handleOpenModal}>Modifier les heures</button>
      {isModalOpen && <HourModal isOpen={isModalOpen} onClose={handleCloseModal} />}
    </div>
  );
};

export default HoursManagement;

import React, { useState } from 'react';
import CarsModal from '../Modal/Content/Cars';
import '../Interface.css'

const CarsContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="card">
      <h2>Gestion de la concession</h2>
      <button className='modal-button' onClick={handleOpenModal}>Gestion des véhicules</button>
      {isModalOpen && <CarsModal isOpen={isModalOpen} onClose={handleCloseModal} />}
    </div>
  );
};

export default CarsContent;

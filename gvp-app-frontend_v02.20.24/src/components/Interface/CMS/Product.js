import React, { useState } from 'react';
import HoursModal from '../Modal/Content/Hours';
import '../Interface.css'

const ProductContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="card">
      <h2>Gestion du contenu des produits et services</h2>
      <button className='modal-button' onClick={handleOpenModal}>Gestion des produits et Services</button>
      {isModalOpen && <HoursModal isOpen={isModalOpen} onClose={handleCloseModal} />}
    </div>
  );
};

export default ProductContent;

import React, { useState } from 'react';
import HomeContentModal from '../Modal/Content/HomeContent';
import '../Interface.css'

const HomeContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="card">
      <h2>Gestion de la page d'accueil</h2>
      <button className='modal-button' onClick={handleOpenModal}>Modifier le contenu</button>
      {isModalOpen && <HomeContentModal isOpen={isModalOpen} onClose={handleCloseModal} />}
    </div>
  );
};

export default HomeContent;

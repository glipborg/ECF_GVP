import React, { useState } from 'react';
import SellerModal from '../Modal/User/Seller';
import '../Interface.css'


const UserManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="admin-card">
      <h2>Gestion des utilisateurs "Employé"</h2>
      <button className='modal-button' onClick={handleOpenModal}>Comptes employés</button>
      {isModalOpen && <SellerModal isOpen={isModalOpen} onClose={handleCloseModal} />}
    </div>
  );
};

export default UserManagement;

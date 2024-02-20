import React, { useState } from 'react';
import MessageModal from '../Modal/Moderation/Message';
import '../Interface.css'

const MessageManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="seller-card">
      <h2>Gestion des messages</h2>
      <button className='modal-button' onClick={handleOpenModal}>Messagerie</button>
      {isModalOpen && <MessageModal isOpen={isModalOpen} onClose={handleCloseModal} />}
    </div>
  );
};

export default MessageManagement;

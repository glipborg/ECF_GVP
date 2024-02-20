import React, { useState } from 'react';
import './SellerDashboard.css';
import ContentManagement from '../../Interface/Seller/Content';
import MessageManagement from '../../Interface/Seller/Message';
import ReviewsManagement from '../../Interface/Seller/Reviews';

const SellerDashboard = () => {
  const [activeTab, setActiveTab] = useState('content');

  return (
    <div className="seller-dashboard">
      <h1>Tableau de bord employé</h1> <br/>
      <h2>Nom de l'employé</h2>
      <div className="dashboard-body">
          <div className="tabs">
            <button 
              className={`tab-button ${activeTab === 'content' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('content')}>
              <h2>Contenu du site</h2>
            </button>
            <button 
              className={`tab-button ${activeTab === 'moderation' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('moderation')}>
              <h2>Modération</h2>
            </button>
          </div>
        <div className="dashboard-subcontent">
          <div className="tab-content">
            {activeTab === 'content' && (
              <div className="seller-grid">
                <ContentManagement />
              </div>
            )}
            {activeTab === 'moderation' && (
              <div className="seller-grid">
                <ReviewsManagement />
                <MessageManagement />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;

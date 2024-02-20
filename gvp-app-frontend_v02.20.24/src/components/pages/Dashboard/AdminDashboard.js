import React, { useState } from 'react';
import './AdminDashboard.css';
import UserManagement from '../../Interface/Admin/User';
import ContentManagement from '../../Interface/Admin/Content';
import MessageManagement from '../../Interface/Admin/Message';
import ReviewsManagement from '../../Interface/Admin/Reviews';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('content');

  return (
    <div className="admin-dashboard">
      <h1>Tableau de bord administrateur</h1>
      <div className="dashboard-body">
          <div className="tabs">
            <button 
              className={`tab-button ${activeTab === 'content' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('content')}>
              <h2>Contenu du site</h2>
            </button>
            <button 
              className={`tab-button ${activeTab === 'users' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('users')}>
              <h2>Utilisateurs</h2>
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
              <div className="admin-grid">
                <ContentManagement />
              </div>
            )}
            {activeTab === 'users' && (
              <div className="admin-grid">
                <UserManagement />
              </div>
            )}
            {activeTab === 'moderation' && (
              <div className="admin-grid">
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

export default AdminDashboard;

import React from 'react';
import HoursManagement from '../../Interface/Admin/Hours';
import CarsContent from '../CMS/Cars';
import HomeContent from '../CMS/Home';
import ProductContent from '../CMS/Product';

const ContentManagement = () => {
  return (
    <div className="seller-grid">
      <HoursManagement />
      <CarsContent />
      <HomeContent />
      <ProductContent />
    </div>
  );
};

export default ContentManagement;

import React from 'react';

const Initial = ({ initials }) => {
  return (
    <div className="initials" style={{ fontWeight: 'bold', fontSize: '24px' }}>
      {initials}
    </div>
  );
};

export default Initial;

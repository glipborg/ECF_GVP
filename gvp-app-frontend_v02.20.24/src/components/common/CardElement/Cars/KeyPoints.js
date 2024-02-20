import React from 'react';

const KeyPoints = ({ points }) => {
  return (
    <ul>
      {points.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  );
};

export default KeyPoints;

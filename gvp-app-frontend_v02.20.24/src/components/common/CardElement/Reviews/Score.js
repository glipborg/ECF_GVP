import React from 'react';

const Score = ({ score }) => {
  return (
    <div className="review-score">
      {[...Array(5)].map((star, index) => {
        return (
          <span key={index} style={{ color: index < score ? 'blue' : 'grey' }}>&#9733;</span>
        );
      })}
    </div>
  );
};

export default Score;

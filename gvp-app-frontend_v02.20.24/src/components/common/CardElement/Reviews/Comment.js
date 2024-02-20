import React from 'react';

const Review = ({ review }) => {
  return <div className="review-text" style={{ fontStyle: 'italic', color: 'black' }}>{review}</div>;
};

export default Review;

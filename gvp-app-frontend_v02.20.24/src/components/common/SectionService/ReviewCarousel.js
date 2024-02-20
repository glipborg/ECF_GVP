import React from 'react';
import Carousel from './Carousel';
import ReviewCard from '../../layout/Cards/ReviewCard';

const ReviewCarousel = () => {
  return (
    <Carousel>
      <ReviewCard {...review1Props} />
      <ReviewCard {...review2Props} />
    </Carousel>
  );
};

export default ReviewCarousel;

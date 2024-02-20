import React from 'react';
import './ReviewCard.css';
import Initial from '../../common/CardElement/Reviews/Initial';
import Name from '../../common/CardElement/Reviews/Name';
import Score from '../../common/CardElement/Reviews/Score';
import Date from '../../common/CardElement/Reviews/Date';
import Review from '../../common/CardElement/Reviews/Comment';

const ReviewCard = ({ review }) => {
  return (
    <div className="review-card">
      <div className="review-header">
        <Initial initials={review.initials} />
        <Name name={review.name} />
      </div>
      <Score score={review.score} />
      <Date date={review.date} />
      <Review review={review.review} />
    </div>
  );
};

export default ReviewCard;

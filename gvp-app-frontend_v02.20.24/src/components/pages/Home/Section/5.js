import React, { useState } from 'react';
import './5.css';
import Carousel from '../../../common/SectionService/Carousel';
import ReviewCard from '../../../layout/Cards/ReviewCard';
import PostReviewModal from '../../../common/Modal/PostReview';

const Section5 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const reviewsData = [
    {
      id: 1,
      initials: "JD",
      name: "John Doe",
      score: 4,
      date: "2023-01-15",
      review: "Très satisfait de la prestation. Service impeccable et personnel très compétent.",
    },
    {
      id: 2,
      initials: "JD",
      name: "John Doe",
      score: 2,
      date: "2023-01-15",
      review: "Très satisfait de la prestation. Service impeccable et personnel très compétent.",
    },
    {
      id: 3,
      initials: "JD",
      name: "John Doe",
      score: 5,
      date: "2023-01-15",
      review: "Très satisfait de la prestation. Service impeccable et personnel très compétent.",
    },
    {
      id: 4,
      initials: "JD",
      name: "John Doe",
      score: 4,
      date: "2023-01-15",
      review: "Très satisfait de la prestation. Service impeccable et personnel très compétent.",
    },
    {
      id: 5,
      initials: "JD",
      name: "John Doe",
      score: 4,
      date: "2023-01-15",
      review: "Très satisfait de la prestation. Service impeccable et personnel très compétent.",
    },
    {
      id: 6,
      initials: "JD",
      name: "John Doe",
      score: 5,
      date: "2023-01-15",
      review: "Très satisfait de la prestation. Service impeccable et personnel très compétent.",
    },
  ];

  return (
    <div className="section-reviews">
      <h2>Témoignages Clients</h2>
      <p>Voici ce que nos clients pensent de nos services</p>
      <Carousel>
        {reviewsData.map(review => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </Carousel>
      <button className="leave-review-btn" onClick={toggleModal}>Laisser un commentaire</button>
      <PostReviewModal isOpen={isModalOpen} onClose={toggleModal} />
    </div>
  );
};

export default Section5;

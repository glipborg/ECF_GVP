import React, { useState } from 'react';
import './Carousel.css';

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = React.Children.count(children);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : totalItems - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < totalItems - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        {React.Children.map(children, (child, index) => (
          <div
            className="carousel-item"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {child}
          </div>
        ))}
      </div>
      <button className="carousel-control prev" onClick={goToPrevious}>&lt;</button>
      <button className="carousel-control next" onClick={goToNext}>&gt;</button>
    </div>
  );
};

export default Carousel;

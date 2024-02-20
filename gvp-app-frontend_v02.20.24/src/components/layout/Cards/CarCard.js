import React from 'react';
import './CarCard.css';

const CarCard = ({ vehicle }) => {
  return (
    <div className="car-card">
      <div className="car-image-row">
        <img src={vehicle.imageUrl} alt={vehicle.title} className="car-image"/>
      </div>
      <div className="car-info-row">
        <h3 className="car-title">{vehicle.title}</h3>
        <p className="car-description">{vehicle.description}</p>
        <ul className="car-keypoints">
          {vehicle.keyPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
      <div className="car-buttons-row">
        <button className="discover-btn">Découvrir</button>
        <button className="reserve-btn">Réserver</button>
      </div>
    </div>
  );
};

export default CarCard;

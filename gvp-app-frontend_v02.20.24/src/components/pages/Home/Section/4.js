import React, { useState, useEffect } from 'react';
import './4.css';
import CarCard from '../../../layout/Cards/CarCard';
import CarSorting from '../../../common/Sorting/CarSorting';

const Section4 = () => {
  const [vehiclesData, setVehiclesData] = useState([
    { 
      id: 1, 
      title: "Renault Zoe", 
      type: "Neuf", 
      fuel: "Electrique", 
      category: "Berline", 
      imageUrl: "./graphics/cars/new/renault-zoe/1.jpg",
      description: "Une berline compacte 100% électrique.",
      keyPoints: ["Autonomie 395km", "0 émission CO2", "Charge rapide"],
      discoverLink: "#",
    },
    { 
      id: 2, 
      title: "Peugeot 308", 
      type: "Occasion", 
      fuel: "Diesel", 
      category: "Familiale", 
      imageUrl: "./graphics/cars/new/renault-zoe/2.jpg",
      description: "Confort et espace pour toute la famille.",
      keyPoints: ["5 places", "Coffre spacieux", "Faible consommation"],
      discoverLink: "#",
    },
    { 
      id: 3, 
      title: "Renault Zoe", 
      type: "Neuf", 
      fuel: "Electrique", 
      category: "Berline", 
      imageUrl: "./graphics/cars/new/renault-zoe/1.jpg",
      description: "Une berline compacte 100% électrique.",
      keyPoints: ["Autonomie 395km", "0 émission CO2", "Charge rapide"],
      discoverLink: "#",
    },
    { 
      id: 4, 
      title: "Peugeot 308", 
      type: "Occasion", 
      fuel: "Diesel", 
      category: "Familiale", 
      imageUrl: "./graphics/cars/new/renault-zoe/2.jpg",
      description: "Confort et espace pour toute la famille.",
      keyPoints: ["5 places", "Coffre spacieux", "Faible consommation"],
      discoverLink: "#",
    },
    { 
      id: 5, 
      title: "Renault Zoe", 
      type: "Neuf", 
      fuel: "Electrique", 
      category: "Berline", 
      imageUrl: "./graphics/cars/new/renault-zoe/1.jpg",
      description: "Une berline compacte 100% électrique.",
      keyPoints: ["Autonomie 395km", "0 émission CO2", "Charge rapide"],
      discoverLink: "#",
    },
    { 
      id: 6, 
      title: "Peugeot 308", 
      type: "Occasion", 
      fuel: "Diesel", 
      category: "Familiale", 
      imageUrl: "./graphics/cars/new/renault-zoe/2.jpg",
      description: "Confort et espace pour toute la famille.",
      keyPoints: ["5 places", "Coffre spacieux", "Faible consommation"],
      discoverLink: "#",
    },
  ]);

  const [filters, setFilters] = useState({
    neuf: false,
    occasion: false,
    essence: false,
    diesel: false,
    berline: false,
    sport: false,
    familiale: false,
    routiere: false,
    electrique: false,
    sansPermis: false,
  });

  
  const handleFiltersChange = (newFilters) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      ...newFilters,
    }));
  };

 
  const filteredVehicles = vehiclesData.filter(vehicle => {
    return Object.keys(filters).every(filter => {
      if (!filters[filter]) return true;
      if (filter === 'neuf' || filter === 'occasion') {
        return filters[filter] ? vehicle.type.toLowerCase() === filter : true;
      }
      if (filter === 'essence' || filter === 'diesel' || filter === 'electrique') {
        return filters[filter] ? vehicle.fuel.toLowerCase() === filter : true;
      }
      if (['berline', 'sport', 'familiale', 'routiere', 'sansPermis'].includes(filter)) {
        return filters[filter] ? vehicle.category.toLowerCase() === filter : true;
      }
      return true;
    });
  });


  return (
    <div className="section-vehicles">
      <h2>Nos Véhicules</h2>
      <p>Vous recherchez un véhicule neuf ou d'occasion certifiée par V. Parrot, nous avons ce qu'il vous faut</p>
      
      
      <CarSorting filters={filters} onFiltersChange={handleFiltersChange} />

      <div className="vehicle-cards">
        {filteredVehicles.length > 0 ? (
          filteredVehicles.map(vehicle => (
            <CarCard key={vehicle.id} vehicle={vehicle} />
          ))
        ) : (
          <p>Aucun véhicule ne correspond à vos critères de recherche.</p>
        )}
      </div>

      <button className="discover-more">Découvrir nos Véhicules</button>
    </div>
  );
};

export default Section4;

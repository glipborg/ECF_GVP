import React, { useState } from 'react';

const CarSorting = ({ onFiltersChange }) => {
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

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    const newFilters = {
      ...filters,
      [name]: checked,
    };
    setFilters(newFilters);

    if (typeof onFiltersChange === 'function') {
      onFiltersChange(newFilters);
    }
  };

  return (
    <div className="car-sorting">
      <h4>Filtrer par :</h4>
      <div>
        <label>
          <input type="checkbox" name="neuf" checked={filters.neuf} onChange={handleCheckboxChange} />
          Neuf
        </label>
        <label>
          <input type="checkbox" name="occasion" checked={filters.occasion} onChange={handleCheckboxChange} />
          Occasion
        </label>
        <label>
          <input type="checkbox" name="essence" checked={filters.essence} onChange={handleCheckboxChange} />
          Essence
        </label>
        <label>
          <input type="checkbox" name="diesel" checked={filters.diesel} onChange={handleCheckboxChange} />
          Diesel
        </label>
        <label>
          <input type="checkbox" name="electrique" checked={filters.electrique} onChange={handleCheckboxChange} />
          Électrique
        </label>
        <label>
          <input type="checkbox" name="berline" checked={filters.berline} onChange={handleCheckboxChange} />
          Berline
        </label>
        <label>
          <input type="checkbox" name="sport" checked={filters.sport} onChange={handleCheckboxChange} />
          Sport
        </label>
        <label>
          <input type="checkbox" name="familiale" checked={filters.familiale} onChange={handleCheckboxChange} />
          Familiale
        </label>
        <label>
          <input type="checkbox" name="routiere" checked={filters.routiere} onChange={handleCheckboxChange} />
          Routière
        </label>
        <label>
          <input type="checkbox" name="sansPermis" checked={filters.sansPermis} onChange={handleCheckboxChange} />
          Sans Permis
        </label>
      </div>
    </div>
  );
};

export default CarSorting;

import React from 'react';
import './3.css';
import CTA from '../../../common/Contact/CTA'

const Section3 = () => {
  const columns = [
    {
      title: "Entretien",
      subtitle: "La garentie qualité V. Parrot",
      imageUrl: "./graphics/entretien.jpg",
      link: "./"
    },
    {
      title: "Révision, Vidange",
      subtitle: "Votre entretien garantie coonstructeur préservée",
      imageUrl: "./graphics/revision.jpg",
      link: "./"
    },
    {
      title: "Pneu, Sécurité",
      subtitle: "Prenez la route en toute sérénité",
      imageUrl: "./graphics/security.jpg",
      link: "./"
    },
    {
      title: "Climatisation",
      subtitle: "Entretien de votre circuit de climatisation",
      imageUrl: "./graphics/reparation.jpg",
      link: "./"
    }
  ];

  return (
    <div className="section-atelier">
      <div className='title-container'>
        <h2>Titre de l'Atelier</h2>
        <h3>Sous-titre de l'Atelier</h3>
      </div>
      <div className="columns-container">
        {columns.map((column, index) => (
          <a href={column.link} className="column" key={index} style={{ backgroundImage: `url(${column.imageUrl})` }}>
            <div className="overlay">
              <h4>{column.title}</h4>
              <p>{column.subtitle}</p>
            </div>
          </a>
        ))}
      </div>
      <CTA />
    </div>
  );
};

export default Section3;

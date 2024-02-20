import React from 'react';
import './2.css';
import { useTranslation } from 'react-i18next';
import CTA from '../../../common/Contact/CTA'

const Section2 = () => {
    const { t } = useTranslation();
    const handleClick = () => {
    console.log("Image clicked!");
    };


  return (
    <div className="section2">
      <h1>{t('Pages.Home.section2.Title')}</h1>
      <p>{t('Pages.Home.section2.SubTitle')}</p>
      <div className="grid">
        <div className="grid-item large" onClick={handleClick}>
          <img src="./graphics/atelier.jpg" alt="Large Item" />
          <div className="overlay">
            <h2>{t('Pages.Home.section2.ZoomIn.Atelier.Title')}</h2>
            <p>{t('Pages.Home.section2.ZoomIn.Atelier.Subtitle')}</p>
          </div>
        </div>
            <div className="grid-item" onClick={handleClick}>
            <img src="./graphics/new.jpg" alt="Item 1" />
            <div className="overlay">
                <h2>{t('Pages.Home.section2.ZoomIn.CarsRelated.New.Title')}</h2>
                <p>{t('Pages.Home.section2.ZoomIn.CarsRelated.New.Subtitle')}</p>
            </div>
            </div>
            <div className="grid-item" onClick={handleClick}>
            <img src="./graphics/used.jpg" alt="Item 2" />
            <div className="overlay">
                <h2>{t('Pages.Home.section2.ZoomIn.CarsRelated.Used.Title')}</h2>
                <p>{t('Pages.Home.section2.ZoomIn.CarsRelated.Used.Subtitle')}</p>
            </div>
            </div>
            <div className="grid-item" onClick={handleClick}>
            <img src="./graphics/tire.jpg" alt="Item 2" />
            <div className="overlay">
                <h2>{t('Pages.Home.section2.ZoomIn.CarsRelated.Accessories.Title')}</h2>
                <p>{t('Pages.Home.section2.ZoomIn.CarsRelated.Accessories.Subtitle')}</p>
            </div>
        </div>
      </div>
      <CTA />
    </div>
  );
};

export default Section2;

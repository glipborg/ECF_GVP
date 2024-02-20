import React from 'react';
import './1.css';
import { useTranslation } from 'react-i18next';


const Section1 = ({ onContinue }) => {
    const { t } = useTranslation();

  return (
    <div className="section1-container">
      <video autoPlay muted loop id="hero-video">
        <source src="./graphics/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay"></div>
      <div className="content-block">
        <img className='hero-logo' src="./graphics/gvp_logo_white_full.png">
        </img>
        <h1 className='title'>{t('Pages.Home.section1.Title')}</h1>
        <p className='subtitle'>{t('Pages.Home.section1.SubTitle')}</p>
            <div>
                <button className="cta-button">{t('Button.DiscoverCar')}</button>
            </div>
            <div>
                <button className="scroll-button" onClick={onContinue}>{t('Button.Continue')}</button>
            </div>
        </div>
    </div>
  );
};

export default Section1;

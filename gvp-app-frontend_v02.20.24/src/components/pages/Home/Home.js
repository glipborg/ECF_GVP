import React from 'react';
import './Home.css';
import Section1 from './Section/1';
import Section2 from './Section/2';
import Section3 from './Section/3';
import Section4 from './Section/4';
import Section5 from './Section/5';
import Section7 from './Section/7';

const Home = (props) => {
  const scrollToNextSection = () => {
    document.getElementById('services').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="home">
      <div className='section-1' id='home'>
        <Section1 onContinue={scrollToNextSection} />
      </div>
      <div className='section-2' id='services'>
        <Section2 />
      </div>
      <div className='section-atelier' id='atelier'>
        <Section3 />
      </div>
      <div className='section-concession' id='cars'>
        <Section4 />
      </div>
      <div className='section-testimonials' id='testimonials'>
        <Section5 />
      </div>
      <div className='section-contact' id='contact'>
        <Section7 />
      </div>
    </div>
  );
};

export default Home;

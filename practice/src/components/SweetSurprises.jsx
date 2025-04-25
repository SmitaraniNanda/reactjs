import React from 'react';
import cake1 from '../assets/cake1.jpg';
import anniversaryCake from '../assets/anniversary_cake.jpg';
import designerCake from '../assets/designer_cake.jpg';
import chocolateCake from '../assets/chocolate_cake.jpg';
import redVelvetCake from '../assets/red_velvet_cake.jpg';

const SweetSurprises = () => {
  return (
    <div className="section">
      <h2 className="section-title">Sweet Surprises</h2>
      <p className="section-subtitle">Relish Scrumptious Cakes</p>
      <div className="banner-row">
        <div className="banner-item">
          <img src={cake1} alt="Starting at ₹449" className="banner-img" />
          <div className="banner-label">Starting at ₹449</div>
        </div>
        <div className="banner-item">
          <img src={anniversaryCake} alt="Anniversary Cakes" className="banner-img" />
          <div className="banner-label">Anniversary Cakes</div>
        </div>
        <div className="banner-item">
          <img src={designerCake} alt="Designer Cakes" className="banner-img" />
          <div className="banner-label">Designer Cakes</div>
        </div>
        <div className="banner-item">
          <img src={chocolateCake} alt="Chocolate Cakes" className="banner-img" />
          <div className="banner-label">Chocolate Cakes</div>
        </div>
        <div className="banner-item">
          <img src={redVelvetCake} alt="Red Velvet Cakes" className="banner-img" />
          <div className="banner-label">Red Velvet Cakes</div>
        </div>
      </div>
    </div>
  );
};

export default SweetSurprises;

import React from 'react';
import hamper from '../assets/hamper.jpg';
import photoGift from '../assets/photo_gift.jpg';
import nameGift from '../assets/name_gift.jpg';
import fashion from '../assets/fashion.jpg';
import homeLiving from '../assets/home_living.jpg';

const PersonalizedGifts = () => {
  return (
    <div className="section">
      <h2 className="section-title">Personalized to Perfection</h2>
      <p className="section-subtitle">Unique Treasures that Echo Emotions</p>
      <div className="banner-row">
        <div className="banner-item">
          <img src={hamper} alt="Hampers" className="banner-img" />
          <div className="banner-label">Hampers</div>
        </div>
        <div className="banner-item">
          <img src={photoGift} alt="Photo Gifts" className="banner-img" />
          <div className="banner-label">Photo Gifts</div>
        </div>
        <div className="banner-item">
          <img src={nameGift} alt="Name Gifts" className="banner-img" />
          <div className="banner-label">Name Gifts</div>
        </div>
        <div className="banner-item">
          <img src={fashion} alt="Fashion" className="banner-img" />
          <div className="banner-label">Fashion</div>
        </div>
        <div className="banner-item">
          <img src={homeLiving} alt="Home & Living" className="banner-img" />
          <div className="banner-label">Home & Living</div>
        </div>
      </div>
    </div>
  );
};

export default PersonalizedGifts;

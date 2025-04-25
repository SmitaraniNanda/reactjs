import React from 'react';
import under999 from '../assets/under_999.jpg';
import under1499 from '../assets/under_1499.jpg';
import under2499 from '../assets/under_2499.jpg';
import premiumGift from '../assets/premium_gift.jpg';

const BudgetFriendlyGifts = () => {
  return (
    <div className="budget-gift-section">
      <h2 className="budget-gift-title">Budget Friendly Gifts</h2>
      <p className="budget-banner-subtitle">Affordable options for every occasion</p>
      <div className="budget-banner-strip">
        <img src={under999} alt="Under 999" className="banner-img" />
        <img src={under1499} alt="Under 1499" className="banner-img" />
        <img src={under2499} alt="Under 2499" className="banner-img" />
        <img src={premiumGift} alt="Premium Gifts" className="banner-img" />
      </div>
    </div>
  );
};

export default BudgetFriendlyGifts;

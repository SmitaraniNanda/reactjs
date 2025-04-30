import React from "react";

import bouquet1 from "../assets/bouquet1.jpg";
import bouquet2 from "../assets/bouquet2.jpg";
import bouquet3 from "../assets/bouquet3.jpg";
import bouquet4 from "../assets/bouquet4.jpg";

const trendingData = [
  { image: bouquet1, label: "HANDTIED BOUQUETS" },
  { image: bouquet2, label: "FLOWERS IN A BOX" },
  { image: bouquet3, label: "FLOWERS IN A BASKET" },
  { image: bouquet4, label: "FLOWERS IN A VASE" },
];

const TrendingCollections = () => {
  return (
    <div className="trending-section">
      <div className="section-title">Trending Collections</div>
      <div className="sub-title">Classic modern bouquets</div>
      <div className="trending-grid">
        {trendingData.map((item, index) => (
          <div className="trending-card" key={index}>
            <img src={item.image} alt={item.label} />
            <div className="trending-label">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingCollections;

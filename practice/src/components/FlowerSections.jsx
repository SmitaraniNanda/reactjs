import React from "react";
import "../App.css";

// Importing hue images
import yellow from "../assets/yellow.jpg";
import red from "../assets/red.jpg";
import pink from "../assets/pink.jpg";
import blue from "../assets/blue.jpg";
import white from "../assets/white.jpg";
import warm from "../assets/warm.jpg";
import cool from "../assets/cool.jpg";
import pastel from "../assets/pastel.jpg";

// Importing flower type images
import roses from "../assets/roses.jpg";
import lilies from "../assets/lilies.jpg";
import carnations from "../assets/carnations.jpg";
import orchids from "../assets/orchids.jpg";
import gerberas from "../assets/gerberas.jpg";
import mixed from "../assets/mixed.jpg";

const hueData = [
  { name: "Yellow", image: yellow },
  { name: "Red", image: red },
  { name: "Pink", image: pink },
  { name: "Blue", image: blue },
  { name: "White", image: white },
  { name: "Warm", image: warm },
  { name: "Cool", image: cool },
  { name: "Pastel", image: pastel },
];

const flowerTypes = [
  { name: "Roses", image: roses },
  { name: "Lilies", image: lilies },
  { name: "Carnations", image: carnations },
  { name: "Orchids", image: orchids },
  { name: "Gerberas", image: gerberas },
  { name: "Mixed", image: mixed },
];

const FlowerSections = () => {
  return (
    <div>
      {/* Shop by Hue */}
      <div>
        <div className="section-title">Shop by Hue</div>
        <div className="sub-title">Colour, colour what colour do they like?</div>
        <div className="flower-grid">
          {hueData.map((item) => (
            <div className="flower-item" key={item.name}>
              <img src={item.image} alt={item.name} />
              <div>{item.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Shop by Flower Type */}
      <div>
        <div className="section-title">Shop by Flower Type</div>
        <div className="flower-grid">
          {flowerTypes.map((item) => (
            <div className="flower-item" key={item.name}>
              <img
                src={item.image}
                alt={item.name}
                className="flower-type-img"
              />
              <div>{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlowerSections;

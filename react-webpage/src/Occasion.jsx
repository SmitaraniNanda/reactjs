import React, { useState } from "react";
import { Tabs, Tab, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './App.css'; 

// Logos
import birthdayLogo from "./assets/cake.png";
import anniversaryLogo from "./assets/2.png";
import congratsLogo from "./assets/3.png";
import loveLogo from "./assets/lovely.png";
import thankyouLogo from "./assets/4.png";

// Product Images
import birthday1 from "./assets/angelic-rose.jpg";
import birthday2 from "./assets/butterscotch-crunch.jpg";
import birthday3 from "./assets/birthday-special.jpg";
import birthday4 from "./assets/birthday-mugs_2.jpg";

import anniversary1 from "./assets/blooming-together.jpg";
import anniversary2 from "./assets/personalised-hanging.jpg";
import anniversary3 from "./assets/mugful-of-love.jpg";
import anniversary4 from "./assets/anniversary-roses.jpg";

import congrats1 from "./assets/rose-celebration.jpg";
import congrats2 from "./assets/best-wishes-personalised.jpg";
import congrats3 from "./assets/congrat-wishes.jpg";
import congrats4 from "./assets/whimsical-chocolate.jpg";

import love1 from "./assets/love-wrapped.jpg";
import love2 from "./assets/personalised-valentine.jpg";
import love3 from "./assets/love-grown.jpg";
import love4 from "./assets/pinata.jpg";

import thankyou1 from "./assets/roses.jpg";
import thankyou2 from "./assets/jade-plant.jpg";
import thankyou3 from "./assets/golden-glow.jpg";
import thankyou4 from "./assets/thank-you.jpg";

const TabTitleWithLogo = ({ logoSrc, title }) => (
  <div className="tab-title-wrapper">
    <img src={logoSrc} alt={title} className="tab-logo" />
    <div className="tab-label">{title}</div>
  </div>
);

const productData = {
  birthday: [
    { img: birthday1, title: "Angelic Rose Bouquet", price: "₹799", oldPrice: "₹849" },
    { img: birthday2, title: "Butterscotch Crunch Cake", price: "₹649" },
    { img: birthday3, title: "Syngonium Plant", price: "₹499", oldPrice: "₹549" },
    { img: birthday4, title: "Birthday Mug", price: "₹299", oldPrice: "₹329" },
  ],
  anniversary: [
    { img: anniversary1, title: "Blooming Roses", price: "₹899" },
    { img: anniversary2, title: "Hanging Frame", price: "₹749" },
    { img: anniversary3, title: "Mugful of Love", price: "₹499", oldPrice: "₹599" },
    { img: anniversary4, title: "Special Roses", price: "₹799", oldPrice: "₹899" },
  ],
  congratulations: [
    { img: congrats1, title: "Rose Box", price: "₹699" },
    { img: congrats2, title: "Wishes Frame", price: "₹849" },
    { img: congrats3, title: "Wishes Cake", price: "₹649" },
    { img: congrats4, title: "Chocolate Box", price: "₹599" },
  ],
  love: [
    { img: love1, title: "Wrapped Roses", price: "₹899" },
    { img: love2, title: "Valentine Cushion", price: "₹499" },
    { img: love3, title: "Plant Combo", price: "₹749" },
    { img: love4, title: "Surprise Cake", price: "₹799" },
  ],
  thankyou: [
    { img: thankyou1, title: "Rose Basket", price: "₹699" },
    { img: thankyou2, title: "Jade Plant", price: "₹499" },
    { img: thankyou3, title: "Glow Candle Set", price: "₹599" },
    { img: thankyou4, title: "Mug Combo", price: "₹449" },
  ],
};

const Occasion = () => {
  const [activeTab, setActiveTab] = useState("birthday");
  const navigate = useNavigate();

  return (
    <div className="occasion-fullwidth">
      <h2 className="section-title">Tailored For Your Occasions</h2>

      <Tabs
        defaultActiveKey="birthday"
        id="occasion-tabs"
        className="tabs-bg mb-4"
        fill
        onSelect={(key) => setActiveTab(key)}>
        <Tab eventKey="birthday" title={<TabTitleWithLogo logoSrc={birthdayLogo} title="Birthday" />} />
        <Tab eventKey="anniversary" title={<TabTitleWithLogo logoSrc={anniversaryLogo} title="Anniversary" />} />
        <Tab eventKey="congratulations" title={<TabTitleWithLogo logoSrc={congratsLogo} title="Congratulations" />} />
        <Tab eventKey="love" title={<TabTitleWithLogo logoSrc={loveLogo} title="Love N Romance" />} />
        <Tab eventKey="thankyou" title={<TabTitleWithLogo logoSrc={thankyouLogo} title="Thank You" />} />
      </Tabs>

      <div className="cards-tab">
        {productData[activeTab].map((product, index) => (
          <Card
            key={index}
            className="cards"
            onClick={() =>
              navigate(`/product/${product.title.toLowerCase().replaceAll(" ", "-")}`)
            }
          >
            <Card.Img variant="top" src={product.img} />
            <Card.Body>
              <Card.Text className="product-title">{product.title}</Card.Text>
              <Card.Text>
                {product.price}{" "}
                {product.oldPrice && (
                  <span className="strike">
                    <s>{product.oldPrice}</s>
                  </span>
                )}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Occasion;

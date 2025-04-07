import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./App.css";

// --- Image imports ---
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

// --- Product data ---
const productList = {
  "angelic-rose-bouquet": {
    title: "Angelic Rose Bouquet",
    price: "₹799",
    oldPrice: "₹849",
    images: [birthday1, birthday1, birthday1],
    rating: 5,
    reviews: 229
  },
  "butterscotch-crunch-cake": {
    title: "Butterscotch Crunch Cake",
    price: "₹649",
    images: [birthday2]
  },
  "syngonium-plant": {
    title: "Syngonium Plant",
    price: "₹499",
    oldPrice: "₹549",
    images: [birthday3]
  },
  "birthday-mug": {
    title: "Birthday Mug",
    price: "₹299",
    oldPrice: "₹329",
    images: [birthday4]
  },
  "blooming-roses": {
    title: "Blooming Roses",
    price: "₹899",
    images: [anniversary1]
  },
  "hanging-frame": {
    title: "Hanging Frame",
    price: "₹749",
    images: [anniversary2]
  },
  "mugful-of-love": {
    title: "Mugful of Love",
    price: "₹499",
    oldPrice: "₹599",
    images: [anniversary3]
  },
  "special-roses": {
    title: "Special Roses",
    price: "₹799",
    oldPrice: "₹899",
    images: [anniversary4]
  },
  "rose-box": {
    title: "Rose Box",
    price: "₹699",
    images: [congrats1]
  },
  "wishes-frame": {
    title: "Wishes Frame",
    price: "₹849",
    images: [congrats2]
  },
  "wishes-cake": {
    title: "Wishes Cake",
    price: "₹649",
    images: [congrats3]
  },
  "chocolate-box": {
    title: "Chocolate Box",
    price: "₹599",
    images: [congrats4]
  },
  "wrapped-roses": {
    title: "Wrapped Roses",
    price: "₹899",
    images: [love1]
  },
  "valentine-cushion": {
    title: "Valentine Cushion",
    price: "₹499",
    images: [love2]
  },
  "plant-combo": {
    title: "Plant Combo",
    price: "₹749",
    images: [love3]
  },
  "surprise-cake": {
    title: "Surprise Cake",
    price: "₹799",
    images: [love4]
  },
  "rose-basket": {
    title: "Rose Basket",
    price: "₹699",
    images: [thankyou1]
  },
  "jade-plant": {
    title: "Jade Plant",
    price: "₹499",
    images: [thankyou2]
  },
  "glow-candle-set": {
    title: "Glow Candle Set",
    price: "₹599",
    images: [thankyou3]
  },
  "mug-combo": {
    title: "Mug Combo",
    price: "₹449",
    images: [thankyou4]
  }
};

const ProductDetails = () => {
  const { title } = useParams();
  const product = productList[title];
  const [mainImage, setMainImage] = useState(product?.images[0]);

  if (!product) return <p>Product not found</p>;

  return (
    <div className="product-details">
  <div className="image-section">
    <img src={mainImage} alt="Main" className="main-image" />
    <div className="thumbnail-row">
      {product.images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`thumb-${idx}`}
          className={`thumbnail ${mainImage === img ? "active-thumb" : ""}`}
          onClick={() => setMainImage(img)}
        />
      ))}
    </div>
  </div>

  <div className="details-section">
    <h2>{product.title}</h2>

    <p className="product-price">Price: {product.price}</p>
    {product.oldPrice && (
      <p className="product-oldprice">
        Old Price: <s>{product.oldPrice}</s>
      </p>
    )}
    {product.rating && (
      <p className="product-rating">
        Rating: {product.rating} ★ ({product.reviews} reviews)
      </p>
    )}

    <div className="form-group">
      <label>Enter Receiver Location:</label>
      <input type="text" placeholder="e.g. Hyderabad" />
    </div>

    <div className="form-group">
      <label>Choose Delivery Date:</label>
      <input type="date" />
    </div>

    <div className="action-buttons">
      <button className="btn-cart">Add To Cart</button>
      <button className="btn-buy">Buy Now</button>
    </div>
  </div>
</div>

  );
};

export default ProductDetails;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

import NavbarComponent from "./NavbarComponent";
import Banner from "./Banner";
import Categories from "./Categories";
import Occasion from "./Occasion";
import ProductDetails from "./ProductDetails";

const Home = () => {
  return (
    <>
      <NavbarComponent />
      <Banner />
      <div style={{ marginTop: "30px" }}>
        <Categories />
      </div>
      <Occasion />
    </>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:title" element={<ProductDetails />} />
    </Routes>
  );
};

export default App;

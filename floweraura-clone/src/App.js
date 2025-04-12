// src/App.js
import React from 'react';
import TopNavbar from './components/Navbar';
import HeaderTop from './components/HeaderTop';
import HeroBanner from './components/HeroBanner';
import CategoryCards from './components/CategoryCards';
import ProductGrid from './components/ProductGrid';
import OccasionsSection from './components/OccasionsSection';
import './App.css';


const App = () => {
  return (
    <>
      <HeaderTop/>
      <TopNavbar />
      <HeroBanner />
      <CategoryCards />
      <OccasionsSection />
      <ProductGrid />
    </>
  );
};

export default App;

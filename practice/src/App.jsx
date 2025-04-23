import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNavbar from './components/MainNavbar';
import CategorySection from './components/CategorySection';
import SpecialOccasions from './components/SpecialOccasions';
import OfferSection from './components/OfferSection';
import FavoritePicks from './components/FavoritePicks';
import './App.css';

const App = () => (
  <>
    <MainNavbar />
    <CategorySection />
    <SpecialOccasions />
    <OfferSection/>
    <FavoritePicks />
    
  </>
);

export default App;

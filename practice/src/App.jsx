import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNavbar from './components/MainNavbar';
import CategorySection from './components/CategorySection';
import SpecialOccasions from './components/SpecialOccasions';
import OfferSection from './components/OfferSection';
import FavoritePicks from './components/FavoritePicks';
import GiftsThatSparkJoy from './components/GiftsThatSparkJoy';
import GiftsUnder999 from './components/GiftsUnder999';
import BestSellingCombos from './components/BestSellingCombos';
import './App.css';

const App = () => (
  <>
    <MainNavbar />
    <CategorySection />
    <SpecialOccasions />
    <OfferSection />
    <FavoritePicks/>
    <GiftsThatSparkJoy />
    <GiftsUnder999 />
    <BestSellingCombos />
  </>
);

export default App;

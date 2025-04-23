import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import CategoryCard from './categoryCard';
import sameDayImg from '../assets/same_day.jpg'; 
import flowersImg from '../assets/flowers.jpg';
import cakesImg from '../assets/cakes.jpg';
import personalizedImg from '../assets/personalized.jpg';
import plantImg from '../assets/plant.jpg';
import newarrivalImg from '../assets/new_arrival.jpg';
import internationalImg from '../assets/international.jpg';
import bulkImg from '../assets/bulk.jpg';

const categories = [
  { title: 'Same Day Delivery', image: sameDayImg },
  { title: 'Flowers', image: flowersImg },
  { title: 'Cakes', image: cakesImg },
  { title: 'Personalized', image: personalizedImg },
  { title: 'Plants', image: plantImg },
  { title: 'New Arrivals', image: newarrivalImg },
  { title: 'International', image: internationalImg },
  { title: 'Bulk/Crop. Gifts', image: bulkImg }
];

const CategorySection = () => (
  <Container className="category-section my-5">
  <h3 className="mb-4 text-center">Shop by Category</h3>
  <div className="category-grid">
    {categories.map((cat, idx) => (
      <CategoryCard key={idx} title={cat.title} image={cat.image} />
    ))}
  </div>
</Container>

);

export default CategorySection;

import React from 'react';
import { Row, Col, Container, Image } from 'react-bootstrap';
import akshayaImg from '../assets/akshaya.jpg';
import mothersDayImg from '../assets/mothers_day.jpg';
import earthWeekImg from '../assets/earth_week.jpg';
import summerflowersImg from '../assets/summer_flowers.jpg';
import trendinggiftsImg from '../assets/trending_gifts.jpg';

const occasions = [
  { title: 'Akshaya Tritiya', image: akshayaImg },
  { title: 'Mother’s Day', image: mothersDayImg },
  { title: 'Earth Week', image: earthWeekImg },
  { title: 'Summer Flowers', image: summerflowersImg },
  { title: 'Trending Gifts', image: trendinggiftsImg }

];

const SpecialOccasions = () => (
  <Container id="special-occasions" className="text-center">
  <h3 className="mb-4">Special Occasions</h3>
  <div className="occasion-scroll-wrapper">
    {occasions.map((occ, idx) => (
      <div className="occasion-img-wrapper" key={idx}>
        <Image src={occ.image} fluid />
        <h5>{occ.title}</h5>
      </div>
    ))}
  </div>
</Container>

);

export default SpecialOccasions;

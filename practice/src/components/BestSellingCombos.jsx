// components/BestSellingCombos.jsx
import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { FaStar, FaRegStar } from 'react-icons/fa';
import combo1 from '../assets/combo1.jpg';
import combo2 from '../assets/combo2.jpg';
import combo3 from '../assets/combo3.jpg';
import combo4 from '../assets/combo4.jpg';

const combos = [
  { image: combo1, price: '₹699', rating: 4 },
  { image: combo2, price: '₹849', rating: 5 },
  { image: combo3, price: '₹599', rating: 3 },
  { image: combo4, price: '₹999', rating: 4 }
];

const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) stars.push(<FaStar key={i} color="#ffc107" />);
    else stars.push(<FaRegStar key={i} color="#e4e5e9" />);
  }
  return stars;
};

const BestSellingCombos = () => (
  <Container className="my-5">
    <h3 className="mb-4 text-center">Best Selling Combos</h3>
    <Row>
      {combos.map((item, index) => (
        <Col key={index} md={3} sm={6} xs={12} className="mb-4">
          <Card className="combo-card">
            <Card.Img variant="top" src={item.image} className="custom-img" />
            <Card.Body className="text-center">
              <p className="price">{item.price}</p>
              <div className="rating-stars">{renderStars(item.rating)}</div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default BestSellingCombos;

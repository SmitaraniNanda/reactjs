// components/GiftsThatSparkJoy.jsx
import React from 'react';
import { Container, Card } from 'react-bootstrap';
import joy1 from '../assets/joy1.jpg';
import joy2 from '../assets/joy2.jpg';
import joy3 from '../assets/joy3.jpg';
import joy4 from '../assets/joy4.jpg';
import joy5 from '../assets/joy5.jpg';
import joy6 from '../assets/joy6.jpg';

const images = [
  { title: 'Wedding Gifts', image: joy1 },
  { title: 'Food Hampers', image: joy2 },
  { title: 'Plants', image: joy3 },
  { title: 'New Arrivals', image: joy4 },
  { title: 'Fashion & Beauty', image: joy5 },
  { title: 'Gifts on Sale', image: joy6 }
];

const GiftsThatSparkJoy = () => (
  <Container className="my-5">
    <h3 className="mb-4 text-center">Gifts That Spark Joy</h3>
    <div className="d-flex overflow-auto flex-nowrap scroll-row">
      {images.map((item, index) => (
        <Card key={index} className="mx-2 gift-card">
          <Card.Img variant="top" src={item.image} className="custom-img" />
          <Card.Body className="text-center">
            <Card.Title className="gift-title">{item.title}</Card.Title>
          </Card.Body>
        </Card>
      ))}
    </div>
  </Container>
);

export default GiftsThatSparkJoy;

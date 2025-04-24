// components/GiftsUnder999.jsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import gift1 from '../assets/gift1.jpg';
import gift2 from '../assets/gift2.jpg';
import gift3 from '../assets/gift3.jpg';
import gift4 from '../assets/gift4.jpg';
import gift5 from '../assets/gift5.jpg';
import gift6 from '../assets/gift6.jpg';
import gift7 from '../assets/gift7.jpg';
import gift8 from '../assets/gift8.jpg';

const GiftsUnder999 = () => {
  const images = [gift1, gift2, gift3, gift4, gift5, gift6, gift7, gift8];

  return (
    <Container className="my-5">
      <h3 className="mb-4 text-center">Same Day Delhivery</h3>
      <Row>
        {images.map((img, index) => (
          <Col key={index} xs={6} md={3} className="mb-4 d-flex justify-content-center">
            <Card className="shadow-sm gift999-card">
              <Card.Img variant="top" src={img} className="custom-img" />
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default GiftsUnder999;

import React from 'react';
import { Row, Col, Container, Card } from 'react-bootstrap';
import birthdayImg from '../assets/birthday_cakes.jpg';
import floralImg from '../assets/floral_delight.jpg';
import caricatureImg from '../assets/caricatures.jpg';
import giftImg from '../assets/name_gifts.jpg';
import plantImg from '../assets/plants.jpg';
import hamperImg from '../assets/hampers.jpg';

const picks = [
  {  image: birthdayImg },
  {  image: floralImg },
  { image: caricatureImg },
  {  image: giftImg },
  {  image: plantImg },
  {  image: hamperImg }
];

const FavoritePicks = () => (
  <Container className="my-4">
    <h3 className="mb-4 text-center">Your Favourite Picks</h3>
    <Row>
      {picks.map((item, idx) => (
        <Col key={idx} xs={12} sm={6} md={4} className="mb-4 d-flex justify-content-center">
          <Card className="text-center shadow-sm" style={{ width: '100%', border: 'none' }}>
            <div style={{ height: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
              <Card.Img
                variant="top"
                src={item.image}
                style={{
                  maxHeight: '100%',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  borderRadius: '10px'
                }}
              />
            </div>
            <Card.Body className="p-2">
              <Card.Title style={{ fontSize: '1rem', margin: 0 }}>{item.title}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default FavoritePicks;

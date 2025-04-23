import React from 'react';
import { Container, Image } from 'react-bootstrap';
import offerImg from '../assets/delivery_banners.jpg'; // Make sure the image exists

const OfferSection = () => (
  <Container id="offers" className="text-center my-5">
    <h2 className="mb-4">Special Offers Just for You</h2>
    <Image src={offerImg} fluid className="offer-banner" />
  </Container>
);

export default OfferSection;

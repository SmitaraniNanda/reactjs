// src/components/HeroBanner.jsx
import React from 'react';
import { Container, Image } from 'react-bootstrap';

const HeroBanner = () => (
  <div className="bg-light py-4 text-center">
    <Container>
      <Image src="/images/hero.jpg" alt="Banner" fluid />
    </Container>
  </div>
);

export default HeroBanner;

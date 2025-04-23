import React from 'react';
import { Card } from 'react-bootstrap';

const CategoryCard = ({ title, image }) => (
  <Card className="category-card text-center border-0 shadow-sm bg-white rounded-3">
    <Card.Img
      variant="top"
      src={image}
      className="category-img mx-auto mt-3"
      alt={title}
    />
    <Card.Body className="p-2">
      <Card.Title className="category-title small text-muted mb-0">{title}</Card.Title>
    </Card.Body>
  </Card>
);

export default CategoryCard;

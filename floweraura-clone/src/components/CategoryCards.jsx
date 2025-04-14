
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";


import flowers from "../assets/flowers.jpg";
import cakes from "../assets/cakes.jpg";
import combos from "../assets/combos.jpg";
import plants from "../assets/plants.jpg";
import personalised from "../assets/personalised.jpg";
import gifts from "../assets/gifts.jpg";


const categories = [
  { title: "Flowers", img: flowers },
  { title: "Cakes", img: cakes },
  { title: "Combos", img: combos },
  { title: "Plants", img: plants },
  { title: "Personalised", img: personalised },
  { title: "Gifts", img: gifts },
];

const CategoryCards = () => (
  <Container className="my-4">
    <Row className="g-3">
      {categories.map((cat, idx) => (
        <Col key={idx} xs={6} md={4} lg={2}>
          <Card className="category-card  text-center shadow-sm">
            <Card.Img
              variant="top"
              src={cat.img}
              className="category-card-img"
            />
            <Card.Body>
              <Card.Title className="fs-6">{cat.title}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default CategoryCards;

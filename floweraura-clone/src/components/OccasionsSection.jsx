// src/components/OccasionsSection.jsx
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import birthdayGifts from "../assets/birthdayGifts.jpg";
import anniversaryGifts from "../assets/anniversaryGifts.jpg";
import giftsForHim from "../assets/giftsForHim.jpg";
import giftsForHer from "../assets/giftsForHer.jpg";

const occasions = [
  { title: "Birthday", img: birthdayGifts },
  { title: "Anniversary", img: anniversaryGifts },
  { title: "Gifts For Him", img: giftsForHim },
  { title: "Gifts For Her", img: giftsForHer }, // fixed typo: both were "Gifts For Him"
];

const OccasionsSection = () => (
  <Container className="my-5 text-center">
    <h4 className="fw-bold text-center mb-1">Shop By Occasions & Relations</h4>
    <p className="text-muted text-center mb-4">Surprise Your Loved Ones</p>
    <Row className="justify-content-center g-4">
      {occasions.map((item, idx) => (
        <Col key={idx} xs={12} sm={6} md={4} lg={3}>
          <Card className="occasion-card border-0 shadow-none">
            <Card.Img variant="top" src={item.img} className="occasion-img" />
            <Card.Body className="p-2">
              <Card.Title className="fs-5">{item.title}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default OccasionsSection;

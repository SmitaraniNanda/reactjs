import React from "react";
import { Container, Card } from "react-bootstrap";
import "./App.css";
import birthday from "./assets/Birthday.jpg";
import hourdelivery from "./assets/2hourdelivery.jpg";
import luxe from "./assets/luxe.jpg";
import hatke from "./assets/Hatke.jpg";
import navratri from "./assets/Navratri.jpg";
import anniversary from "./assets/Anniversary.jpg";
import flowers from "./assets/Flowers.jpg";
import cakes from "./assets/Cakes.jpg";
import kids from "./assets/Kids.jpg";

const categories = [
  { img: birthday, title: "Birthday" },
  { img: hourdelivery, title: "2-Hour Delivery" },
  { img: luxe, title: "FNP Luxe" },
  { img: hatke, title: "Hatke Gifts" },
  { img: navratri, title: "Navratri" },
  { img: anniversary, title: "Anniversary" },
  { img: flowers, title: "Flowers" },
  { img: cakes, title: "Cakes" },
  { img: kids, title: "Kids Corner" },
];

const Categories = () => {
  return (
    <Container className="categories-section">
      <div className="category-row">
        {categories.map((category, index) => (
          <Card className="category-card" key={index}>
            <div className="category-image-wrapper">
              <Card.Img className="category-image" src={category.img} />
            </div>
            <Card.Body className="category-body">
              <Card.Title className="category-title">{category.title}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Categories;

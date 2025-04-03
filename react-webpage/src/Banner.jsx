import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import banner1 from "./assets/Birthday_Desk.jpg"; 
import banner2 from "./assets/Navaratri_Desk.jpg";
import "./App.css";

const Banner = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <div className="banner-container">
            <img src={banner1} alt="Birthday Banner" className="img-fluid" />
          </div>
        </Col>
        <Col>
          <div className="banner-container">
            <img src={banner2} alt="Navratri Banner" className="img-fluid" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;

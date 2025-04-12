// src/components/HeaderTop.jsx
import React from "react";
import { Container, Row, Col, Form, InputGroup } from "react-bootstrap";
import { BiSearch, BiMap } from "react-icons/bi";
import {
  FiShoppingCart,
  FiUser,
  FiPackage,
  FiMoreHorizontal,
  FiGift,
} from "react-icons/fi";
import logo from "../assets/final-23-desk.svg"; // adjust if needed

const HeaderTop = () => {
  return (
    <div className="header-top py-2 bg-white border-bottom shadow-sm">
      <Container fluid>
        <Row className="align-items-center">
          {/* Logo */}
          <Col md={2} xs={12} className="text-center  mb-2 mb-md-0">
            <img src={logo} alt="Logo" width="170" />
          </Col>

          {/* Location + Search */}
          <Col md={6} xs={12} className="mb-2 mb-md-0">
            <div className="d-flex flex-column flex-md-row gap-2">
              {/* Deliver To Section */}
              <InputGroup style={{ maxWidth: "150px" }}>
                <InputGroup.Text
                  style={{ backgroundColor: "#caf8f9", border: "0" }}
                >
                  <BiMap />
                  <span className="ms-1">Deliver to?</span>
                </InputGroup.Text>
              </InputGroup>

              {/* Search Bar Section */}
              <InputGroup className="flex-grow-1 rounded overflow-hidden shadow-sm">
                <Form.Control
                  type="text"
                  placeholder="Search for flowers, cakes, gifts..."
                  className="border-0 shadow-none"
                  style={{ backgroundColor: '#c4cbcb'}}
                />
                <InputGroup.Text
                  style={{ backgroundColor: "#87CEFA", border: "0" }}
                >
                  <BiSearch />
                </InputGroup.Text>
              </InputGroup>
            </div>
          </Col>

          {/* Icons */}
          <Col
            md={4}
            xs={12}
            className="text-center text-md-end d-flex justify-content-md-end justify-content-center gap-3 flex-wrap"
          >
            <span className="nav-icon d-flex flex-column align-items-center">
              <FiPackage size={30} />
              <small>Track Order</small>
            </span>
            <span className="nav-icon d-flex flex-column align-items-center">
              <FiGift size={30} />
              <small>Gift Finder</small>
            </span>
            <span className="nav-icon d-flex flex-column align-items-center">
              <FiShoppingCart size={30} />
              <small>Cart</small>
            </span>
            <span className="nav-icon d-flex flex-column align-items-center">
              <FiUser size={30} />
              <small>Sign In</small>
            </span>
            <span className="nav-icon d-flex flex-column align-items-center">
              <FiMoreHorizontal size={30} />
              <small>More</small>
            </span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeaderTop;

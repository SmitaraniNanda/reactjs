import React from "react";
import { Navbar, Nav, Container, Form, InputGroup } from "react-bootstrap";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import logo from "./assets/fnp-Gift.svg"; // Ensure the correct path
import "./App.css";

const NavbarComponent = () => {
  return (
    <>
      {/* First Navbar: Logo + Search Bar + Icons */}
      <Navbar expand="lg" className="top-navbar">
        <Container>
          {/* Logo */}
          <Navbar.Brand href="/">
            <img src={logo} alt="FNP Logo" className="logo" />
          </Navbar.Brand>

          {/* Search Bar */}
          <div className="search-container">
            <InputGroup>
              <Form.Control type="text" placeholder="Search for gifts, flowers, cakes..." className="search-input" />
              <InputGroup.Text className="search-icon">
                <FaSearch />
              </InputGroup.Text>
            </InputGroup>
          </div>

          {/* Icons */}
          <div className="nav-icons">
            <FaShoppingCart className="icon" />
            <FaUser className="icon" />
          </div>
        </Container>
      </Navbar>

      {/* Second Navbar: Navigation Links */}
      <Navbar expand="lg" className="bottom-navbar">
        <Container>
          <Nav className="nav-links">
            <Nav.Link href="#">Birthday</Nav.Link>
            <Nav.Link href="#">Occasions</Nav.Link>
            <Nav.Link href="#">Anniversary</Nav.Link>
            <Nav.Link href="#">Cakes</Nav.Link>
            <Nav.Link href="#">Flowers</Nav.Link>
            <Nav.Link href="#">Personalised</Nav.Link>
            <Nav.Link href="#">Plants</Nav.Link>
            <Nav.Link href="#">Chocolates</Nav.Link>
            <Nav.Link href="#">Combos</Nav.Link>
            <Nav.Link href="#">Lifestyle</Nav.Link>
            <Nav.Link href="#">Global</Nav.Link>
            <Nav.Link href="#">On Trend</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;

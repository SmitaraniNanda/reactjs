import React from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import logo from '../assets/logo.jpg'; // Make sure the path is correct

const MainNavbar = () => (
  <Navbar bg="light" expand="lg" className="shadow-sm">
    <Container>
      {/* Display logo as a link in the navbar */}
      <Navbar.Brand href="#home">
        <img
          src={logo}
          alt="Logo"
          style={{ height: '40px', width: 'auto' }} // Adjust size as needed
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="me-auto">
          <Nav.Link href="#same-day">Same Day Delivery</Nav.Link>
          <Nav.Link href="#flowers">Flowers</Nav.Link>
          <Nav.Link href="#cakes">Cakes</Nav.Link>
          <Nav.Link href="#personalized">Personalized</Nav.Link>
          <Nav.Link href="#plants">Plants</Nav.Link>
          <Nav.Link href="#new-arrivals">New Arrivals</Nav.Link>
          <Nav.Link href="#international">International</Nav.Link>
          <Nav.Link href="#bulk">Bulk Gifts</Nav.Link>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search for gifts"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default MainNavbar;

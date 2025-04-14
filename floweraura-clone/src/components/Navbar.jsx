import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const TopNavbar = () => (
  <Navbar bg="light" expand="lg" sticky="top" className="shadow-sm">
    <Container>
      
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-center">
        <Nav className="mx-auto">
          <Nav.Link href="#" className="mx-2">Express Delivery</Nav.Link>
          <Nav.Link href="#" className="mx-2">Flowers</Nav.Link>
          <Nav.Link href="#" className="mx-2">Cakes</Nav.Link>
          <Nav.Link href="#" className="mx-2">Birthday</Nav.Link>
          <Nav.Link href="#" className="mx-2">Anniversary</Nav.Link>
          <Nav.Link href="#" className="mx-2">Gifts</Nav.Link>
          <Nav.Link href="#" className="mx-2">Plants</Nav.Link>
          <Nav.Link href="#" className="mx-2">Combos</Nav.Link>
          <Nav.Link href="#" className="mx-2">International</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default TopNavbar;

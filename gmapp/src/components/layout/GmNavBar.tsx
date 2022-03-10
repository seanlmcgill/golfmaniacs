import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

export const GmNavBar: React.FC = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">GolfManiacs</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Profile</Nav.Link>
            <Nav.Link href="scores">Scores</Nav.Link>
            <Nav.Link href="courses">Courses</Nav.Link>
            <Nav.Link href="friends">Friends</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

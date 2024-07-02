import React from 'react'
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';


const header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand to="/" as={Link}>REDUX</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link to="/" as={Link}>Home</Nav.Link>
          <Nav.Link to="/about" as={Link}>About</Nav.Link>
          <Nav.Link to="/blog" as={Link}>Blog</Nav.Link>
          <Nav.Link to="/contact" as={Link}>contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default header
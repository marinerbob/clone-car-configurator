import React from "react";

import { Navbar, Nav, Container } from "react-bootstrap";

import { Link } from 'react-router-dom';

import "./markupLayout.css";

const markupLayout = ({ children }) => (
  <>
    <Navbar bg="light">
      <Container className="justify-content-start">
        <Navbar.Brand>Car Configurator Clone</Navbar.Brand>
        <Nav className="flex-grow-1 justify-content-evenly" activeKey="/car">
          <Nav.Item className="active"><Link to="/car">Car</Link></Nav.Item>
          <Nav.Item><Link to="/exterior">Exterior</Link></Nav.Item>
          <Nav.Item><Link to="/summary">Summary</Link></Nav.Item>
        </Nav>
      </Container>
    </Navbar>
    <Container fluid className="main-container">
      {children}
    </Container>
  </>
);

export default markupLayout;

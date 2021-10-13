import React from "react";

import { Navbar, Nav, Container } from "react-bootstrap";
import Menu from '../components/menu';

import { Link } from 'react-router-dom';

import "./markupLayout.css";

const markupLayout = ({ children }) => (
  <>
    <Menu />
    <Container fluid className="main-container">
      {children}
    </Container>
  </>
);

export default markupLayout;

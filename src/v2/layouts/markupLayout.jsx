import React from "react";

import { Container } from "react-bootstrap";
import Menu from '../components/menu';
import Footer from '../components/footer';

import "./markupLayout.css";

const markupLayout = ({ children }) => (
  <>
    <Menu />
    <Container fluid>
      {children}
    </Container>
    <Footer />
  </>
);

export default markupLayout;

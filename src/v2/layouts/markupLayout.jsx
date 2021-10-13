import React from "react";

import { Container } from "react-bootstrap";
import Menu from '../components/menu';

import "./markupLayout.css";

const markupLayout = ({ children }) => (
  <>
    <Menu />
    <Container fluid>
      {children}
    </Container>
  </>
);

export default markupLayout;

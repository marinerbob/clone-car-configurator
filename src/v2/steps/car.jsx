import React from "react";

import { Row, Col } from "react-bootstrap";
import Carousel from "../components/carousel";

const carStep = () => (
  <Row>
    <Col md="8">
      <Carousel />
    </Col>
    <Col className="pt-md-3" md="4">
      <h1>Config</h1>
    </Col>
  </Row>
);

export default carStep;

import React from "react";

import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const footer = () => (
    <Container fluid className="footer main-container__footer">
    <Row>
      <Col className="d-flex">
        <Link className="footer__nav-item">
          <Button className="footer__nav-btn">Prev</Button>
        </Link>
      </Col>
      <Col>
        <div className="price footer__price">123$</div>
      </Col>
      <Col className="d-flex col-right">
        <Link className="footer__nav-item footer__nav-item_right">
          <Button className="footer__nav-btn">Next</Button>
        </Link>
      </Col>
    </Row>
  </Container>
);

export default footer;
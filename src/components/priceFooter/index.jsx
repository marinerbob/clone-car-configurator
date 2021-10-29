import React from "react";

import { useSelector } from 'react-redux';

import { getCurrentStepUrl } from '../../reduxSetup/stepsSlice/selectors';
import { getCurrentPrice } from '../../reduxSetup/currentConfigSlice/selectors';

import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { formatPrice } from '../../utils/generalUtils.js';

import './footer.css';

const FooterContainer = () => {
  const { prevStepUrl, nextStepUrl } = useSelector(getCurrentStepUrl);
  const price = useSelector(getCurrentPrice);
  const formattedPrice = price ? formatPrice(price) : '';

  return (<Footer price={formattedPrice} prevStepUrl={prevStepUrl} nextStepUrl={nextStepUrl} />);
};

const Footer = ({ prevStepUrl, nextStepUrl, price }) => (
  <Container fluid className="footer main-container__footer d-none d-sm-block">
    <Row>
      <Col className="d-flex">
        <Button disabled={prevStepUrl === null} className="footer__nav-btn">
          <Link to={prevStepUrl || '/'} className="footer__nav-item">
            Prev
          </Link>
        </Button>
      </Col>
      <Col>
        <div className="price footer__price">{price}</div>
      </Col>
      <Col className="d-flex col-right">
        <Button disabled={nextStepUrl === null} className="footer__nav-btn">
          <Link to={nextStepUrl || '/'} className="footer__nav-item footer__nav-item_right">
            Next
        </Link>
        </Button>
      </Col>
    </Row>
  </Container>
);

export default FooterContainer;
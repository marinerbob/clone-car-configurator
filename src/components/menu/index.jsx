import React from 'react';

import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { Navbar, Nav, Container } from "react-bootstrap";

import { getStepUrls, getCurrentStepUrl } from '../../reduxSetup/stepsSlice/selectors';
import { getCurrentPrice } from '../../reduxSetup/currentConfigSlice/selectors';
import { formatPrice } from '../../utils/generalUtils';

const getStepStr = (str, stepIndex) => `${stepIndex + 1}. ${str[0].toUpperCase()}${str.slice(1,)}`;

const Menu = () => {
  const stepUrls = useSelector(getStepUrls);
  const currentStepUrl = useSelector(getCurrentStepUrl);
  const price = useSelector(getCurrentPrice);

  return (
    <Navbar bg="light" expand="md">
      <Container>
        <Navbar.Brand>Car Configurator Clone</Navbar.Brand>
        <Navbar.Toggle aria-controls="header-navbar-nav" />
        <Navbar.Collapse id="header-navbar-nav">
          <Nav className="flex-grow-1 justify-content-evenly" activeKey={currentStepUrl.url}>
            {stepUrls.map((step, ind) => (
              <Nav.Item key={step.url} className={step.url === currentStepUrl.url ? 'active' : ''}>
                <Link to={step.url}>
                  {getStepStr(step.name, ind)}
                </Link>
              </Nav.Item>
            ))}
              <Nav.Item className="d-xs-block d-sm-none">Current price: {formatPrice(price)}</Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
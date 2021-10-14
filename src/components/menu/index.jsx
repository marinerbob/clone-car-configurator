import React from 'react';

import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { Navbar, Nav, Container } from "react-bootstrap";

import { getStepUrls, getCurrentStepUrl } from '../../reduxSetup/stepsSlice/selectors'; 

const getUpperStr = str => `${str[0].toUpperCase()}${str.slice(1,)}`;

const Menu = () => {
    const stepUrls = useSelector(getStepUrls);
    const currentStepUrl = useSelector(getCurrentStepUrl);

    return (
        <Navbar bg="light">
        <Container className="justify-content-start">
          <Navbar.Brand>Car Configurator Clone</Navbar.Brand>
          <Nav className="flex-grow-1 justify-content-evenly" activeKey={currentStepUrl.url}>
            {stepUrls.map((step, ind) => (
                <Nav.Item key={step.url} className={step.url === currentStepUrl.url ? 'active' : ''}>
                    <Link to={step.url}>
                        {`${ind+1}. ${getUpperStr(step.name)}`}
                    </Link>
                </Nav.Item>
            ))}
          </Nav>
        </Container>
      </Navbar>
    );
};

export default Menu;
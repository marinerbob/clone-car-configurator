import React from "react";

import { Navbar, Container, Row, Col } from "react-bootstrap";

const markupLayout = ({ children }) => (<>
    <Navbar bg="light">
        <Container>
            <Navbar.Brand>Car Configurator Clone</Navbar.Brand>
        </Container>
    </Navbar>
        <Container fluid>
            <Row>
                {children}
            </Row>
        </Container>
    </>
);

export default markupLayout;
import React from "react";

import { Row, Col, Image } from "react-bootstrap";

import { useSelector } from "react-redux";

import { getCurrentCarImage } from '../reduxSetup/currentConfigSlice/selectors';

const Summary = () => {
  const carImage = useSelector(getCurrentCarImage);

  return (
    <Row>
      <Col md="8">
        <Image
          className="d-block w-100"
          src={carImage.url}
          alt={carImage.alt}
        />
      </Col>
      <Col md="4">
        
      </Col>
    </Row>
  );
};

export default Summary;
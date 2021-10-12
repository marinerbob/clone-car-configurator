import React from "react";

import { Row, Col, Image } from "react-bootstrap";

import { useSelector } from "react-redux";

import { getCurrentCarImage } from '../reduxSetup/currentConfigSlice/selectors';

import Images from '../components/settings/images';

const Exterior = () => {
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
      <Col className="pt-md-3" md="4">
          <Images />
      </Col>
    </Row>
  );
};

export default Exterior;

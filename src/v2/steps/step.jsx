import React from "react";

import { Row, Col } from "react-bootstrap";
import Carousel from "../components/carousel";

import { useSelector } from 'react-redux';
import { getStepDataByModel } from '../reduxSetup/stepsSlice/selectors';

const CarStep = props => {
  const data = useSelector(getStepDataByModel);
  console.log(data, props);

  return (
    <Row>
    <Col md="8">
      <Carousel />
    </Col>
    <Col className="pt-md-3" md="4">
      <h1>Config</h1>
      {data}
    </Col>
  </Row>
  );
};

export default CarStep;

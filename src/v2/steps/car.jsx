import React, { useEffect } from "react";

import { Row, Col } from "react-bootstrap";
import Carousel from "../components/carousel";

import { useSelector, useDispatch } from 'react-redux';

import { updateStep } from '../reduxSetup/stepsSlice';
import { getStepDataByModel } from '../reduxSetup/stepsSlice/selectors';

const CarStep = props => {
  const dispatch = useDispatch();
  const data = useSelector(getStepDataByModel);
  console.log(data, props);

  useEffect(() => {
    dispatch(updateStep(data.name))
  }, [])

  return (
    <Row>
    <Col md="8">
      <Carousel />
    </Col>
    <Col className="pt-md-3" md="4">
      <h1>Config</h1>
    </Col>
  </Row>
  );
};

export default CarStep;

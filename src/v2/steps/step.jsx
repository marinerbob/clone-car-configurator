import React from 'react';

import { Row, Col } from 'react-bootstrap';

import { useSelector } from 'react-redux';
import { getStepDataByModel } from '../reduxSetup/stepsSlice/selectors';

import withStepsUpdate from './withStepsUpdate';

import Preview from '../components/preview';
import Settings from '../components/settings';


const Step = () => {
  const { name, prevStep, nextStep, slides, settings } = useSelector(getStepDataByModel);
  console.log({ name, prevStep, nextStep, slides, settings });

  return (
    <Row>
    <Col md="8">
      <Preview slides={slides} />
    </Col>
    <Col className="pt-md-3" md="4">
      <Settings settings={settings} />
    </Col>
  </Row>
  );
};

export default withStepsUpdate(Step);

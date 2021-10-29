import React from "react";

import { Row, Col } from "react-bootstrap";

import { useSelector } from "react-redux";
import { getStepDataByModel } from "../reduxSetup/stepsSlice/selectors";

import withStepsUpdate from "./withStepsUpdate";

import ImageContainer from "../components/preview/imageContainer";
import Carousel from "../components/carousel";
import Configuration from "../components/configuration";
import Summary from "../components/configuration/summary";

const Step = () => {
  const { label, prevStep, nextStep, slides, settings } =
    useSelector(getStepDataByModel);
  const isLastStep = nextStep === null;

  return (
    <Row>
      <Col md="8">
      {slides ? <Carousel modelBinding={slides !== 'cars' ? slides : null} /> : 
        <ImageContainer />}
      </Col>
      <Col className="pt-md-3" md="4">
        {isLastStep ? (
          <Summary 
            label={label}
          />
        ) : (
          <Configuration
            prevStep={prevStep}
            nextStep={nextStep}
            label={label}
            settings={settings}
          />
        )}
      </Col>
    </Row>
  );
};

export default withStepsUpdate(Step);

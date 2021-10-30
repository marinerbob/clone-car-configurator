import React from "react";

import { Row, Col } from "react-bootstrap";

import { useSelector } from "react-redux";
import { getStepDataByModel } from "../reduxSetup/stepsSlice/selectors";

import withStepsUpdate from "./withStepsUpdate";

import ImageContainer from "../components/preview/imageContainer";
import Carousel, { ConnectedCarCarousel } from "../components/carousel";
import Configuration from "../components/configuration";
import Summary from "../components/configuration/summary";

const CarouselPick = ({ slides }) => {
  if (slides === 'cars') {
    return <ConnectedCarCarousel />;
  }
  return <Carousel modelBinding={slides} />;
};

const Step = ({ label, prevStep, nextStep, slides }) => {
  console.log(label, prevStep, nextStep, slides);
  const settings = useSelector(getStepDataByModel);
  const isLastStep = nextStep === null;

  return (
    <Row>
      <Col md="8">
      {slides ? <CarouselPick slides={slides} /> : <ImageContainer />}
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

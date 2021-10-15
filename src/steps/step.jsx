import React from "react";

import { Row, Col } from "react-bootstrap";

import { useSelector } from "react-redux";
import { getStepDataByModel } from "../reduxSetup/stepsSlice/selectors";

import withStepsUpdate from "./withStepsUpdate";

import Preview from "../components/preview";
import Configuration from "../components/configuration";
import Summary from "../components/configuration/summary";

const Step = () => {
  const { label, prevStep, nextStep, slides, settings } =
    useSelector(getStepDataByModel);
  const isLastStep = nextStep === null;

  return (
    <Row>
      <Col md="8">
        <Preview slides={slides} />
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

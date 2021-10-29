import { createSelector } from "@reduxjs/toolkit";

import { getSteps } from '../rootSlice/selectors';
import { getCurrentCarModel, getCarsOptions } from '../currentConfigSlice/selectors';

export const getCurrentStep = state => getSteps(state).currentStep;
export const getAllStepsData = state => getSteps(state).stepsData;

export const getCurrentStepData = createSelector(
    [getAllStepsData, getCurrentStep],
    (stepsData, currentStep) => stepsData[currentStep]
);

export const getCurrentStepUrl = createSelector(
  [getCurrentStepData],
  step => ({
    name: step.name,
    prevStepUrl: step.prevStep ? `/${step.prevStep}` : null,
    nextStepUrl: step.nextStep ? `/${step.nextStep}` : null,
    url: `/${step.name}`,
    isFirst: step.prevStep === null
  })
)

export const getStepUrls = createSelector(
  [getAllStepsData],
  stepsData => Object.values(stepsData).map(step => ({
    name: step.name,
    url: `/${step.name}`,
    isFirst: step.prevStep === null
  }))
);

export const getStepDataByModel = createSelector(
  [getCurrentStepData, getCurrentCarModel, getCarsOptions],
  (stepData, carModel, carOptions) => {
    const settings = stepData.settings || [];
    let performedSettings = settings.map(s => {
      let settingsOptions = {
        ...s,
        options: carModel[s.binding] ? Object.values(carModel[s.binding]) : carOptions
      };
      return settingsOptions;
    });

    return {
      ...stepData,
      settings: performedSettings
    };
  } 
);
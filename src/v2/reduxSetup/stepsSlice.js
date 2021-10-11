import { createSlice, createSelector } from "@reduxjs/toolkit";

import { getSteps } from "./rootSlice";

const initialState = {
  currentStep: "car",
  steps: {
    car: {
      name: "car",
      prevStep: null,
      nextStep: "exterior"
    },
    exterior: {
      name: "exterior",
      prevStep: "car",
      nextStep: "summary"
    },
    summary: {
      name: "summary",
      prevStep: "exterior",
      nextStep: null
    },
  },
};

const stepsSlice = createSlice({
  name: "steps",
  initialState,
  reducers: {
    updateStep(state, action) {
      state.currentStep = action.payload.step;
    },
  },
});

export const getCurrentStep = state => getSteps(state).currentStep;
export const getAllSteps = state => getSteps(state).steps;
export const getAllStepsIds = state => Object.keys(getAllSteps(state));

export const getPrevStep = createSelector(
  [getAllSteps, getCurrentStep],
  (steps, currentStep) => {
    return steps[currentStep].prevStep;
  }
);

export const getNextStep = createSelector(
  [getAllSteps, getCurrentStep],
  (steps, currentStep) => {
    return steps[currentStep].nextStep;
  }
);

export const { updateStep } = stepsSlice.actions;

export default stepsSlice.reducer;

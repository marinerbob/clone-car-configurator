import { createSlice, createSelector } from "@reduxjs/toolkit";

import { getSteps } from "./rootSlice";
import { getCurrentCarConfig, getCurrentCarModel } from './currentConfigSlice';

const initialState = {
  currentStep: 'car',
  stepsData: {
    car: {
      name: 'car',
      prevStep: null,
      nextStep: 'exterior',
      settings: [
        {
          label: 'Select car',
          type: 'text',
          prop: 'model',
          modelBinding: 'key'
        },
        {
          label: 'Select type',
          type: 'text',
          prop: 'car_type',
          upperDescription: 'All cars have Dual Motor All-Wheel Drive, adaptive air suspension, premium interior and sound.',
          lowerDescription: `Tesla All-Wheel Drive has two independent motors that digitally control torque to the front and rear wheels—for far better handling and traction control. Your car can drive on either motor, so you don't need to worry about getting stuck on the road.`
        }
      ]
    },
    exterior: {
      name: 'exterior',
      prevStep: 'car',
      nextStep: 'summary',
      settings: [
        {
          label: 'Select color',
          type: 'color',
          prop: 'color'
        },
        {
          label: 'Select wheels',
          type: 'image',
          prop: 'wheels',
        }
      ]
    },
    summary: {
      name: 'summary',
      prevStep: 'exterior',
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

export const getAllStepsData = state => getSteps(state).stepsData;
export const getAllStepsIds = state => Object.keys(getAllStepsData(state));
export const getCurrentStep = state => getSteps(state).currentStep;
export const getStepUrls = state => getAllStepsIds(state).map(step => `/${step}`);

export const getStepsPageData = createSelector(
  [getAllStepsData, getCurrentCarConfig, getCurrentCarModel],
  (stepsData, carConfig, carModel) => {
    
  }
);

export const { updateStep } = stepsSlice.actions;

export default stepsSlice.reducer;

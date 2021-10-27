import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentStep: 'car',
  stepsData: {
    car: {
      name: 'car',
      label: 'Car configuration',
      prevStep: null,
      nextStep: 'add_char',
      slides: 'model',
      settings: [
        {
          label: 'Select car',
          type: 'text',
          prop: null,
          binding: null,
          modelBinding: null,
        },
        {
          label: 'Select type',
          type: 'text',
          prop: 'car_type',
          binding: 'types',
          showPrice: true,
          upperDescription: 'All cars have Dual Motor All-Wheel Drive, adaptive air suspension, premium interior and sound.',
          lowerDescription: `Tesla All-Wheel Drive has two independent motors that digitally control torque to the front and rear wheels—for far better handling and traction control. Your car can drive on either motor, so you don't need to worry about getting stuck on the road.`
        }
      ]
    },
    add_char: {
      name: 'add_char',
      label: 'Additional Configuration',
      prevStep: 'car',
      nextStep: 'exterior',
      settings: [
        {
          label: 'Select additional char',
          type: 'text',
          prop: 'char',
          binding: 'chars',
          showPrice: true,
          modelBinding: null,
        },
      ]
    },
    exterior: {
      name: 'exterior',
      label: 'Exterior configuration',
      prevStep: 'add_char',
      nextStep: 'summary',
      settings: [
        {
          label: 'Select color',
          type: 'color',
          prop: 'color',
          showPrice: true,
          binding: 'colors'
        },
        {
          label: 'Select wheels',
          type: 'image',
          prop: 'wheels',
          showPrice: true,
          binding: 'wheels'
        }
      ]
    },
    summary: {
      name: 'summary',
      label: 'Summary',
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

export const { updateStep } = stepsSlice.actions;

export default stepsSlice.reducer;

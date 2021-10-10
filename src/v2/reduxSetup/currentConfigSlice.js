import { createSlice, createSelector } from '@reduxjs/toolkit';

import { initialConfig } from '../data';

import { getCurrentConfig } from './rootSlice';

import { getModels } from './initialsSlice';

const initialState = {
    currentModel: "s",
    currentStep: 0,
    carConfig: initialConfig
};

const currentConfigSlice = createSlice({
    name: 'currentConfig',
    initialState,
    reducers: {
        updateModel(state, action) {
            state.currentModel = action.payload.model;
        },
        updateStep(state, action) {
            state.currentStep = action.payload.step;
        },
        updateConfig(state, action) {
            const model = state.currentModel;

            state.config[model][action.payload.key] = action.payload.val;
        }
    }
});

export const getCurrentModel = state => getCurrentConfig(state).currentModel;
export const getCurrentStep = state => getCurrentConfig(state).currentStep;
export const getConfig = state => getCurrentConfig(state).carConfig;

export const getConfigType = state => getConfig(state).car_type;
export const getConfigColor = state => getConfig(state).color;
export const getConfigWheels = state => getConfig(state).wheels;

export const getCurrentCarModel = createSelector(
    [getModels, getCurrentModel], (models, model) => {
        return models[model];
    }
);

export const getCurrentCarType = createSelector(
    [getCurrentCarModel, getConfigType],
    (model, type) => {
        return model[type];
    }
);
export const getCurrentCarColor = createSelector(
    [getCurrentCarModel, getConfigColor],
    (model, color) => {
        return model[color];
    }
);
export const getCurrentCarWheels = createSelector(
    [getCurrentModel, getConfigWheels],
    (model, wheels) => {
        return model[wheels];
    }
);

export const getCurrentCarPrice = createSelector(
    [getCurrentCarType, getCurrentCarColor, getCurrentCarWheels],
    (type, color, wheels) => {
        return type.price + color.price + wheels.price;
    }
);

export const { updateModel, updateStep, updateConfig } = currentConfigSlice.actions;

export default currentConfigSlice.reducer;

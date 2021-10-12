import { combineReducers } from 'redux';

import { connectRouter } from "connected-react-router";

import models from "./modelsSlice";
import currentConfig from './currentConfigSlice';
import steps from './stepsSlice';

const rootReducer = history => combineReducers({
    router: connectRouter(history),
    models,
    currentConfig,
    steps
});

export const getRouter = state => state.router;
export const getModels = state => state.models;
export const getCurrentConfig = state => state.currentConfig;
export const getSteps = state => state.steps;

export default rootReducer;
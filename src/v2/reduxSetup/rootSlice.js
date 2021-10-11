import { combineReducers } from 'redux';

import { connectRouter } from "connected-react-router";

import initials from "./initialsSlice";
import currentConfig from './currentConfigSlice';
import steps from './stepsSlice';

export const getRouter = state => state.router;
export const getInitials = state => state.initials;
export const getCurrentConfig = state => state.currentConfig;
export const getSteps = state => state.steps;

const rootReducer = history => combineReducers({
    router: connectRouter(history),
    initials,
    currentConfig,
    steps
});
export default rootReducer;
import { combineReducers } from 'redux';

import { connectRouter } from "connected-react-router";

import models from "../modelsSlice";
import currentConfig from '../currentConfigSlice';
import steps from '../stepsSlice';

const rootReducer = history => combineReducers({
    router: connectRouter(history),
    models,
    currentConfig,
    steps
});

export default rootReducer;
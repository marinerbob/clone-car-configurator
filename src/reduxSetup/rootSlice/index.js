import { combineReducers } from 'redux';

import { connectRouter } from "connected-react-router";

import currentConfig from '../currentConfigSlice';
import steps from '../stepsSlice';

const rootReducer = history => combineReducers({
    router: connectRouter(history),
    currentConfig,
    steps
});

export default rootReducer;
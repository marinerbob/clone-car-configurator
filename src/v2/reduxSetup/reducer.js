import { combineReducers } from 'redux';

import { connectRouter } from "connected-react-router";

import initials from "./initialsSlice";
import currentConfig from './currentConfigSlice';

export default history => combineReducers({
    router: connectRouter(history),
    initials,
    currentConfig
});
import { combineReducers } from 'redux';

import { connectRouter } from "connected-react-router";

import initials from "./initialsSlice";
import currentConfig from './currentConfigSlice';

export const getRouter = state => state.router;
export const getInitials = state => state.initials;
export const getCurrentConfig = state => state.currentConfig;

export default history => combineReducers({
    router: connectRouter(history),
    initials,
    currentConfig
});
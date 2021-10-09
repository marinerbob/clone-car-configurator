import { combineReducers } from 'redux';

import { connectRouter } from "connected-react-router";

import { createReducer } from "@reduxjs/toolkit/src/createReducer";

import { colors, models } from "../data";

export default history => combineReducers({
    router: connectRouter(history)
});
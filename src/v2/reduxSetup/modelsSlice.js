import { createSlice, createSelector } from "@reduxjs/toolkit";

import { models } from "../data";

import { getModels } from './rootSlice';

const initialState = models;

const modelsSlice = createSlice({
    name: 'models',
    initialState
});

export const getCarModelById = id => state => getModels(state)[id];

export default modelsSlice.reducer;
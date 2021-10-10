import { createSlice, createSelector } from "@reduxjs/toolkit";

import { models, colors } from "../data";

import { getInitials } from './rootSlice';

const initialState = {
    models,
    colors
};

const initialsSlice = createSlice({
    name: 'initials',
    initialState
});

export const getModels = state => getInitials(state).models;
export const getModelsIndexes = state => Object.keys(getModels(state)).map(el => el.indexOf());

export const getCarModel = (state, model) => model;
export const getCarModelById = createSelector(
    [getModels, getCarModel],
    (models, model) => {
        return models[model];
    }
);

export const getCarPrice = createSelector()

export default initialsSlice.reducer;
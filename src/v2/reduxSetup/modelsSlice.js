import { createSlice, createSelector } from "@reduxjs/toolkit";

import { models } from "../data";

import { getModels } from './rootSlice';

const initialState = models;

const modelsSlice = createSlice({
    name: 'models',
    initialState
});

export const getCarModelById = id => state => getModels(state)[id];
export const getCarsOptions = createSelector(
    [getModels],
    (models) => {
        const modelsKeys = Object.keys(models);
        return modelsKeys.map(mkey => ({
            label: models[mkey].label,
            value: models[mkey].key
        }));
    }   
);


export default modelsSlice.reducer;
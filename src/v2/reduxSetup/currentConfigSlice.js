import { createSlice, createSelector } from '@reduxjs/toolkit';

import { initialConfig } from '../data';

import { getModels } from './initialsSlice';
import { getCurrentConfig } from './rootSlice';

const initialState = {
    currentModel: "s",
    carConfig: initialConfig
};

const currentConfigSlice = createSlice({
    name: 'currentConfig',
    initialState,
    reducers: {
        updateModelByIndex(state, action) {
            let model = Object.keys(state.carConfig)[action.payload.index];

            state.currentModel = model;
        },
        updateModel(state, action) {
            state.currentModel = action.payload.model;
        },
        updateConfig(state, action) {
            const model = state.currentModel;

            state.config[model][action.payload.key] = action.payload.val;
        }
    }
});

export const getCurrentModel = state => getCurrentConfig(state).currentModel;
export const getConfig = state => getCurrentConfig(state).carConfig;

export const getCarConfig = createSelector(
    [getCurrentModel, getConfig],
    (model, config) => {
        return config[model];
    }
);

export const getCarImages = createSelector(
    [getConfig],
    (config) => {
        let imagesData = [];

        Object.keys(config).forEach((car, ind) => {
            imagesData.push({
                url: `${process.env.PUBLIC_URL}/cars/model_${car}/model_${car}_${config[car].color}_${config[car].wheels}.png`,
                alt: car,
                index: ind
            });
        });

        return imagesData;
    }
);

export const getActiveIndex = createSelector(
    [getCurrentModel, getConfig],
    (model, config) => {
        return Object.keys(config).indexOf(model);
    }
);

export const getCurrentCarImage = createSelector(
    [getCarConfig],
    (config) => {
        return {
            url: `${process.env.PUBLIC_URL}/cars/model_${config.model}/model_${config.model}_${config.color}_${config.wheels}.png`,
            alt: config.model
        };
    }
);

export const { updateModelByIndex, updateModel, updateConfig } = currentConfigSlice.actions;

export default currentConfigSlice.reducer;

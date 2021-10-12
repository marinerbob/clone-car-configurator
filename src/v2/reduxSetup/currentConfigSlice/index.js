import { createSlice } from '@reduxjs/toolkit';

import { initialConfig } from '../../data';

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

export const { updateModelByIndex, updateModel, updateConfig } = currentConfigSlice.actions;

export default currentConfigSlice.reducer;

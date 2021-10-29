import { createSlice } from '@reduxjs/toolkit';

import { models, initialConfig, configModelMap, summaryFields } from '../../data';

const initialState = {
    currentModel: "s",
    carConfig: initialConfig,
    configModelMap,
    summaryFields,
    models
};

const currentConfigSlice = createSlice({
    name: 'currentConfig',
    initialState,
    reducers: {
        updateModelByIndex(state, action) {
            const { prop, index } = action.payload;
            if (prop === null) {
                let model = Object.keys(state.carConfig)[index];
                state.currentModel = model;
            } else {
                const model = state.models[state.currentModel];
                const performedPropName = state.configModelMap[prop] || prop;
                const value = Object.keys(model[performedPropName])[index];

                state.carConfig[model.key][prop] = value;
            }

        },
        updateModel(state, action) {
            state.currentModel = action.payload.model;
        },
        updateConfig(state, action) {
            const { value, prop } = action.payload;
            if (prop) {
                const model = state.currentModel;

                state.carConfig[model][prop] = value;
            } else {
                state.currentModel = value;
            }
            
        }
    }
});

export const { updateModelByIndex, updateModel, updateConfig } = currentConfigSlice.actions;

export default currentConfigSlice.reducer;

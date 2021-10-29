import { createSlice } from '@reduxjs/toolkit';

import { initialConfig, configModelMap, summaryFields } from '../../data';

const initialState = {
    currentModel: "s",
    carConfig: initialConfig,
    configModelMap,
    summaryFields
};

const currentConfigSlice = createSlice({
    name: 'currentConfig',
    initialState,
    reducers: {
        updateModelByIndex(state, action) {
            const { prop, index } = action.payload;
            if (prop === 'cars') {
                let model = Object.keys(state.carConfig)[index];
                state.currentModel = model;
            } else {
                
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

import { createSlice } from "@reduxjs/toolkit";

import { models, colors, initialConfig } from "../data";

import { normalizeData } from '../utils/reduxUtils';

const initialState = {
    models: normalizeData(models),
    colors: normalizeData(colors, 'value'),
    initialConfig
};

const initialsSlice = createSlice({
    name: 'initials',
    initialState
});

export default initialsSlice.reducer;
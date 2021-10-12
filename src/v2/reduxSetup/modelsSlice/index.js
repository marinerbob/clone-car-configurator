import { createSlice } from "@reduxjs/toolkit";

import { models } from "../../data";

const initialState = models;

const modelsSlice = createSlice({
    name: 'models',
    initialState
});

export default modelsSlice.reducer;
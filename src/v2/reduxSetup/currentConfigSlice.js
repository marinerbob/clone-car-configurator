import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentStep: 0,
    car_info: {
        car_type: "long_range_plus",
        model: "s",
        color: "white",
        wheels: "wheel_1"
    }
};

const currentConfigSlice = createSlice({
    name: 'currentConfig',
    initialState,
    reducers: {

    }
});

export default currentConfigSlice.reducer;

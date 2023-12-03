import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading : false,
};

export const loadersSlice = createSlice({
    name: 'loaders',
    initialState,
    reducers: {
        SetLoader: (state, action) => {
            state.loading = action.payload;
        }
    }
})

export const {SetLoader} = loadersSlice.actions;

export default loadersSlice.reducer;
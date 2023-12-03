import { createSlice } from "@reduxjs/toolkit";

// initial state

const initialState = {
    currentUser: null,
    error: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.error = false;
        }
    }
});

export const { signInSuccess } = userSlice.actions

export default userSlice.reducer;
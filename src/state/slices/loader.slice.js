import { createSlice } from "@reduxjs/toolkit";

/** @type {{ loader: number[] }} */
export const initialState = {
    loader: [],
};

const loaderSlice = createSlice({
    name: "loader",
    initialState,
    reducers: {
        addLoaderId: (state, action) => {
            state.loader.push(action.payload);
        },
        removeLoaderId: (state, action) => {
            const index = state.loader.indexOf(action.payload);
            if (index !== -1) state.loader.splice(index, 1);
        },
    },
});

export const { addLoaderId, removeLoaderId } = loaderSlice.actions;

export default loaderSlice.reducer;

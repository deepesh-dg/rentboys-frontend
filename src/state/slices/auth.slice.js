import { createSlice } from "@reduxjs/toolkit";

/**
 * @type {{isAuthenticated: boolean, token?: string | null, user: *}}
 */
export const initialState = {
    isAuthenticated: false,
    token: null,
    user: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            state.token = action.payload.token;
            state.user = { ...action.payload, token: undefined };
        },
        logout: (state, action) => {
            state.isAuthenticated = false;
            state.token = null;
            state.user = null;
        },
    },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;

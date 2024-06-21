import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/services";

/**
 * @type {{isAuthenticated: boolean, token?: string | null, user: *}}
 */
const initiaState = {
    isAuthenticated: false,
    token: null,
    user: null,
};

export const loginThunk = createAsyncThunk(
    "auth/login",
    async (data, thunkApi) => {
        const res = await api.auth.login(data.username, data.password);

        if (res.status) return res.data;
    }
);

export const registerThunk = createAsyncThunk(
    "auth/register",
    async (data, thunkApi) => {
        const res = await api.auth.register(data);

        if (res.status) return res.data;
    }
);

export const authSlice = createSlice({
    name: "auth",
    initialState: initiaState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(loginThunk.fulfilled, (state, action) => {
            if (!action.payload) return;

            state.isAuthenticated = true;
            state.token = action.payload.token;
            state.user = { ...action.payload, token: undefined };
        });
    },
});

export const {} = authSlice.actions;

export default authSlice.reducer;

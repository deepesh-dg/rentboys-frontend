import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HTTP } from "@/lib";

const initiaState = {
    isAuthenticated: false,
    token: null,
    user: null,
};

export const loginThunk = createAsyncThunk(
    "auth/register",
    async (data, thunkApi) => {
        const res = await http.post("/login", data);

        if (res.status) return res.data;
    }
);

export const registerThunk = createAsyncThunk(
    "auth/register",
    async (data, thunkApi) => {
        const http = new HTTP();
        const res = await http.post("/register", data);

        if (res.status) return res.data;
    }
);

export const authSlice = createSlice({
    name: "auth",
    initialState: initiaState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(loginThunk.fulfilled, (state, action) => {
            if (action.payload) return;

            state.isAuthenticated = true;
            state.token = action.payload.token;
            state.user = { ...action.payload, token: undefined };
        });
    },
});

export const {} = authSlice.actions;

export default authSlice.reducer;

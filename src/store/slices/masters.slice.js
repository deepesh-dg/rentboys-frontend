import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HTTP } from "@/lib";

const initialState = {
    masters: {},
};

export const loadMastersThunk = createAsyncThunk("masters/load", async () => {
    const http = new HTTP();
    const response = await http.get("/masters");

    if (response.status) return response.data;
});

export const mastersSlice = createSlice({
    name: "masters",
    initialState,
    extraReducers: builder => {
        builder.addCase(loadMastersThunk.fulfilled, (state, action) => {
            state.masters = action.payload;
        });
    },
});

export const { addMaster, removeMaster } = mastersSlice.actions;

export default mastersSlice.reducer;

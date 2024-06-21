import CommonService from "@/services/common.service";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

/**
 * @type {{masters: {
 *  gender: {id: number, value: string, type: string, description: string}[],
 *  hair: {id: number, value: string, type: string, description: string}[],
 * }}}
 */
const initialState = {
    masters: {
        gender: [],
        hair: [],
    },
};

export const loadMastersThunk = createAsyncThunk("masters/load", async () => {
    const common = new CommonService();
    const response = await common.getMasters();

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

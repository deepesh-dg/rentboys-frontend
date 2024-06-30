import CommonService from "@/services/common.service";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

/**
 * @typedef {Object} MasterData
 * @property {number} id
 * @property {string} value
 * @property {string} type
 * @property {string} description
 */

/**
 * @type {{
 * fetched: boolean,
 * loading: boolean,
 * masters: {
 *    gender: MasterData[],
 *    hair: MasterData[],
 *    body_hair: MasterData[],
 *    foreskin: MasterData[],
 *    safe: MasterData[],
 *    position: MasterData[],
 *    eyes_color: MasterData[],
 *    sexual_orientation: MasterData[],
 *    piercings: MasterData[],
 *    race: MasterData[],
 *    body: MasterData[],
 *    style: MasterData[],
 *    zodiac: MasterData[],
 *    smooking: MasterData[],
 *    hair_color: MasterData[],
 *    "contact.email": string,
 *    "contact.phone": string,
 *    "contact.address": string,
 *    "reading.date_time_format": string,
 *    "reading.date_format": string,
 *    "reading.time_format": string"
 * }}}
 */
export const initialState = {
    fetched: false,
    loading: false,
    masters: {
        gender: [],
        hair: [],
        body_hair: [],
        foreskin: [],
        safe: [],
        position: [],
        eyes_color: [],
        sexual_orientation: [],
        piercings: [],
        race: [],
        body: [],
        style: [],
        zodiac: [],
        smooking: [],
        hair_color: [],
        "contact.email": "",
        "contact.phone": "",
        "contact.address": "",
        "reading.date_time_format": "",
        "reading.date_format": "",
        "reading.time_format": "",
    },
};

export const loadMastersThunk = createAsyncThunk(
    "masters/load",
    async (_, { getState, rejectWithValue }) => {
        const state = getState();
        if (state.masters.fetched) return state.masters.masters;
        const common = new CommonService();
        const response = await common.getMasters();

        if (response.status) return response.data;
    }
);

export const mastersSlice = createSlice({
    name: "masters",
    initialState,
    extraReducers: builder => {
        builder.addCase(loadMastersThunk.fulfilled, (state, action) => {
            state.fetched = true;
            state.loading = false;
            state.masters = action.payload;
        });
        builder.addCase(loadMastersThunk.pending, state => {
            state.loading = true;
        });
        builder.addCase(loadMastersThunk.rejected, state => {
            state.loading = false;
        });
    },
});

export const { addMaster, removeMaster } = mastersSlice.actions;

export default mastersSlice.reducer;

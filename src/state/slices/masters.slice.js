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
 * @type {{masters: {
 *   gender: MasterData[],
 *  hair: MasterData[],
 *  body_hair: MasterData[],
 *  foreskin: MasterData[],
 *  safe: MasterData[],
 *  position: MasterData[],
 *  eyes_color: MasterData[],
 *  piercings: MasterData[],
 *  race: MasterData[],
 *  style: MasterData[],
 *  zodiac: MasterData[],
 *  smooking: MasterData[],
 *  body: MasterData[],
 * }}}
 */
export const initialState = {
    masters: {
        gender: [],
        hair: [],
        body_hair: [],
        foreskin: [],
        safe: [],
        position: [],
        eyes_color: [],
        piercings: [],
        race: [],
        style: [],
        zodiac: [],
        smooking: [],
        body: [],
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

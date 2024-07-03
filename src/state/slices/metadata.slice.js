import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    isUploadIsReminderClosedByUser: false,
};

export const metadataSlice = createSlice({
    name: "metadata",
    initialState,
    reducers: {
        closeUploadIdModel(state) {
            state.isUploadIsReminderClosedByUser = true;
        },
        resetUploadIdModel(state) {
            state.isUploadIsReminderClosedByUser = false;
        },
    },
});

export const { closeUploadIdModel, resetUploadIdModel } = metadataSlice.actions;

export default metadataSlice.reducer;

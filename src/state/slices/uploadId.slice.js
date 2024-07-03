import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    isUploadIsReminderClosed: false,
};

export const uploadIdSlice = createSlice({
    name: "uploadId",
    initialState,
    reducers: {
        openModal(state) {
            state.isUploadIsReminderClosed = true;
        },
        closeModal(state) {
            state.isUploadIsReminderClosed = false;
        },
    },
});

export const { openModal, closeModal } = uploadIdSlice.actions;

export default uploadIdSlice.reducer;

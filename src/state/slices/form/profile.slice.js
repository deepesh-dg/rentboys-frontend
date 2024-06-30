import { createSlice } from "@reduxjs/toolkit";

export const initialFormData = {
    profile: "",
    profile_preview: "",
    about: "",
    age: "18",
    height: "",
    weight: "",
    cock_size: "",
    sexual_orientation: "",
    position: "",
    foreskin: "",
    safe: "",
    body_hair: "",
    hair_color: "",
    eye_color: "",
    style: "",
    body: "",
    race: "",
    tatoos: "",
    piercing: "",
    smoking: "",
};

export const initialState = {
    formData: initialFormData,
    /** @type {{ [K in keyof typeof initialFormData]: string } & { form: string } } */
    formErrors: {
        form: "",
        ...Object.keys(initialFormData).reduce(
            (acc, curr) => ({ ...acc, [curr]: "" }),
            {}
        ),
    },
    loader: false,
};

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        setFormData: (
            state,
            /** @type {import("@reduxjs/toolkit").PayloadAction<Partial<typeof initialState.formData>>} */
            action
        ) => {
            if (action.payload) {
                state.formData = { ...state.formData, ...action.payload };
            }
        },
        setFormErrors: (
            state,
            /** @type {import("@reduxjs/toolkit").PayloadAction<Partial<typeof initialState.formErrors>>} */
            action
        ) => {
            if (action.payload) {
                state.formErrors = { ...state.formErrors, ...action.payload };
            }
        },
        setLoader: (
            state,
            /** @type {import("@reduxjs/toolkit").PayloadAction<boolean>} */
            action
        ) => {
            state.loader = action.payload;
        },
        resetForm: state => {
            state.formData = initialState.formData;
            state.formErrors = initialState.formErrors;
            state.loader = initialState.loader;
        },
        resetFormData: state => {
            state.formData = initialState.formData;
        },
        resetFormErrors: state => {
            state.formErrors = initialState.formErrors;
        },
    },
});

export const {
    setFormData,
    setFormErrors,
    setLoader,
    resetForm,
    resetFormData,
    resetFormErrors,
} = profileSlice.actions;

export default profileSlice.reducer;

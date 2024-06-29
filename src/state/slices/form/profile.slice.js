import { createSlice } from "@reduxjs/toolkit";

export const initialFormData = {
    /** @type {File | null} */
    profile_file: null,
    profile: "",
    profile_preview: "",
    about: "",
    /** @type {string | number | null} */
    age: null,
    /** @type {string | number | null} */
    height: null,
    /** @type {string | number | null} */
    weight: null,
    /** @type {string | number | null} */
    cock_size: null,
    /** @type {string | number | null} */
    sexual_orientation: null,
    /** @type {string | number | null} */
    position: null,
    /** @type {string | number | null} */
    foreskin: null,
    /** @type {string | number | null} */
    safe: null,
    /** @type {string | number | null} */
    body_hair: null,
    /** @type {string | number | null} */
    hair_color: null,
    /** @type {string | number | null} */
    eye_color: null,
    /** @type {string | number | null} */
    style: null,
    /** @type {string | number | null} */
    body: null,
    /** @type {string | number | null} */
    race: null,
    /** @type {string | number | null} */
    tatoos: null,
    /** @type {string | number | null} */
    piercing: null,
    /** @type {string | number | null} */
    smoking: null,
    /** @type {string | number | null} */
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
        resetPasswordField: state => {
            state.formData.password = initialState.formData.password;
            state.formData.confirm_password =
                initialState.formData.confirm_password;
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
    resetPasswordField,
} = profileSlice.actions;

export default profileSlice.reducer;

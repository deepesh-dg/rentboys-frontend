import { createSlice } from "@reduxjs/toolkit";

const initialFormData = {
    token: "",
    email: "",
    otp: "",
    username: "",
    password: "",
    reset_password: "",
    confirm_password: "",
    rememberMe: false,
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

const loginSlice = createSlice({
    name: "login",
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
} = loginSlice.actions;

export default loginSlice.reducer;

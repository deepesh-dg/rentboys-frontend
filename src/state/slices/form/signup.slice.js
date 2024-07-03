import { createSlice } from "@reduxjs/toolkit";
import { UserType } from "@/constants";

const initialFormData = {
    email: "",
    username: "",
    password: "",
    confirm_password: "",
    /** @type { "0" | "1" } */
    terms_conditions: "0",
    /** @type {typeof UserType[keyof typeof UserType]} */
    user_type: UserType.CLIENT,
    otp: "",
    longitude: 0,
    latitude: 0,
    location: "",
    country: "",
    state: "",
    city: "",
    postal_code: "",
    landmark: "",
    id_proof_path: "",
    id_proof_preview: "",
    phone_code: "+91",
    country_code: "IN",
    phone_number: "",
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

const signupSlice = createSlice({
    name: "signup",
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
} = signupSlice.actions;

export default signupSlice.reducer;

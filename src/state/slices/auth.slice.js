import { UserTypeId, AccountStatus } from "@/constants";
import { createSlice } from "@reduxjs/toolkit";

/**
 * @typedef User
 * @property {number} id
 * @property {string} username
 * @property {typeof UserTypeId[keyof typeof UserTypeId]} user_role_id
 * @property {string} email
 * @property {string | null} phone_number
 * @property {string | null} phone_code
 * @property {string | null} country_code
 * @property {string | null} profile
 * @property {string | null} location
 * @property {number | null} latitude
 * @property {number | null} longitude
 * @property {number} step_one
 * @property {number} step_two
 * @property {number} step_three
 * @property {number} step_four
 * @property {number} is_active
 * @property {typeof AccountStatus[keyof typeof AccountStatus]} is_approved
 * @property {string} created_at
 */

/**
 * @type {{isAuthenticated: boolean, token?: string | null, user: User | null}}
 */
export const initialState = {
    isAuthenticated: false,
    token: null,
    user: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            state.token = action.payload.token;
            state.user = { ...action.payload, token: undefined };
        },
        logout: (state, action) => {
            state.isAuthenticated = false;
            state.token = null;
            state.user = null;
        },
    },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;

import { SignupScreenSteps } from "@/constants";
import { createSlice } from "@reduxjs/toolkit";

/**
 * AuthSteps state
 * @type {{
 *  screen: typeof SignupScreenSteps[keyof typeof SignupScreenSteps]
 * }}
 */
export const initialState = {
    screen: SignupScreenSteps.SIGNUP,
};

const signupScreenStepsSlice = createSlice({
    name: "signupScreenSteps",
    initialState,
    reducers: {
        setScreen: (
            state,
            /** @type {import("@reduxjs/toolkit").PayloadAction<typeof SignupScreenSteps[keyof typeof SignupScreenSteps]>} */
            action
        ) => {
            state.screen = action.payload;
        },
    },
});

export const { setScreen } = signupScreenStepsSlice.actions;

export default signupScreenStepsSlice.reducer;

import { LoginScreenSteps } from "@/constants";
import { createSlice } from "@reduxjs/toolkit";

/**
 * AuthSteps state
 * @type {{
 *  screen: typeof LoginScreenSteps[keyof typeof LoginScreenSteps]
 * }}
 */
const initialState = {
    screen: LoginScreenSteps.LOGIN,
};

const loginScreenStepsSlice = createSlice({
    name: "loginScreenSteps",
    initialState,
    reducers: {
        setScreen: (
            state,
            /** @type {import("@reduxjs/toolkit").PayloadAction<typeof LoginScreenSteps[keyof typeof LoginScreenSteps]>} */
            action
        ) => {
            state.screen = action.payload;
        },
    },
});

export const { setScreen } = loginScreenStepsSlice.actions;

export default loginScreenStepsSlice.reducer;

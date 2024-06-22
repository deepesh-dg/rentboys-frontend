import { useDispatch, useSelector } from "react-redux";
import { setScreen, initialState } from "../slices/signupScreenSteps.slice";
import { SignupScreenSteps } from "@/constants";

export function useSignupScreenSteps() {
    /** @type {typeof initialState} */
    const state = useSelector(state => state.signupScreenSteps);

    const dispatch = useDispatch();

    /**
     *
     * @param {typeof SignupScreenSteps[keyof typeof SignupScreenSteps]} screen
     * @returns
     */
    const _setScreen = screen => {
        dispatch(setScreen(screen));
    };

    return { ...state, setScreen: _setScreen };
}

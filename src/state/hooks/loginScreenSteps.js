import { useDispatch, useSelector } from "react-redux";
import { setScreen, initialState } from "../slices/loginScreenSteps.slice";
import { LoginScreenSteps } from "@/constants";

export function useLoginScreenSteps() {
    /** @type {typeof initialState} */
    const state = useSelector(state => state.loginScreenSteps);

    const dispatch = useDispatch();

    /**
     *
     * @param {typeof LoginScreenSteps[keyof typeof LoginScreenSteps]} screen
     * @returns
     */
    const _setScreen = screen => {
        dispatch(setScreen(screen));
    };

    return { ...state, setScreen: _setScreen };
}

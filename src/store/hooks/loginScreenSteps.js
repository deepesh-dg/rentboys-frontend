import { useDispatch, useSelector } from "react-redux";
import { setScreen } from "../slices/loginScreenSteps.slice";
import { LoginScreenSteps } from "@/constants";

/**
 * @param {(state) => *} [selector]
 * @returns {*}
 */
export function useLoginScreenSteps(selector) {
    const state = useSelector(state =>
        selector ? selector(state.loginScreenSteps) : state.loginScreenSteps
    );

    const dispatch = useDispatch();

    /**
     *
     * @param {typeof LoginScreenSteps[keyof typeof LoginScreenSteps]} screen
     * @returns
     */
    const _setScreen = screen => dispatch(setScreen(screen));

    return { ...state, setScreen: _setScreen };
}

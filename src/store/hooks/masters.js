import { useSelector, useDispatch } from "react-redux";
import { loadMastersThunk } from "../slices/masters.slice";

/**
 * @param {(state) => *} [selector]
 * @returns {*}
 */
export function useMasters(selector) {
    const state = useSelector(state =>
        selector ? selector(state.auth) : state.auth
    );

    const dispatch = useDispatch();

    const load = () => dispatch(loadMastersThunk());

    return { ...state, load };
}

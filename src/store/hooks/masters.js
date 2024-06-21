import { useSelector, useDispatch } from "react-redux";
import { loadMastersThunk, initialState } from "../slices/masters.slice";

export function useMasters() {
    /** @type {typeof initialState} */
    const state = useSelector(state => state.masters);

    const dispatch = useDispatch();

    const load = () => {
        dispatch(loadMastersThunk());
    };

    return { ...state, load };
}

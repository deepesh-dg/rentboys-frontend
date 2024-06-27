import { useDispatch, useSelector } from "react-redux";
import {
    initialState,
    addLoaderId as _addLoaderId,
    removeLoaderId as _removeLoaderId,
} from "../slices/loader.slice";
import { useCallback } from "react";

export function useLoader() {
    /** @type {typeof initialState} */
    const state = useSelector(state => state.loader);

    const dispatch = useDispatch();

    /**
     *
     * @param {number} id
     */
    const addLoaderId = useCallback(id => {
        dispatch(_addLoaderId(id));
    }, []);

    /**
     *
     * @param {number} id
     */
    const removeLoaderId = useCallback(id => {
        dispatch(_removeLoaderId(id));
    }, []);

    return { ...state, addLoaderId, removeLoaderId };
}

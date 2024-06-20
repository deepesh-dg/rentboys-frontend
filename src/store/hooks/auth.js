import { useSelector, useDispatch } from "react-redux";
import { loginThunk, registerThunk } from "../slices/auth.slice";

/**
 * @param {(state) => *} [selector]
 * @returns {*}
 */
export function useAuth(selector) {
    const state = useSelector(state =>
        selector ? selector(state.auth) : state.auth
    );

    const dispatch = useDispatch();

    const login = data => dispatch(loginThunk(data));
    const register = data => dispatch(registerThunk(data));

    return { ...state, login, register };
}

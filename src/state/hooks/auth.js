import { useSelector, useDispatch } from "react-redux";
import { loginThunk, registerThunk, initialState } from "../slices/auth.slice";

export function useAuth() {
    /** @type {typeof initialState} */
    const state = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const login = data => {
        dispatch(loginThunk(data));
    };

    const register = data => {
        dispatch(registerThunk(data));
    };

    return { ...state, login, register };
}

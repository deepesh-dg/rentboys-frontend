import { useSelector, useDispatch } from "react-redux";
import {
    login as _login,
    logout as _logout,
    initialState,
} from "../slices/auth.slice";

export function useAuth() {
    /** @type {typeof initialState} */
    const state = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const login = data => {
        dispatch(_login(data));
    };

    const logout = () => {
        dispatch(_logout());
    };

    return { ...state, login, logout };
}

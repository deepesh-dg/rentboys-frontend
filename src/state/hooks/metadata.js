import { useSelector, useDispatch } from "react-redux";
import {
    closeUploadIdModel as _closeUploadIdModel,
    resetUploadIdModel as _resetUploadIdModel,
    initialState,
} from "../slices/metadata.slice";

export function useMetadata() {
    /** @type {typeof initialState} */
    const state = useSelector(state => state.metadata);

    const dispatch = useDispatch();

    const closeUploadIdModel = () => {
        dispatch(_closeUploadIdModel());
    };

    const resetUploadIdModel = () => {
        dispatch(_resetUploadIdModel());
    };

    return { ...state, closeUploadIdModel, resetUploadIdModel };
}

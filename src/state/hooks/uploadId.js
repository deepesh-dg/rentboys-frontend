import { useSelector, useDispatch } from "react-redux";
import {
    openModal,
    closeModal,
} from "../slices/uploadId.slice";

export function useMetadata() {
    /** @type {typeof initialState} */
    const state = useSelector(state => state.uploadId);

    const dispatch = useDispatch();

    const openUploadIdModal = () => {
        dispatch(openModal());
    };

    const closeUploadIdModal = () => {
        dispatch(closeModal());
    };

    return { ...state, openUploadIdModal, closeUploadIdModal };
}

import React, { useId, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    initialState,
    setFormData as _setFormData,
    setFormErrors as _setFormErrors,
    setLoader as _setLoader,
    resetForm as _resetForm,
    resetFormData as _resetFormData,
    resetFormErrors as _resetFormErrors,
} from "../slices/form/profile.slice";
import api from "@/services";
import { FileUploadTypes } from "@/constants";

export function useProfile() {
    /** @type {typeof initialState} */
    const { formData, formErrors, loader } = useSelector(
        state => state.profileForm
    );

    const [profileFile, setProfileFile] = useState(null);

    /** @type {{ [K in keyof typeof formData]: string }} */
    const formIds = {
        ...Object.keys(formData).reduce(
            (acc, curr) => ({ ...acc, [curr]: useId() }),
            {}
        ),
    };

    const dispatch = useDispatch();

    const setFormData = React.useCallback(
        /** @type {(newFormData: Partial<typeof formData>) => void} */
        newFormData => {
            dispatch(_setFormData(newFormData));
        },
        [dispatch]
    );

    const setFormErrors = React.useCallback(
        /** @type {(newFormData: typeof formErrors) => void} */
        newFormErrors => {
            dispatch(_setFormErrors(newFormErrors));
        },
        [dispatch]
    );

    const setLoader = React.useCallback(
        /** @type {status: boolean) => void} */
        status => {
            dispatch(_setLoader(status));
        },
        [dispatch]
    );

    const resetForm = React.useCallback(() => {
        dispatch(_resetForm());
    }, [dispatch]);

    const resetFormData = React.useCallback(() => {
        dispatch(_resetFormData());
    }, [dispatch]);

    const resetFormErrors = React.useCallback(() => {
        dispatch(_resetFormErrors());
    }, [dispatch]);

    /**
     *
     * @param {(d: typeof formData) => Promise<any>} submit
     * @param {(d: typeof formData) => void} validate
     */
    const handleSubmit = (submit, validate) => {
        return async e => {
            e?.preventDefault();

            try {
                resetFormErrors();
                if (validate) validate(formData);

                setLoader(true);
                return await submit(formData);
            } catch (error) {
                const errors = {};

                if (error?.errors) {
                    Object.keys(error.errors).forEach(key => {
                        errors[key] = error.errors[key][0];
                    });

                    return;
                }

                errors.form = error?.message || "Something went wrong";

                setFormErrors(errors);
            } finally {
                setLoader(false);
            }
        };
    };

    const uploadProfilePicture = handleSubmit(async data => {
        if (profileFile) {
            const response = await api.common.uploadFile(
                FileUploadTypes.USER_PROFILE,
                profileFile
            );

            if (!response.status) throw response;

            setFormData({
                profile: response.data.upload_path,
                profile_preview: response.data.perview_path,
            });

            return true;
        }
    });

    const profileSetup = handleSubmit(async data => {
        const response = await api.profile.profileSetup(data);

        if (!response.status) throw response;

        return true;
    });

    return {
        formIds,
        data: formData,
        profileFile,
        setProfileFile,
        setData: setFormData,
        errors: formErrors,
        setError: setFormErrors,
        loader,
        setLoader,
        uploadProfilePicture,
        profileSetup,
        resetForm,
        resetFormData,
        resetFormErrors,
    };
}

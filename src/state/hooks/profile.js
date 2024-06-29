import React, { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    initialState,
    setFormData as _setFormData,
    setFormErrors as _setFormErrors,
    setLoader as _setLoader,
    resetForm as _resetForm,
    resetFormData as _resetFormData,
    resetFormErrors as _resetFormErrors,
    resetPasswordField as _resetPasswordField,
} from "../slices/form/profile.slice";
import api from "@/services";

export function useProfile() {
    /** @type {typeof initialState} */
    const { formData, formErrors, loader } = useSelector(
        state => state.loginForm
    );

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

    const resetPasswordField = React.useCallback(() => {
        dispatch(_resetPasswordField());
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
        if (data.profile_file) {
            const response = await api.common.uploadFile(
                FileUploadTypes.USER_PROFILE,
                data.profile_file
            );

            if (!response.status) throw response.message;

            setFormData(prev => {
                prev.profile = response.data.upload_path;
                prev.profile_preview = response.data.preview_path;
            });
        }
    });

    const updateProfile = handleSubmit(async data => {
        // const response = await api.common.profile.update
    });

    return {
        formIds,
        data: formData,
        setData: setFormData,
        errors: formErrors,
        setError: setFormErrors,
        loader,
        setLoader,
        uploadProfilePicture,
        updateProfile,
        resetForm,
        resetFormData,
        resetFormErrors,
        resetPasswordField,
    };
}

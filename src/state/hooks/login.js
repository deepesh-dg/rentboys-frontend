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
} from "@/state/slices/form/login.slice";
import { useAuth } from "./auth";
import api from "@/services";

export function useLogin() {
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

    const { login: authLogin } = useAuth();

    const login = handleSubmit(
        async data => {
            const response = await api.auth.login(data.username, data.password);

            if (!response.status) {
                throw response;
            }

            authLogin(response.data);
        },
        data => {
            const errors = {};
            if (!data.username) {
                errors.username = ["Email is required"];
            }
            if (!data.password) {
                errors.password = ["Password is required"];
            }

            if (Object.keys(errors).length > 0) {
                throw { errors };
            }
        }
    );

    const forgotPassword = handleSubmit(
        async data => {
            const response = await api.auth.forgotPassword(data.email);

            if (!response.status) {
                throw response;
            }

            return true;
        },
        data => {
            const errors = {};
            if (!data.email) {
                errors.email = ["Email is required"];
            }
            if (Object.keys(errors).length > 0) {
                throw { errors };
            }
        }
    );

    const resendOtp = handleSubmit(async () => {
        setLoader(() => true);
        const response = await api.auth.forgotPasswordOtpResend(formData.email);
        setLoader(() => false);

        if (!response.status) {
            throw response;
        }

        return true;
    });

    const submitOtp = handleSubmit(
        async data => {
            const response = await api.auth.forgotPasswordOtpMatch(
                data.email,
                data.otp
            );

            if (!response.status) {
                throw response;
            }

            setFormData(prev => {
                prev.token = response.data.validate_string;
            });

            return true;
        },
        data => {
            const errors = {};
            if (!data.otp) {
                errors.otp = ["OTP is required"];
            }

            if (data.otp.length !== 4) {
                errors.otp = ["OTP must be 4 digits"];
            }

            if (Object.keys(errors).length > 0) {
                throw { errors };
            }
        }
    );

    const resetPassword = handleSubmit(
        async data => {
            const response = await api.auth.resetPassword(
                data.token,
                data.password,
                data.confirm_password
            );

            if (!response.status) {
                throw response;
            }

            return true;
        },
        data => {
            const errors = {};
            if (!data.token) {
                errors.token = ["Token is required"];
            }
            if (!data.password) {
                errors.password = ["Password is required"];
            }
            if (!data.confirm_password) {
                errors.confirm_password = ["Confirm password is required"];
            }

            if (Object.keys(errors).length > 0) {
                throw { errors };
            }
        }
    );

    return {
        formIds,
        data: formData,
        setData: setFormData,
        errors: formErrors,
        setError: setFormErrors,
        loader,
        setLoader,
        login,
        resendOtp,
        submitOtp,
        resetPassword,
        forgotPassword,
        resetForm,
        resetFormData,
        resetFormErrors,
        resetPasswordField,
    };
}

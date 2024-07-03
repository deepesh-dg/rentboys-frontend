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
    resetPasswordField as _resetPasswordField,
} from "@/state/slices/form/signup.slice";
import { useAuth } from "./auth";
import api from "@/services";
import { FileUploadTypes, UserType } from "@/constants";

export function useSignup() {
    /** @type {typeof initialState} */
    const { formData, formErrors, loader } = useSelector(
        state => state.signupForm
    );

    const [idProof, setIdProof] = useState(null);

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
                const status = await submit(formData);

                return status;
            } catch (error) {
                const errors = {};

                if (error?.errors) {
                    Object.keys(error.errors).forEach(key => {
                        errors[key] = error.errors[key][0];
                    });
                } else errors.form = error?.message || "Something went wrong";

                setFormErrors(errors);
            } finally {
                setLoader(false);
            }
        };
    };

    const { login } = useAuth();

    const signup = handleSubmit(
        async data => {
            const response = await api.auth.signup({
                email: data.email,
                username: data.username,
                password: data.password,
                terms_conditions: data.terms_conditions,
            });

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
            if (!data.username) {
                errors.username = ["Username is required"];
            }
            if (!data.password) {
                errors.password = ["Password is required"];
            }
            if (!data.terms_conditions || data.terms_conditions !== "1") {
                errors.terms_conditions = ["Terms and conditions are required"];
            }

            if (Object.keys(errors).length > 0) {
                throw { errors };
            }
        }
    );

    const emailVerifyResendOtp = handleSubmit(async data => {
        setLoader(() => true);
        const response = await api.auth.emailVerifyOtpResend({
            email: data.email,
        });
        setLoader(() => false);

        if (!response.status) {
            throw response;
        }

        return true;
    });

    const emailVerifyOtpMatch = handleSubmit(
        async data => {
            const response = await api.auth.emailVerifyOtpMatch({
                email: data.email,
                otp: data.otp,
            });

            if (!response.status) {
                throw response;
            }

            setFormData({
                otp: initialState.formData.otp,
            });

            return true;
        },
        async data => {
            const errors = {};
            if (!data.otp) {
                errors.otp = ["OTP is required"];
            }

            if (data.otp.length < 4) {
                errors.otp = ["Please fill the OTP field"];
            }

            if (Object.keys(errors).length > 0) {
                throw { errors };
            }
        }
    );

    const selectUserType = handleSubmit(async data => {
        const response = await api.auth.selectUserType({
            email: data.email,
            username: data.username,
            password: data.password,
            terms_conditions: data.terms_conditions,
            user_type: data.user_type,
        });

        if (!response.status) {
            throw response;
        }

        return true;
    });

    const selectLocation = handleSubmit(async data => {
        const response = await api.auth.selectLocation({
            email: data.email,
            username: data.username,
            password: data.password,
            terms_conditions: data.terms_conditions,
            user_type: data.user_type,
            longitude: data.longitude,
            latitude: data.latitude,
            location: data.location,
            country: data.country,
            state: data.state,
            city: data.city,
            postal_code: data.postal_code,
            landmark: data.landmark,
        });

        if (!response.status) {
            throw response;
        }

        if (data.user_type === UserType.CLIENT) {
            // fASLE
            login(response.data);
        }

        return true;
    });

    const uploadId = handleSubmit(async data => {
        const response = await api.common.uploadFile(
            FileUploadTypes.USER_DOC,
            idProof
        );

        if (!response.status) {
            throw response;
        }

        setFormData({
            id_proof_path: response.data.upload_path,
            id_proof_preview: response.data.perview_path,
        });

        return true;
    });

    const phoneVerify = handleSubmit(async data => {
        const response = await api.auth.phoneVerifyOtpSend({
            email: data.email,
            phone_code: data.phone_code,
            country_code: data.country_code,
            phone_number: data.phone_number,
        });

        if (!response.status) {
            throw response;
        }

        return true;
    });

    const phoneVerifyResendOtp = handleSubmit(async data => {
        setLoader(() => true);
        const response = await api.auth.phoneVerifyOtpResend({
            phone_code: data.phone_code,
            phone_number: data.phone_number,
        });
        setLoader(() => false);

        if (!response.status) {
            throw response;
        }

        return true;
    });

    const phoneVerifyOtpMatch = handleSubmit(
        async data => {
            const response = await api.auth.phoneVerifyOtpMatch({
                email: data.email,
                username: data.username,
                password: data.password,
                terms_conditions: data.terms_conditions,
                user_type: data.user_type,
                longitude: data.longitude,
                latitude: data.latitude,
                location: data.location,
                country: data.country,
                state: data.state,
                city: data.city,
                postal_code: data.postal_code,
                landmark: data.landmark,
                phone_code: data.phone_code,
                country_code: data.country_code,
                phone_number: data.phone_number,
                otp: data.otp,
            });

            if (!response.status) {
                throw response;
            }
            //FALSE
            login(response.data);

            return true;
        },
        async data => {
            const errors = {};
            if (!data.otp) {
                errors.otp = ["OTP is required"];
            }

            if (data.otp.length < 4) {
                errors.otp = ["Please fill the OTP field"];
            }

            if (Object.keys(errors).length > 0) {
                throw { errors };
            }
        }
    );

    return {
        formIds,
        data: formData,
        idProof,
        setIdProof,
        setData: setFormData,
        errors: formErrors,
        setError: setFormErrors,
        loader,
        setLoader,
        signup,
        emailVerifyResendOtp,
        emailVerifyOtpMatch,
        selectUserType,
        selectLocation,
        uploadId,
        phoneVerify,
        phoneVerifyResendOtp,
        phoneVerifyOtpMatch,
        resetForm,
        resetFormData,
        resetFormErrors,
        resetPasswordField,
    };
}

import { useForm } from "@/hooks";
import api from "@/services";
import { createContext, useCallback, useContext, useRef } from "react";
import { useAuth } from "../hooks";

const initialData = {
    token: "",
    email: "",
    otp: "",
    username: "",
    password: "",
    confirm_password: "",
    rememberMe: false,
};

const LoginContext = createContext({
    data: initialData,
    /** @type {{ [K in keyof typeof initialData]: string } & { form: string } } */
    errors: {},
    /** @type {{ [K in keyof typeof initialData]: string } & { form: string } } */
    formIds: {},
    loader: false,
    /** @type {(updater: (prev: boolean) => boolean) => void} */
    setLoader: updater => {},
    /** @type {(updater: (prevState: typeof initialData) => void) => void} */
    setData: updater => {},
    /** @type {(updater: (prevState: { [K in keyof typeof initialData]: string } & { form: string } ) => void) => void} */
    setError: updater => {},
    resetForm: () => {},
    login: async e => {},
    forgotPassword: async e => {},
    resendOtp: async () => {},
    submitOtp: async e => {},
    resetPassword: async e => {},
});

export function useLogin() {
    const data = useContext(LoginContext);

    return data;
}

export function LoginProvider({ children }) {
    const {
        formData,
        formErrors,
        formIds,
        loader,
        setFormData,
        setFormErrors,
        setLoader,
        handleSubmit,
    } = useForm(initialData);

    const initialFormErrors = useRef(formErrors);

    const { login: authLogin, logout: authLogout } = useAuth();

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

            console.log({ response });

            return true;
        },
        data => {
            const errors = {};
            if (!data.otp) {
                errors.otp = ["OTP is required"];
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

    const resetForm = useCallback(() => {
        setFormData(() => initialData);
        setFormErrors(() => initialFormErrors.current);
    }, []);

    return (
        <LoginContext.Provider
            value={{
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
            }}
        >
            {children}
        </LoginContext.Provider>
    );
}

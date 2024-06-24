import { useForm } from "@/hooks";
import api from "@/services";
import { createContext, useCallback, useContext, useRef } from "react";
import { FileUploadTypes, UserType } from "@/constants";
import { useAuth } from "../hooks";
import { useNavigate } from "react-router-dom";

const initialData = {
    email: "",
    username: "",
    password: "",
    confirm_password: "",
    /** @type { "0" | "1" } */
    terms_conditions: "0",
    /** @type {typeof UserType[keyof typeof UserType]} */
    user_type: UserType.CLIENT,
    otp: "",
    longitude: 0,
    latitude: 0,
    location: "",
    country: "",
    state: "",
    city: "",
    postal_code: "",
    landmark: "",
    /** @type {File | null} */
    id_proof: null,
    id_proof_path: "",
    id_proof_preview: "",
    phone_code: "+91",
    phone_number: "",
};

const SignupContext = createContext({
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
    resetPasswordField: () => {},
    signup: async e => {},
    emailVerifyResendOtp: async () => {},
    emailVerifyOtpMatch: async e => {},
    selectUserType: async e => {},
    selectLocation: async e => {},
    uploadId: async e => {},
    phoneVerify: async e => {},
    phoneVerifyResendOtp: async () => {},
    phoneVerifyOtpMatch: async e => {},
});

export function useSignup() {
    const data = useContext(SignupContext);

    return data;
}

export function SignupProvider({ children }) {
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

    const { login } = useAuth();

    const signup = handleSubmit(
        async data => {
            const response = await api.auth.signup(data);

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
        const response = await api.auth.emailVerifyOtpResend(data);
        setLoader(() => false);

        if (!response.status) {
            throw response;
        }

        return true;
    });

    const emailVerifyOtpMatch = handleSubmit(async data => {
        const response = await api.auth.emailVerifyOtpMatch(data);

        if (!response.status) {
            throw response;
        }

        setFormData(prev => {
            prev.otp = initialData.otp;
        });

        return true;
    });

    const selectUserType = handleSubmit(async data => {
        const response = await api.auth.selectUserType(data);

        if (!response.status) {
            throw response;
        }

        return true;
    });

    const selectLocation = handleSubmit(async data => {
        const response = await api.auth.selectLocation(data);

        if (!response.status) {
            throw response;
        }

        if (data.user_type === UserType.CLIENT) {
            login(response.data);
        }

        return true;
    });

    const uploadId = handleSubmit(async data => {
        const response = await api.common.uploadFile(
            FileUploadTypes.USER_DOC,
            data.id_proof
        );

        if (!response.status) {
            throw response;
        }

        setFormData(prev => {
            prev.id_proof_path = response.data.upload_path;
            prev.id_proof_preview = response.data.perview_path;
        });

        return true;
    });

    const phoneVerify = handleSubmit(async data => {
        const response = await api.auth.phoneVerifyOtpSend(data);

        if (!response.status) {
            throw response;
        }

        return true;
    });

    const phoneVerifyResendOtp = handleSubmit(async () => {
        setLoader(() => true);
        const response = await api.auth.phoneVerifyOtpResend();
        setLoader(() => false);

        if (!response.status) {
            throw response;
        }

        return true;
    });

    const phoneVerifyOtpMatch = handleSubmit(async data => {
        const response = await api.auth.phoneVerifyOtpMatch(data);

        if (!response.status) {
            throw response;
        }

        login(response.data);

        return true;
    });

    const resetForm = useCallback(() => {
        setFormData(() => initialData);
        setFormErrors(() => initialFormErrors.current);
    }, []);

    const resetPasswordField = useCallback(() => {
        setFormData(prev => {
            prev.password = initialData.password;
            prev.confirm_password = initialData.confirm_password;
        });
    }, []);

    return (
        <SignupContext.Provider
            value={{
                formIds,
                data: formData,
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
                resetPasswordField,
            }}
        >
            {children}
        </SignupContext.Provider>
    );
}

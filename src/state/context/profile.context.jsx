import { useForm } from "@/hooks";
import api from "@/services";
import { createContext, useCallback, useContext, useRef } from "react";

const initialData = {
    profile: "",
    profile_preview: "",
    about: "",
    /** @type {string | number | null} */
    age: null,
    /** @type {string | number | null} */
    height: null,
    /** @type {string | number | null} */
    weight: null,
    /** @type {string | number | null} */
    cock_size: null,
    /** @type {string | number | null} */
    sexual_orientation: null,
    /** @type {string | number | null} */
    position: null,
    /** @type {string | number | null} */
    foreskin: null,
    /** @type {string | number | null} */
    safe: null,
    /** @type {string | number | null} */
    body_hair: null,
    /** @type {string | number | null} */
    hair_color: null,
    /** @type {string | number | null} */
    eye_color: null,
    /** @type {string | number | null} */
    style: null,
    /** @type {string | number | null} */
    body: null,
    /** @type {string | number | null} */
    race: null,
    /** @type {string | number | null} */
    tatoos: null,
    /** @type {string | number | null} */
    piercing: null,
    /** @type {string | number | null} */
    smoking: null,
    /** @type {string | number | null} */
};

const ProfileContext = createContext({
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
    uploadProfilePicture: async e => {},
    updateProfile: async e => {},
});

export function useProfile() {
    const data = useContext(ProfileContext);

    return data;
}

export function ProfileProvider({ children }) {
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

    const resetForm = useCallback(() => {
        setFormData(() => initialData);
        setFormErrors(() => initialFormErrors.current);
    }, []);

    return (
        <ProfileContext.Provider
            value={{
                formIds,
                data: formData,
                setData: setFormData,
                errors: formErrors,
                setError: setFormErrors,
                loader,
                setLoader,
                resetForm,
            }}
        >
            {children}
        </ProfileContext.Provider>
    );
}

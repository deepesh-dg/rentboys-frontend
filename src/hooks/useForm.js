import { useId } from "react";
import useState from "./useState";

/**
 * @template T
 * @param {T} initialValue
 */
export default function useForm(initialValue) {
    const [loader, setLoader] = useState(false);
    const [formData, setFormData] = useState(initialValue);
    /** @type {{ [K in keyof T]: string } & {form: string}} */
    const InitialErrorsValue = {
        form: "",
        ...Object.keys(initialValue).reduce(
            (acc, curr) => ({ ...acc, [curr]: "" }),
            {}
        ),
    };
    /** @type {{ [K in keyof T]: string }} */
    const formIds = {
        ...Object.keys(initialValue).reduce(
            (acc, curr) => ({ ...acc, [curr]: useId() }),
            {}
        ),
    };
    const [formErrors, setFormErrors] = useState(InitialErrorsValue);

    /**
     *
     * @param {(formData: T) => Promise<any>} submit
     * @param {(formData: T) => void} validate
     */
    const handleSubmit = (submit, validate) => {
        return async e => {
            e?.preventDefault();

            try {
                setFormErrors(() => InitialErrorsValue);
                if (validate) validate(formData);

                setLoader(() => true);
                return await submit(formData);
            } catch (error) {
                setFormErrors(prev => {
                    if (error?.errors) {
                        Object.keys(error.errors).forEach(key => {
                            prev[key] = error.errors[key][0];
                        });

                        return;
                    }

                    prev.form = error?.message || "Something went wrong";
                });
            } finally {
                setLoader(() => false);
            }
        };
    };

    return {
        formData,
        setFormData,
        formErrors,
        setFormErrors,
        loader,
        setLoader,
        formIds,
        handleSubmit,
    };
}

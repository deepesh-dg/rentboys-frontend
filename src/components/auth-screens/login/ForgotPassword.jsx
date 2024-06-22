import React from "react";
import Button from "../../Button";
import { MailIcon } from "../../icons/outline";
import Input from "../../common/Input/Input";
import { useLoginScreenSteps } from "@/store";
import { useForm } from "@/hooks";
import { LoginScreenSteps } from "@/constants";
import api from "@/services";

const ForgotPassword = () => {
    const { setScreen } = useLoginScreenSteps();
    const { formData, formErrors, formIds, setFormData, handleSubmit } =
        useForm({
            email: "",
        });

    const validate = data => {
        const errors = {};
        if (!data.email) {
            errors.email = ["Email is required"];
        }

        if (Object.keys(errors).length > 0) {
            throw { errors };
        }
    };

    const submit = async data => {
        // const response = await api.auth.forgotPassword(data.email);

        // if (!response.status) {
        //     throw response;
        // }

        setScreen(LoginScreenSteps.FORGOT_PASSWORD_OTP);
    };

    return (
        <form
            onSubmit={handleSubmit(submit, validate)}
            className="z-1 flex w-full max-w-xl flex-col items-center gap-y-6 rounded-2xl border border-dark bg-black/80 px-4 py-12 text-white shadow-sm md:px-16"
        >
            <h1 className="font-fira-sans text-2xl font-normal text-white">
                Forget Password
            </h1>
            <div className="flex flex-col items-center">
                <p className="text-center text-gray-200">
                    Enter the email address associated with the Rentboys
                </p>
                <span className="my-2 inline-block h-1 w-20 bg-red-50"></span>
            </div>
            <Input
                icon={MailIcon}
                type="email"
                placeholder="exapmple@test.com"
                value={formData.email}
                onChange={e =>
                    setFormData(prev => ({ ...prev, email: e.target.value }))
                }
                error={formErrors.email}
                id={formIds.email}
            />
            <Button
                label="Send"
                type="submit"
                className="w-full bg-red-100 px-20 py-4 text-xl font-bold uppercase hover:bg-red-50"
            />
        </form>
    );
};

export default ForgotPassword;

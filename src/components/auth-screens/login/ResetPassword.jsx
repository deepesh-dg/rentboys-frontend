import React from "react";
import Button from "../../Button";
import Input from "../../common/Input/Input";
import { PasswordIcon } from "../../icons/outline";
import { useLoginScreenSteps } from "@/state";
import { useLogin } from "@/state/context";
import { LoginScreenSteps } from "@/constants";

const ResetPassword = () => {
    const { setScreen } = useLoginScreenSteps();
    const { data, errors, formIds, resetPassword, setData } = useLogin();

    return (
        <form
            onSubmit={async e => {
                const status = await resetPassword(e);
                if (status) setScreen(LoginScreenSteps.LOGIN);
            }}
            className="z-1 flex w-full max-w-xl flex-col items-center gap-y-6 rounded-2xl border border-dark bg-black/80 px-4 py-12 text-white md:px-16"
            style={{
                boxShadow: "0px 4px 50.6px 0px #D8000040",
            }}
        >
            <h1 className="font-fira-sans text-2xl font-normal text-white">
                Reset Password
            </h1>
            <div className="flex flex-col items-center">
                <p className="text-center text-gray-200">
                    Enter the email address associated with the Rentboys
                </p>
                <span className="my-2 inline-block h-1 w-20 bg-red-50"></span>
            </div>
            <Input
                icon={PasswordIcon}
                type="password"
                placeholder="New Password"
                value={data.password}
                onChange={e =>
                    setData(prev => {
                        prev.password = e.target.value;
                    })
                }
                error={errors.password}
                id={formIds.password}
            />
            <Input
                icon={PasswordIcon}
                type="password"
                placeholder="Confirm Password"
                value={data.confirm_password}
                onChange={e =>
                    setData(prev => {
                        prev.confirm_password = e.target.value;
                    })
                }
                error={errors.confirm_password}
                id={formIds.confirm_password}
            />
            <Button
                label="Submit"
                type="submit"
                className="w-full bg-red-100 px-20 py-4 text-xl font-bold uppercase hover:bg-red-50"
            />
        </form>
    );
};

export default ResetPassword;

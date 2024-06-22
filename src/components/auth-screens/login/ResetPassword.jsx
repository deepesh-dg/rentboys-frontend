import React from "react";
import Button from "../../Button";
import Input from "../../common/Input/Input";
import { PasswordIcon } from "../../icons/outline";

const ResetPassword = () => {
    return (
        <div
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
            />
            <Input
                icon={PasswordIcon}
                type="password"
                placeholder="Confirm Password"
            />
            <Button
                label="Submit"
                className="w-full bg-red-100 px-20 py-4 text-xl font-bold uppercase hover:bg-red-50"
            />
        </div>
    );
};

export default ResetPassword;

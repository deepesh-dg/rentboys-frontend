import React from "react";
import Button from "@/components/Button";
import { MailIcon } from "@/components/icons/outline";
import Input from "@/components/common/Input/Input";

const ForgotPassword = () => {
    return (
        <div className="z-1 flex w-full max-w-xl flex-col items-center gap-y-6 rounded-2xl border border-dark bg-black/80 px-4 py-12 text-white shadow-sm md:px-16">
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
            />
            <Button
                label="Send"
                className="w-full bg-red-100 px-20 py-4 text-xl font-bold uppercase hover:bg-red-50"
            />
        </div>
    );
};

export default ForgotPassword;

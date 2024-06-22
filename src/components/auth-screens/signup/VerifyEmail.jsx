import React from "react";
import Button from "../../Button";
import { Link } from "react-router-dom";
import { PasswordIcon } from "../../icons/outline";
import Input from "../../common/Input/Input";

const VerifyEmail = () => {
    return (
        <div
            className="z-1 flex w-full max-w-xl flex-col items-center gap-y-6 rounded-2xl border border-dark bg-black/80 px-4 py-12 text-white md:px-16"
            style={{
                boxShadow: "0px 4px 50.6px 0px #D8000040",
            }}
        >
            <h1 className="font-fira-sans text-2xl font-normal text-white">
                OTP Verification
            </h1>
            <div className="flex flex-col items-center">
                <p className="text-center text-gray-200">
                    We have sent a One-Time Password (OTP) to your registered
                    email address. Please check your inbox (and spam folder,
                    just in case!) for the email containing the OTP.
                </p>
                <span className="my-2 inline-block h-1 w-20 bg-red-50"></span>
            </div>
            <Input icon={PasswordIcon} type="text" placeholder="OTP" />
            <Button
                label="Send"
                className="w-full bg-red-100 px-20 py-4 text-xl font-bold uppercase hover:bg-red-50"
            />
            <div>
                00:30{" "}
                <Link to="#">
                    <span className="text-base font-bold text-red-50 underline">
                        Resend OTP
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default VerifyEmail;

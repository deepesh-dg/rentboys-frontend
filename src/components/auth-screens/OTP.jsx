import React from "react";
import Button from "../Button";
import { useForm, useState } from "@/hooks";
import InputOTP from "../common/Input/InputOTP";

/**
 * timeout in ms
 * default is 30000
 * @param {{
 *     onClickResend: () => Promise<void>;
 *     onSubmit: (e: any) => Promise<void>;
 *     timeout: number;
 *     formMessage: string;
 *     formError: string;
 *     error: string;
 *     loader: boolean;
 *     value: string;
 *     onChange: (value: string) => void;
 * }} param0
 * @returns
 */
const OTP = ({
    onClickResend,
    onSubmit,
    timeout = 30000,
    formMessage,
    formError,
    error,
    loader,
    value,
    onChange,
}) => {
    const [timeRemaining, setTimeRemaining] = useState(timeout);

    React.useEffect(() => {
        if (timeRemaining <= 0) return;

        const timer = setTimeout(() => {
            setTimeRemaining(prev => prev - 1000);
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeRemaining]);

    const minutes = Math.floor(timeRemaining / 1000 / 60);
    const seconds = (timeRemaining / 1000) % 60;

    const canResend = timeRemaining <= 0;

    return (
        <form
            onSubmit={onSubmit}
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
            {formMessage && (
                <div className="text-center text-green-600">{formMessage}</div>
            )}
            {(error || formError) && (
                <div className="text-red-50">{error || formError}</div>
            )}
            <InputOTP value={value} onChange={onChange} />
            <Button
                label="Send"
                type="submit"
                className="w-full bg-red-100 px-20 py-4 text-xl font-bold uppercase hover:bg-red-50"
            />
            <div>
                {minutes > 9 ? minutes : `0${minutes}`}:
                {seconds > 9 ? seconds : `0${seconds}`}
                &nbsp;
                <button
                    type="button"
                    onClick={async () => {
                        if (timeRemaining <= 0) {
                            if (onClickResend) {
                                await onClickResend();
                            }
                            setTimeRemaining(() => timeout);
                        }
                    }}
                >
                    <span
                        className={`text-base font-bold ${
                            canResend ? "text-red-50 underline" : ""
                        }`}
                    >
                        Resend OTP
                    </span>
                </button>
            </div>
        </form>
    );
};

export default OTP;

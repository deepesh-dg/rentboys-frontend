import React from "react";
import Button from "../Button";
import { useState } from "@/hooks";
import InputOTP from "../common/Input/InputOTP";
import Form from "./Form";

/**
 * timeout in ms
 * default is 30000
 * @param {{
 *     onClickResend: () => Promise<void>;
 *     onSubmit: (e: any) => Promise<void>;
 *     timeout: number;
 *     formError: string;
 *     error: string;
 *     value: string;
 *     onChange: (value: string) => void;
 * }} param0
 * @returns
 */
const OTP = ({
    onClickResend,
    onSubmit,
    timeout = 30000,
    formError,
    error,
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
        <Form
            onSubmit={onSubmit}
            title="OTP Verification"
            description="We have sent a One-Time Password (OTP) to your registered email address. Please check your inbox (and spam folder, just in case!) for the email containing the OTP."
            maxWidth="xl"
            error={error || formError}
        >
            <InputOTP value={value} onChange={onChange} />
            <Button
                children="Send"
                type="submit"
                size="md"
                theme="red"
                className="uppercase font-bold rounded-xl text-xl w-full mt-1"
            />
            <div>
                {minutes > 0 || seconds > 0 ? (
                    <>
                        {minutes > 9 ? minutes : `0${minutes}`}:
                        {seconds > 9 ? seconds : `0${seconds}`}
                    </>
                ) : null}
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
                        className={`text-base font-bold ${canResend ? "text-red-50 underline" : ""
                            }`}
                    >
                        Resend OTP
                    </span>
                </button>
            </div>
        </Form>
    );
};

export default OTP;

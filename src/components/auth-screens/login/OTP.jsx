import React from "react";
import OtpScreen from "../OTP";
import { useLogin } from "@/state/context";
import { LoginScreenSteps } from "@/constants";
import { useLoginScreenSteps } from "@/state";

export default function OTP() {
    const { setScreen } = useLoginScreenSteps();
    const { resendOtp, submitOtp, data, errors, setData, loader } = useLogin();

    return (
        <OtpScreen
            onClickResend={resendOtp}
            onSubmit={async e => {
                const status = await submitOtp(e);
                if (status) setScreen(LoginScreenSteps.RESET_PASSWORD);
            }}
            formError={errors.form}
            error={errors.otp}
            value={data.otp}
            onChange={v =>
                setData(prev => {
                    prev.otp = v;
                })
            }
            loader={loader}
        />
    );
}

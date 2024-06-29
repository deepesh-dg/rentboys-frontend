import React from "react";
import { useSignupScreenSteps } from "@/state";
import { useSignup } from "@/state";
import { SignupScreenSteps } from "@/constants";
import OTP from "../OTP";

const VerifyEmailOTP = () => {
    const { setScreen } = useSignupScreenSteps();
    const { data, errors, setData, emailVerifyOtpMatch, emailVerifyResendOtp } =
        useSignup();

    return (
        <OTP
            onClickResend={emailVerifyResendOtp}
            onSubmit={async e => {
                const status = await emailVerifyOtpMatch(e);
                if (status) setScreen(SignupScreenSteps.CHOOSE_USER_TYPE);
            }}
            formError={errors.form}
            error={errors.otp}
            value={data.otp}
            onChange={v =>
                setData({
                    otp: v,
                })
            }
        />
    );
};

export default VerifyEmailOTP;

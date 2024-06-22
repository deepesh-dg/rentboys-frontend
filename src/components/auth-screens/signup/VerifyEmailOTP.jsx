import React from "react";
import { useSignupScreenSteps } from "@/state";
import { useSignup } from "@/state/context";
import { SignupScreenSteps } from "@/constants";
import OTP from "../OTP";

const VerifyEmailOTP = () => {
    const { setScreen } = useSignupScreenSteps();
    const {
        data,
        errors,
        setData,
        loader,
        emailVerifyOtpMatch,
        emailVerifyResendOtp,
    } = useSignup();

    return (
        <OTP
            onClickResend={emailVerifyResendOtp}
            onSubmit={async e => {
                // const status = await emailVerifyOtpMatch(e);
                const status = true;
                if (status) setScreen(SignupScreenSteps.CHOOSE_USER_TYPE);
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
};

export default VerifyEmailOTP;

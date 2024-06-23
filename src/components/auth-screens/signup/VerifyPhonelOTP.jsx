import React from "react";
import { useSignup } from "@/state/context";
import OTP from "../OTP";

const VerifyPhonelOTP = () => {
    const {
        data,
        errors,
        setData,
        loader,
        phoneVerifyOtpMatch,
        phoneVerifyResendOtp,
    } = useSignup();

    return (
        <OTP
            onClickResend={phoneVerifyResendOtp}
            onSubmit={async e => {
                await phoneVerifyOtpMatch(e);
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

export default VerifyPhonelOTP;

import React from "react";
import { useSignup } from "@/state/context";
import OTP from "../OTP";
import { useNavigate } from "react-router-dom";

const VerifyPhonelOTP = () => {
    const {
        data,
        errors,
        setData,
        loader,
        phoneVerifyOtpMatch,
        phoneVerifyResendOtp,
    } = useSignup();

    const navigate = useNavigate();

    return (
        <OTP
            onClickResend={phoneVerifyResendOtp}
            onSubmit={async e => {
                await phoneVerifyOtpMatch(e);
                navigate("/create-profile");
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

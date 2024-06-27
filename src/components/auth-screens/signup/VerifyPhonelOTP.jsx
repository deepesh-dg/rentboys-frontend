import React from "react";
import { useSignup } from "@/state/context";
import OTP from "../OTP";
import { useNavigate } from "react-router-dom";

const VerifyPhonelOTP = () => {
    const { data, errors, setData, phoneVerifyOtpMatch, phoneVerifyResendOtp } =
        useSignup();

    const navigate = useNavigate();

    return (
        <OTP
            onClickResend={phoneVerifyResendOtp}
            onSubmit={async e => {
                const status = await phoneVerifyOtpMatch(e);
                if (status) navigate("/create-profile");
            }}
            formError={errors.form}
            error={errors.otp}
            value={data.otp}
            onChange={v =>
                setData(prev => {
                    prev.otp = v;
                })
            }
        />
    );
};

export default VerifyPhonelOTP;

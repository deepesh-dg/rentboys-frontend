import React from "react";
import OtpScreen from "../OTP";
import api from "@/services";

export default function OTP() {
    const onClickResend = async () => {
        await api.auth.forgotPasswordOtpResend();
    };

    const onSubmit = async otp => {};

    return <OtpScreen onClickResend={onClickResend} onSubmit={onSubmit} />;
}

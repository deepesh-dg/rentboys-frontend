import React from "react";
import OtpScreen from "@/components/auth-screens/OTP";
import { useLogin } from "@/state";

export default function OTP({ setScreen }) {
    const { resendOtp, submitOtp, data, errors, setData } = useLogin();

    return (
        <OtpScreen
            onClickResend={resendOtp}
            onSubmit={async e => {
                const status = await submitOtp(e);
                if (status) setScreen("reset_password");
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
}

import React from "react";
import OtpScreen from "@/components/auth-screens/OTP";
import { useLogin } from "@/state/context";
import { useGlobalLoader } from "@/hooks";

export default function OTP({ setScreen }) {
    const { resendOtp, submitOtp, data, errors, setData, loader } = useLogin();

    useGlobalLoader(loader);

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
                setData(prev => {
                    prev.otp = v;
                })
            }
            loader={loader}
        />
    );
}

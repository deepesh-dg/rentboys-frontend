import { LoginScreenSteps } from "@/constants";
import { useLoginScreenSteps } from "@/store";
import React, { useEffect } from "react";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import OTP from "./OTP";
import ResetPassword from "./ResetPassword";

export default function LoginScreens() {
    const { screen, setScreen } = useLoginScreenSteps();

    useEffect(
        () => () => {
            setScreen(LoginScreenSteps.LOGIN);
        },
        []
    );

    switch (screen) {
        case LoginScreenSteps.LOGIN:
            return <Login />;
        case LoginScreenSteps.FORGOT_PASSWORD:
            return <ForgotPassword />;
        case LoginScreenSteps.FORGOT_PASSWORD_OTP:
            return <OTP />;
        case LoginScreenSteps.RESET_PASSWORD:
            return <ResetPassword />;
        default:
            return null;
    }
}

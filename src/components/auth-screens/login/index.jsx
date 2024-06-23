import { LoginScreenSteps } from "@/constants";
import { useLoginScreenSteps } from "@/state";
import React, { useEffect } from "react";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import OTP from "./OTP";
import ResetPassword from "./ResetPassword";
import { LoginProvider, useLogin } from "@/state/context";

export default function LoginScreens() {
    const { screen, setScreen } = useLoginScreenSteps();
    const { resetForm } = useLogin();

    useEffect(
        () => () => {
            setScreen(LoginScreenSteps.LOGIN);
        },
        []
    );

    useEffect(() => resetForm, [resetForm]);

    return (
        <LoginProvider>
            {(() => {
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
            })()}
        </LoginProvider>
    );
}

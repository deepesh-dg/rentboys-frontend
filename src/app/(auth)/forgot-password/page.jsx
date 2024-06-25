import { useState } from "@/hooks";
import React from "react";
import ForgotPassword from "./ForgotPassword";
import { LoginProvider } from "@/state/context";
import OTP from "./OTP";
import ResetPassword from "./ResetPassword";

export default function Page() {
    /** @type {ReturnType<typeof useState<"forgot_password" | "otp" | "reset_password">>} */
    const [screen, setScreen] = useState("forgot_password");

    return (
        <LoginProvider>
            {(() => {
                switch (screen) {
                    case "forgot_password":
                        return <ForgotPassword setScreen={setScreen} />;
                    case "otp":
                        return <OTP setScreen={setScreen} />;
                    case "reset_password":
                        return <ResetPassword />;
                    default:
                        return null;
                }
            })()}
        </LoginProvider>
    );
}

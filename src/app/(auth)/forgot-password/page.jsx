import { useState } from "@/hooks";
import React, { useEffect } from "react";
import ForgotPassword from "./ForgotPassword";
import OTP from "./OTP";
import ResetPassword from "./ResetPassword";

export default function Page() {
    /** @type {ReturnType<typeof useState<"forgot_password" | "otp" | "reset_password">>} */
    const [screen, setScreen] = useState(
        sessionStorage.getItem("forgot-password-screen") || "forgot_password"
    );

    useEffect(() => {
        sessionStorage.setItem("forgot-password-screen", screen);
    }, [screen]);

    switch (screen) {
        case "forgot_password":
            return <ForgotPassword setScreen={setScreen} />;
        case "otp":
            return <OTP setScreen={setScreen} />;
        case "reset_password":
            return <ResetPassword setScreen={setScreen} />;
        default:
            return null;
    }
}

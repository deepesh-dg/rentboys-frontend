import { SignupScreenSteps } from "@/constants";
import { useSignupScreenSteps } from "@/store";
import React, { useEffect } from "react";
import Signup from "./Signup";
import VerifyEmail from "./VerifyEmail";

export default function SignupScreens() {
    const { screen, setScreen } = useSignupScreenSteps();

    useEffect(
        () => () => {
            setScreen(SignupScreenSteps.SIGNUP);
        },
        []
    );

    switch (screen) {
        case SignupScreenSteps.SIGNUP:
            return <Signup />;
        case SignupScreenSteps.VERIFY_EMAIL:
            return <VerifyEmail />;
        default:
            return null;
    }
}

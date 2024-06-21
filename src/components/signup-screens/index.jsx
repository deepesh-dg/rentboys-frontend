import { SignupScreenSteps } from "@/constants";
import { useSignupScreenSteps } from "@/store";
import React, { useEffect } from "react";
import Signup from "./Signup";

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
        default:
            return null;
    }
}

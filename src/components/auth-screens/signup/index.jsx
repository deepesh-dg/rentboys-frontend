import { SignupScreenSteps } from "@/constants";
import { useSignupScreenSteps } from "@/state";
import React, { useEffect } from "react";
import Signup from "./Signup";
import VerifyEmailOTP from "./VerifyEmailOTP";
import { SignupProvider, useSignup } from "@/state/context";
import ChooseUserType from "./ChooseUserType";
import Location from "./Location";
import UploadId from "./UploadId";
import PhoneNumber from "./PhoneNumber";
import VerifyPhonelOTP from "./VerifyPhonelOTP";

export default function SignupScreens() {
    const { screen, setScreen } = useSignupScreenSteps();
    const { resetForm, resetPasswordField } = useSignup();

    useEffect(
        () => () => {
            setScreen(SignupScreenSteps.SIGNUP);
        },
        []
    );

    useEffect(() => resetForm, [resetForm]);
    useEffect(() => resetPasswordField, [screen, resetPasswordField]);

    return (
        <SignupProvider>
            {(() => {
                switch (screen) {
                    case SignupScreenSteps.SIGNUP:
                        return <Signup />;
                    case SignupScreenSteps.VERIFY_EMAIL:
                        return <VerifyEmailOTP />;
                    case SignupScreenSteps.CHOOSE_USER_TYPE:
                        return <ChooseUserType />;
                    case SignupScreenSteps.SELECT_LOCATION:
                        return <Location />;
                    case SignupScreenSteps.UPLOAD_ID:
                        return <UploadId />;
                    case SignupScreenSteps.PHONE_NUMBER:
                        return <PhoneNumber />;
                    case SignupScreenSteps.VERIFY_PHONE:
                        return <VerifyPhonelOTP />;
                    default:
                        return null;
                }
            })()}
        </SignupProvider>
    );
}

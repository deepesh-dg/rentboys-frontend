import { SignupScreenSteps } from "@/constants";
import { useSignupScreenSteps } from "@/state";
import React, { useEffect } from "react";
import Signup from "./Signup";
import VerifyEmailOTP from "./VerifyEmailOTP";
import { SignupProvider } from "@/state/context";
import ChooseUserType from "./ChooseUserType";
import Location from "./Location";
import UploadId from "./UploadId";

export default function SignupScreens() {
    const { screen, setScreen } = useSignupScreenSteps();

    useEffect(
        () => () => {
            setScreen(SignupScreenSteps.SIGNUP);
        },
        []
    );

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
                    default:
                        return null;
                }
            })()}
        </SignupProvider>
    );
}

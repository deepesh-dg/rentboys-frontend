import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import BG_IMG from "@/assets/img/login-bg.png";
import { useLogin } from "@/state";
import { useSignup } from "@/state";
import { useGlobalLoader } from "@/hooks";

export default function AuthLayout() {
    const { loader, resetForm, resetFormErrors } = useLogin();
    const {
        loader: signupLoader,
        resetForm: signupResetForm,
        resetFormErrors: signupResetFormErrors,
    } = useSignup();

    useGlobalLoader(loader || signupLoader);

    useEffect(() => {
        resetFormErrors();
        signupResetFormErrors();
        return () => {
            resetForm();
            signupResetForm();
        };
    }, []);

    return (
        <div className="relative flex min-h-screen w-full flex-col items-center justify-center py-20">
            <div
                className="absolute inset-0 h-full w-full bg-cover bg-no-repeat blur-[9px]"
                style={{
                    backgroundImage: `url(${BG_IMG})`,
                }}
            />
            <Outlet />
        </div>
    );
}

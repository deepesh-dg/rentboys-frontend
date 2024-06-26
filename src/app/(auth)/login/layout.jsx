import { LoginProvider } from "@/state/context";
import React from "react";
import { Outlet } from "react-router-dom";

const LoginLayout = () => {
    return (
        <LoginProvider>
            <Outlet />
        </LoginProvider>
    );
};

export default LoginLayout;

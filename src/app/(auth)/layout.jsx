import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/state";
import BG_IMG from "@/assets/img/login-bg.png";

export default function AuthLayout() {
    const { isAuthenticated } = useAuth();

    return isAuthenticated ? (
        <Navigate to="/" />
    ) : (
        <div className="relative flex min-h-screen w-full flex-col items-center justify-center py-20 backdrop-blur-sm">
            <div
                className="absolute inset-0 h-full w-full blur-sm bg-cover bg-no-repeat"
                style={{
                    backgroundImage: `url(${BG_IMG})`,
                }}
            />
            <Outlet />
        </div>
    );
}

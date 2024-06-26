import React from "react";
import { Outlet } from "react-router-dom";
import BG_IMG from "@/assets/img/login-bg.png";

export default function AuthLayout() {
    return (
        <div className="relative flex min-h-screen w-full flex-col items-center justify-center py-20 backdrop-blur-sm">
            <div
                className="absolute inset-0 h-full w-full bg-cover bg-no-repeat blur-sm"
                style={{
                    backgroundImage: `url(${BG_IMG})`,
                }}
            />
            <Outlet />
        </div>
    );
}

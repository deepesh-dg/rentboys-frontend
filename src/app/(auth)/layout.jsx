import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function AuthLayout() {
    let auth = false;

    return auth ? (
        <Navigate to="/" />
    ) : (
        <div>
            AuthLayout
            <Outlet />
        </div>
    );
}

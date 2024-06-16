import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedLayout() {
    let auth = true;

    return auth ? (
        <div>
            ProtectedLayout
            <Outlet />
        </div>
    ) : (
        <Navigate to="/login" />
    );
}

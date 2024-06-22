import { useAuth } from "@/state";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedLayout() {
    const { isAuthenticated } = useAuth();

    return isAuthenticated ? (
        <div>
            ProtectedLayout
            <Outlet />
        </div>
    ) : (
        <Navigate to="/login" />
    );
}

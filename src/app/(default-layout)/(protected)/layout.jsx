import { useAuth } from "@/state";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedLayout() {
    const { isAuthenticated } = useAuth();

    return isAuthenticated ? (
        <div>
            <Outlet />
        </div>
    ) : (
        <Navigate to="/login" />
    );
}

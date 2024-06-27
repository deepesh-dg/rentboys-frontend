import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/state";

/**
 *
 * @param {{children?: React.FC, redirectTo?: string}} param0
 * @returns
 */
export default function ProtectedRoutes({ children, redirectTo = "/login" }) {
    const { isAuthenticated } = useAuth();

    return isAuthenticated ? (
        children || <Outlet />
    ) : (
        <Navigate to={redirectTo} />
    );
}

import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/state";
import { UserTypeId } from "@/constants";

/**
 *
 * @param {{children?: React.FC, redirectTo?: string, allowedRoleIds?: (typeof UserTypeId[keyof typeof UserTypeId])[]}} param0
 * @returns
 */
export default function ProtectedRoutes({
    children,
    redirectTo = "/login",
    allowedRoleIds,
}) {
    const { isAuthenticated, user } = useAuth();

    return isAuthenticated &&
        (allowedRoleIds
            ? allowedRoleIds?.includes(user?.user_role_id)
            : true) ? (
        children || <Outlet />
    ) : (
        <Navigate to={redirectTo} />
    );
}

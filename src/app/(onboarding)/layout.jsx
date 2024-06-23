import { useAuth } from "@/state";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function OnboardingLayout() {
    const { isAuthenticated } = useAuth();

    return isAuthenticated ? <Outlet /> : <Navigate to="/signup" />;
}

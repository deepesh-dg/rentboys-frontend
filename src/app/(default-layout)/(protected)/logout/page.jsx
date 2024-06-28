import { useAuth } from "@/state";
import React, { useEffect } from "react";

export default function Logout() {
    const { logout } = useAuth();

    useEffect(logout, [logout]);
    return null;
}

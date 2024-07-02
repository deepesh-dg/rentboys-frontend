import api from "@/services";
import { useAuth } from "@/state";
import React, { useEffect } from "react";

export default function Logout() {
    const { logout } = useAuth();

    useEffect(() => {
        api.auth.logout().then(logout);
    }, [logout]);
    return null;
}

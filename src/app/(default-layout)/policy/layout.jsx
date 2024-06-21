import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { PasswordIcon } from "@/components/icons/outline";
import NavHeading from "./components/NavHeading";


export default function Layout({ children }) {
    const navItems = [
        {
            icon: PasswordIcon,
            name: (
                <span className="inline-flex items-center gap-2">
                    Legal
                </span>
            ),
            href: "/about/legal",
        },
    ]

    return (
        <div className="flex">
            <div className="w-1/4">
                <ul>s
                    {navItems.map((item) => (
                        <NavHeading item={item} />
                    ))}
                </ul>
            </div>
            <div className="w-3/4">
                <Outlet />
                {children}
            </div>
        </div>
    );
}


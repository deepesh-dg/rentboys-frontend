import React from "react";
import { Outlet } from "react-router-dom";
import { PasswordIcon } from "@/components/icons/outline";
import NavHeading from "./_components/NavHeading";

export default function PolicyLayout() {
    const navItems = [
        {
            icon: PasswordIcon,
            name: <span className="inline-flex items-center gap-2">Legal</span>,
            href: "/about/legal",
        },
    ];

    return (
        <div className="flex">
            <div className="w-1/4">
                <ul className="text-white">
                    {/* {navItems.map(item => (
                        <NavHeading item={item} />
                    ))} */}
                    <li>Contact us</li>
                    <li>Pricacy policy</li>
                    <li>Contact us</li>
                    <li>Pricacy policy</li>
                    <li>Pricacy policy</li>
                </ul>
            </div>
            <div className="w-3/4">
                <Outlet />
            </div>
        </div>
    );
}

import React from "react";
import { Outlet } from "react-router-dom";
import NavHeading from "./_components/NavHeading";

export default function PolicyLayout() {
    const navItems = [
        { name: "Contact Us", href: "/contact" },
        { name: "Terms of Service", href: "/terms-of-service" },
        { name: "Legal", href: "/legal" },
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Cookie Policy", href: "/cookie-policy" },
        { name: "DMCA Notice", href: "/DMCA-notice" },
    ];

    return (
        <>
            <div className="container flex-grow text-white">
                <div className="flex items-start gap-4 md-down:flex-wrap">
                    <div className="w-full shrink-0 rounded-md bg-gray-100 py-4 md:max-w-[210px]">
                        <h2 className="mx-4 border-b border-gray-50 pb-1 text-xl font-medium uppercase tracking-widest">
                            About
                        </h2>
                        <ul className="mt-3 flex flex-col space-y-2 text-base [&>li]:px-4">
                            {navItems.map(item => (
                                <NavHeading
                                    key={item.href}
                                    name={item.name}
                                    href={item.href}
                                />
                            ))}
                        </ul>
                    </div>
                    <Outlet />
                </div>
            </div>
        </>
    );
}

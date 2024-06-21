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
            <div className="container text-white">
                <div className="flex items-start gap-4 md-down:flex-wrap">
                    <div className="w-full shrink-0 md:max-w-[210px] py-4 bg-gray-100 rounded-md">
                        <h2 className="text-xl font-medium uppercase pb-1 mx-4 border-b border-gray-50 tracking-widest">About</h2>
                        <ul className="text-base mt-3 space-y-2 flex flex-col [&>li]:px-4">
                            {navItems.map((item) => (
                                <NavHeading key={item.href} name={item.name} href={item.href} />
                            ))}
                        </ul>
                    </div>
                    <Outlet />
                </div>
            </div>
        </>
    );
}

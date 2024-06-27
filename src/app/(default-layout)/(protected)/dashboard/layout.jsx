import React, { useState } from "react";
import { navLinks } from "@/utils/navLinks";
import Icons from "@/components/icons/Component";
import { Link } from "react-router-dom";
import { ArrowDownIcon } from "@/components/icons/outline";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
    const [openSubMenus, setOpenSubMenus] = useState({});

    const toggleSubMenu = index => {
        setOpenSubMenus(prevState => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };
    return (
        <div className="px-4">
            <div className="grid grid-cols-6 gap-y-6">
                <div className="col-span-6 rounded-xl bg-gray-50 md:col-span-1">
                    <div className="flex flex-col py-6 text-white">
                        {navLinks.map((link, index) => (
                            <div key={index}>
                                <div
                                    className={`flex items-center justify-between p-4 ${index !== navLinks.length - 1 ? "border-b border-gray-200/10" : ""}`}
                                >
                                    <div className="flex items-center gap-x-2">
                                        <Icons
                                            src={link.icon}
                                            className="w-6"
                                        />
                                        {link.hasArrow ? (
                                            <span
                                                onClick={() =>
                                                    toggleSubMenu(index)
                                                }
                                                className="cursor-pointer"
                                            >
                                                {link.name}
                                            </span>
                                        ) : (
                                            <Link to={link.route}>
                                                {link.name}
                                            </Link>
                                        )}
                                    </div>
                                    {link.hasArrow && (
                                        <span
                                            onClick={() => toggleSubMenu(index)}
                                            className="cursor-pointer"
                                        >
                                            <Icons
                                                src={ArrowDownIcon}
                                                className="w-4"
                                            />
                                        </span>
                                    )}
                                </div>
                                {link.subMenu.length > 0 &&
                                    openSubMenus[index] && (
                                        <div className="border-b border-gray-50 px-12 py-2">
                                            <ul className="[&>li]:mt-2">
                                                {link.subMenu.map(
                                                    (subLink, subIndex) => (
                                                        <li key={subIndex}>
                                                            <Link
                                                                to={`${link.route}/${subLink.toLowerCase().replace(/ /g, "-")}`}
                                                            >
                                                                {subLink}
                                                            </Link>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-span-6 md:col-span-5">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

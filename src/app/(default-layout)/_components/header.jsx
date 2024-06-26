import React, { useState, useEffect, useRef } from "react";
import { Link, Navigate } from "react-router-dom";
import {
    ArrowDownIcon,
    BellIcon,
    HamburgerMenuIcon,
    LogoIcon,
    MessageIcon,
    UserRoundedIcon,
} from "@/components/icons/outline";
import Icons from "@/components/icons/Component";
import SearchInput from "@/components/common/Input/SearchInput";
import Button from "@/components/Button";
import { navLinks } from "@/utils/navLinks";
import { UserIcon } from "@/components/icons/solid";

const navMenu = [
    { text: "Home", href: "/" },
    { text: "Search", href: "/" },
    { text: "Live Cams", href: "/" },
    { text: "Videos", href: "/" },
];
import { useAuth } from "@/state";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openSubMenus, setOpenSubMenus] = useState({});
    const sidebarRef = useRef(null);
    const [searchQuery, setSearchQuery] = useState("");
    const { isAuthenticated } = useAuth();

    const handleOnChange = e => {
        setSearchQuery(e.target.value);
    };

    const handleSearch = () => {
        console.log("Search Query:", searchQuery);
    };

    const toggleSubMenu = index => {
        setOpenSubMenus(prevState => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    const handleToggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    const handleClickOutside = event => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.body.style.overflow = "auto";
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <>
            <nav className="container bg-dark py-10">
                <div className="flex flex-col justify-between gap-x-2 gap-y-6 md:flex-row md:items-center md:gap-x-6">
                    <div className="flex items-center gap-x-3">
                        <div
                            className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-50 p-2 md:hidden"
                            onClick={handleToggleMenu}
                        >
                            <Icons src={HamburgerMenuIcon} className="w-8" />
                        </div>
                        <Link to="/">
                            <Icons src={LogoIcon} className="w-44" />
                        </Link>
                    </div>
                    <SearchInput
                        searchQuery={searchQuery}
                        handleOnChange={handleOnChange}
                        handleSearch={handleSearch}
                    />
                    <div className={`flex w-full items-center md:w-auto`}>
                        <ul className="flex w-full items-center justify-between gap-x-5 py-4 font-medium text-white md:flex-row">
                            {navMenu.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        to={item.href}
                                        className="text-md active:before:scale-x- relative block whitespace-nowrap px-2 py-0 text-white/70 before:absolute before:bottom-[-6px] before:left-0 before:h-[2px] before:w-full before:scale-x-0 before:transform before:bg-red-50 before:transition-transform before:duration-[0.5s] before:ease-[ease] before:content-[''] hover:before:scale-x-100 active:before:transform"
                                    >
                                        {item.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="hidden md:block">
                            {isAuthenticated ? (
                                <div className="hidden xl:block">
                                    <div className="ml-5 flex items-center gap-x-6">
                                        <Icons src={BellIcon} className="w-6" />
                                        <Icons
                                            src={MessageIcon}
                                            className="w-6"
                                        />
                                        <div className="flex items-end gap-x-2">
                                            <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border-2 border-white">
                                                <Icons
                                                    src={UserRoundedIcon}
                                                    className="mx-auto w-5"
                                                />
                                            </div>
                                            <Icons
                                                src={ArrowDownIcon}
                                                className="mx-auto w-5"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="ms-4 flex items-center justify-between gap-x-4">
                                    <Button
                                        href="/login"
                                        label="Login"
                                        variant="outlined"
                                        size="sm"
                                    />
                                    <Button
                                        href="/signup"
                                        label="Sign up"
                                        variant="colored"
                                        size="sm"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Sidebar */}
            <div
                ref={sidebarRef}
                className={`fixed left-0 top-0 z-60 h-screen max-h-screen w-64 transform overflow-y-auto bg-gray-100 transition-transform ${
                    isMenuOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="mx-4 pt-12">
                    <div className="flex items-center gap-x-2">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-red-50 bg-black">
                            <Icons src={UserIcon} className="w-8" />
                        </div>
                        <p className="text-white">GuestUser4214</p>
                    </div>
                    <div className="mt-4 flex items-center justify-between gap-x-4">
                        <Button
                            href="/login"
                            label="Login"
                            variant="colored"
                            size="sm"
                        />
                        <Button
                            href="/signup"
                            label="Sign up"
                            variant="outlined"
                            size="sm"
                        />
                    </div>
                    <div className="flex flex-col py-6 text-white">
                        {navLinks.map((link, index) => (
                            <div key={index}>
                                <div
                                    className={`flex items-center justify-between p-4 ${index !== navLinks.length - 1 ? "border-b border-gray-50" : ""}`}
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
            </div>
        </>
    );
}

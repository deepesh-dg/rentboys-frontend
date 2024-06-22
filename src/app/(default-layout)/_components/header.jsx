import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowDownIcon, BellIcon, HamburgerMenuIcon, LogoIcon, MessageIcon, UserRoundedIcon } from "@/components/icons/outline";
import Icons from "@/components/icons/Component";
import SearchInput from "@/components/common/Input/SearchInput";
import Button from "@/components/Button";
import { navLinks } from '@/utils/navLinks';
import { UserIcon } from "@/components/icons/solid";

const navMenu = [
    { text: 'Home', href: '/' },
    { text: 'Search', href: '/search' },
    { text: 'Live Cams', href: '/live-cams' },
    { text: 'Videos', href: '/videos' },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openSubMenus, setOpenSubMenus] = useState({});
    const sidebarRef = useRef(null);
    const [searchQuery, setSearchQuery] = useState('');

    const handleOnChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearch = () => {
        console.log('Search Query:', searchQuery);
    };

    const toggleSubMenu = (index) => {
        setOpenSubMenus((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    const handleToggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.body.style.overflow = 'auto';
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <>
            <nav className="container bg-dark py-10">
                <div className="flex flex-col md:flex-row gap-y-6 gap-x-2 md:gap-x-6 md:items-center justify-between">
                    <div className="flex items-center gap-x-3">
                        <div className="md:hidden w-10 h-10 p-2 rounded-full border-2 border-gray-50 flex justify-center items-center" onClick={handleToggleMenu}>
                            <Icons src={HamburgerMenuIcon} className="w-8" />
                        </div>
                        <Link to="https://flowbite.com/" className="">
                            <Icons src={LogoIcon} className="w-44" />
                        </Link>
                    </div>
                    <SearchInput
                        searchQuery={searchQuery}
                        handleOnChange={handleOnChange}
                        handleSearch={handleSearch}
                    />
                    <div className={`flex w-full items-center md:w-auto`}>
                        <ul className="flex w-full items-center justify-between font-medium py-4 gap-x-5 text-white md:flex-row">
                            {navMenu.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        to={item.href}
                                        className="text-md whitespace-nowrap text-white/70 relative block py-0 px-2 hover:before:scale-x-100 before:absolute before:left-0 before:bottom-[-6px] before:w-full before:h-[2px] before:bg-red-50 before:transform before:scale-x-0 before:content-[''] before:transition-transform before:duration-[0.5s] before:ease-[ease] active:before:transform active:before:scale-x-"
                                    >
                                        {item.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="xl:block hidden">
                            <div className="flex items-center gap-x-6 ml-5">
                                <Icons src={BellIcon} className="w-6" />
                                <Icons src={MessageIcon} className="w-6" />
                                <div className="flex items-end gap-x-2">
                                    <div className="w-8 h-8 overflow-hidden flex justify-center items-center border-2 border-white rounded-full">
                                        <Icons src={UserRoundedIcon} className="mx-auto w-5" />
                                    </div>
                                    <Icons src={ArrowDownIcon} className="mx-auto w-5" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Sidebar */}
            <div
                ref={sidebarRef}
                className={`fixed z-60 top-0 left-0 h-screen max-h-screen overflow-y-auto w-64 bg-gray-100 transition-transform transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="mx-4 pt-12">
                    <div className="flex gap-x-2 items-center">
                        <div className="w-16 h-16 rounded-full border border-red-50 flex justify-center items-center bg-black">
                            <Icons src={UserIcon} className="w-8" />
                        </div>
                        <p className="text-white">GuestUser4214</p>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <Button
                            label="Login"
                            variant="colored"
                            size="sm"
                        />
                        <Button
                            label="Sign up"
                            variant="outlined"
                            size="sm"
                        />
                    </div>
                    <div className="flex flex-col text-white py-6">
                        {navLinks.map((link, index) => (
                            <div key={index}>
                                <div className={`flex justify-between items-center p-4 ${index !== navLinks.length - 1 ? "border-b border-gray-50" : ""}`}>
                                    <div className="flex items-center gap-x-2">
                                        <Icons src={link.icon} className="w-6" />
                                        {link.hasArrow ? (
                                            <span
                                                onClick={() => toggleSubMenu(index)}
                                                className="cursor-pointer"
                                            >
                                                {link.name}
                                            </span>
                                        ) : (
                                            <Link to={link.route}>{link.name}</Link>
                                        )}
                                    </div>
                                    {link.hasArrow && (
                                        <span onClick={() => toggleSubMenu(index)} className="cursor-pointer">
                                            <Icons src={ArrowDownIcon} className="w-4" />
                                        </span>
                                    )}
                                </div>
                                {link.subMenu.length > 0 && openSubMenus[index] && (
                                    <div className="px-12 py-2 border-b border-gray-50">
                                        <ul className="[&>li]:mt-2 ">
                                            {link.subMenu.map((subLink, subIndex) => (
                                                <li key={subIndex}>
                                                    <Link to={`${link.route}/${subLink.toLowerCase().replace(/ /g, '-')}`}>{subLink}</Link>
                                                </li>
                                            ))}
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




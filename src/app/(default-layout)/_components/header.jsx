import Button from "@/components/Button";
import Image from "@/components/Image";
import LogoImg from "@/assets/img/logo.png";
import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="container bg-dark">
            <div className="flex flex-wrap items-center justify-between py-10">
                <a
                    href="https://flowbite.com/"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <Image src={LogoImg} className="w-10" />
                </a>
                {/* Hamburger menu */}
                <div className="flex items-center md:order-1">
                    <button
                        type="button"
                        data-collapse-toggle="navbar-search"
                        aria-controls="navbar-search"
                        aria-expanded={isMenuOpen}
                        onClick={() => setIsMenuOpen(prev => !prev)}
                        className="me-1 rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                    >
                        <svg
                            className="h-5 w-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                        <span className="sr-only text-white">Toggle menu</span>
                    </button>
                </div>
                <div className="relative hidden flex-1 items-center md:order-1 md:mx-[30px] lg:block lg-only:hidden">
                    <div className="hidde relative md:block">
                        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                            <svg
                                className="h-4 w-4 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                        </div>
                        <div className="flex">
                            <input
                                type="search"
                                id="search-navbar"
                                className="block rounded-bl-lg rounded-tl-lg border border-gray-50 bg-gray-100 p-2 ps-10 text-sm text-white outline-none placeholder:text-white"
                                placeholder="Search in all locations"
                            />
                            <button className="text-md rounded-br-lg rounded-tr-lg bg-red-50 px-[16px] py-[5px] font-medium text-white md:font-medium">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
                {/* Menus */}
                <div
                    className={`order-2 flex w-full flex-col items-center md:w-auto md:flex-row ${isMenuOpen ? "hidden" : "block"}`}
                    id="navbar-search"
                >
                    <ul className="me-[25px] mt-4 flex w-full flex-col items-center gap-x-10 gap-y-4 p-4 font-medium text-white md:mt-0 md:flex-row md:border-0 md:p-0 md-only:hidden">
                        <li>
                            <a
                                href="#"
                                className="text-md text-color-[rgb(255 255 255 / 70%)] active headerMenu px-4md:px-[25px] relative block py-0 opacity-70"
                                aria-current="page"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-md text-color-[rgb(255 255 255 / 70%)] headerMenu px-3px-[25px] relative block py-0 opacity-70"
                            >
                                Search
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-md text-color-[rgb(255 255 255 / 70%)] headerMenu px-3px-[25px] relative block py-0 opacity-70"
                            >
                                Live Cams
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-md text-color-[rgb(255 255 255 / 70%)] headerMenu px-3px-[25px] relative block py-0 opacity-70"
                            >
                                Videos
                            </a>
                        </li>
                    </ul>
                    <div className="flex w-full justify-center space-x-3 md:order-3 md:w-auto md:space-x-0 rtl:space-x-reverse">
                        <Button
                            label="Login"
                            className={
                                "me-2 rounded-[10px] border border-red-50 bg-transparent px-4 py-1 font-medium text-white md:font-medium"
                            }
                            onClick={() => console.log("onlcik")}
                        />
                        <Button
                            label="Register"
                            className={
                                "!bg-red-50 px-4 py-1 font-medium md:font-medium"
                            }
                            onClick={() => console.log("onlcik")}
                        />
                    </div>
                    <div className="relative mt-3 block w-full md:hidden">
                        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                            <svg
                                className="h-4 w-4 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                        </div>
                        <input
                            type="search"
                            id="search-navbar"
                            className="block w-full rounded-lg border border-gray-50 bg-gray-100 p-2 ps-10 text-sm text-white outline-none"
                            placeholder="Search in all locations"
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
}

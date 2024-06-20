import Button from "@/components/Button";
import Image from "@/components/Image";
import LogoImg from "@/assets/img/logo.png";
import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    console.log(isMenuOpen);
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
                        onClick={() => setIsMenuOpen((prev) => !prev)}
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
                <div className="relative flex-1 items-center md:order-1 md:mx-[30px] hidden lg:block lg-only:hidden">
                    <div className="relative hidde md:block">
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
                                className="block text-white rounded-tl-lg rounded-bl-lg placeholder:text-white border border-gray-50 outline-none bg-gray-100 p-2 ps-10 text-sm"
                                placeholder="Search in all locations"
                            />
                            <button className="bg-red-50 text-md rounded-tr-lg rounded-br-lg px-[16px] py-[5px] font-medium text-white md:font-medium" >
                                Search
                            </button>
                        </div>
                    </div>
                </div>
                {/* Menus */}
                <div

                    className={`w-full flex flex-col md:flex-row items-center md:w-auto order-2 ${isMenuOpen ? "hidden" : "block"}`}
                    id="navbar-search"
                >
                    <ul className="w-full md-only:hidden me-[25px] mt-4 flex items-center flex-col gap-x-10 gap-y-4 p-4 font-medium text-white md:mt-0 md:flex-row md:border-0 md:p-0">
                        <li>
                            <a
                                href="#"
                                className="text-md text-color-[rgb(255 255 255 / 70%)] active headerMenu relative block px-4md:px-[25px] py-0 opacity-70"
                                aria-current="page"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-md text-color-[rgb(255 255 255 / 70%)] headerMenu relative block px-3px-[25px] py-0 opacity-70"
                            >
                                Search
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-md text-color-[rgb(255 255 255 / 70%)] headerMenu relative block px-3px-[25px] py-0 opacity-70"
                            >
                                Live Cams
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-md text-color-[rgb(255 255 255 / 70%)] headerMenu relative block px-3px-[25px] py-0 opacity-70"
                            >
                                Videos
                            </a>
                        </li>
                    </ul>
                    <div className="w-full md:w-auto flex justify-center space-x-3 md:order-3 md:space-x-0 rtl:space-x-reverse">
                        <Button
                            label="Login"
                            className={
                                "font-medium md:font-medium me-2 rounded-[10px] border border-red-50 bg-transparent py-1 px-4 text-white"
                            }
                            onClick={() => console.log("onlcik")}
                        />
                        <Button
                            label="Register"
                            className={"font-medium md:font-medium !bg-red-50 py-1 px-4"}
                            onClick={() => console.log("onlcik")}
                        />
                    </div>
                    <div className="relative mt-3 md:hidden block w-full">
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
                            className="block w-full rounded-lg border outline-none border-gray-50 bg-gray-100 p-2 ps-10 text-sm text-white"
                            placeholder="Search in all locations"
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
}

import Button from "@/components/Button";
import Image from "@/components/Image";
import AddOne from "@/assets/img/logo.png";

export default function Header() {
    return (
        <nav className="container bg-dark">
            <div className="mx-auto flex flex-wrap items-center justify-between pb-[28px] pt-[48px]">
                <a
                    href="https://flowbite.com/"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <Image src={AddOne} className="w-10" />
                </a>
                <div className="mx-[30px] flex flex-1 md:order-1">
                    <button
                        type="button"
                        data-collapse-toggle="navbar-search"
                        aria-controls="navbar-search"
                        aria-expanded="false"
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
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
                    <form className="mx-auto w-full">
                        <div className="relative flex rounded-[10px] border border-[#353535]">
                            <input
                                type="search"
                                id="default-search"
                                className="block w-full bg-transparent px-4 py-2 text-sm text-gray-900 focus:border-0 focus:ring-blue-500 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                placeholder="Search here"
                                required
                            />
                            <button
                                type="submit"
                                className="rounded-r-[10px] bg-[#ff0000] px-[15px] py-[11px] text-sm font-medium text-white dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                <svg
                                    width="15px"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    fill="currentcolor"
                                >
                                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                                </svg>
                            </button>
                        </div>
                    </form>

                    <button
                        data-collapse-toggle="navbar-search"
                        type="button"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-transparent hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-search"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="h-5 w-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className="hidden w-full items-center justify-between md:order-2 md:flex md:w-auto"
                    id="navbar-search"
                >
                    <ul className="me-[25px] mt-4 flex flex-col p-4 font-medium text-white md:mt-0 md:flex-row md:border-0 md:p-0">
                        <li>
                            <a
                                href="#"
                                className="text-md text-color-[rgb(255 255 255 / 70%)] active headerMenu relative block px-3 px-[25px] py-0 opacity-70"
                                aria-current="page"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-md text-color-[rgb(255 255 255 / 70%)] headerMenu relative block px-3 px-[25px] py-0 opacity-70"
                            >
                                Search
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-md text-color-[rgb(255 255 255 / 70%)] headerMenu relative block px-3 px-[25px] py-0 opacity-70"
                            >
                                Live Cams
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-md text-color-[rgb(255 255 255 / 70%)] headerMenu relative block px-3 px-[25px] py-0 opacity-70"
                            >
                                Videos
                            </a>
                        </li>
                    </ul>
                    <div className="flex space-x-3 md:order-3 md:space-x-0 rtl:space-x-reverse">
                        <Button
                            label="Login"
                            className={
                                "text-bold me-2 rounded-[10px] border border-[#ff0000] bg-transparent text-white"
                            }
                            onClick={() => console.log("onlcik")}
                        />
                        <Button
                            label="Register"
                            className={"text-bold !bg-[#ff0000]"}
                            onClick={() => console.log("onlcik")}
                        />
                    </div>
                    <div className="relative mt-3 md:hidden">
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
                            type="text"
                            id="search-navbar"
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                            placeholder="Search..."
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
}

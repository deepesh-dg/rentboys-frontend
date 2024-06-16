import React, { useState } from "react";
import TextInput from "@/components/TextInput";

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return (
        <section className="flex min-h-screen items-center justify-center">
            <div className="px-md mx-auto my-[30px] w-full max-w-[600px]">
                <div className="bg-[rgba(0, 0, 0, 0.55)] rounded-[20px] border border-[#303030] px-[92px] py-[52px] backdrop-blur-[30px]">
                    <h1 className="login-heading line-effect">Sign Up</h1>
                    <div className="group relative z-0 mb-5 w-full">
                        <svg
                            className="absolute bottom-[0] left-[20px] top-[0] my-auto"
                            width="20"
                            height="16"
                            viewBox="0 0 20 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M2 0H18C19.1046 0 20 0.895431 20 2V14C20 15.1046 19.1046 16 18 16H2C0.89543 16 0 15.1046 0 14V2C0 0.9 0.9 0 2 0ZM18 3.38V2H2V3.38L10 7.38L18 3.38ZM18 5.62L10.45 9.38999C10.167 9.53262 9.83305 9.53262 9.55 9.38999L2 5.62V14H18V5.62Z"
                                fill="#FF0000"
                            />
                        </svg>
                        <TextInput
                            value={email}
                            placeholder={""}
                            onChange={setEmail}
                            id="floating_email"
                            className="peer block appearance-none border border-[#303030] bg-black ps-[55px] focus:outline-none focus:ring-0"
                        />
                        <label
                            htmlFor="floating_email"
                            className="absolute top-4 z-10 ms-[55px] origin-[0] -translate-y-4 scale-75 transform text-sm text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:opacity-30 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-2/4 peer-focus:dark:opacity-30"
                        >
                            Email address
                        </label>
                    </div>
                    <div className="group relative z-0 mb-5 w-full">
                        <svg
                            className="absolute bottom-[0] left-[20px] top-[0] my-auto"
                            width="20"
                            height="16"
                            viewBox="0 0 20 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M2 0H18C19.1046 0 20 0.895431 20 2V14C20 15.1046 19.1046 16 18 16H2C0.89543 16 0 15.1046 0 14V2C0 0.9 0.9 0 2 0ZM18 3.38V2H2V3.38L10 7.38L18 3.38ZM18 5.62L10.45 9.38999C10.167 9.53262 9.83305 9.53262 9.55 9.38999L2 5.62V14H18V5.62Z"
                                fill="#FF0000"
                            />
                        </svg>
                        <TextInput
                            value={username}
                            placeholder={""}
                            onChange={setUsername}
                            id="floating_username"
                            className="peer block appearance-none border border-[#303030] bg-black ps-[55px] focus:outline-none focus:ring-0"
                        />
                        <label
                            htmlFor="floating_username"
                            className="absolute top-4 z-10 ms-[55px] origin-[0] -translate-y-4 scale-75 transform text-sm text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:opacity-30 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-2/4 peer-focus:dark:opacity-30"
                        >
                            User Name
                        </label>
                    </div>
                    <div className="group relative z-0 mb-5 w-full">
                        <svg
                            className="absolute bottom-[0] left-[20px] top-[0] my-auto"
                            width="20"
                            height="16"
                            viewBox="0 0 20 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M2 0H18C19.1046 0 20 0.895431 20 2V14C20 15.1046 19.1046 16 18 16H2C0.89543 16 0 15.1046 0 14V2C0 0.9 0.9 0 2 0ZM18 3.38V2H2V3.38L10 7.38L18 3.38ZM18 5.62L10.45 9.38999C10.167 9.53262 9.83305 9.53262 9.55 9.38999L2 5.62V14H18V5.62Z"
                                fill="#FF0000"
                            />
                        </svg>
                        <TextInput
                            value={password}
                            placeholder={""}
                            onChange={setPassword}
                            id="floating_password"
                            className="-pt-4 peer block appearance-none border border-[#303030] bg-black ps-[55px] focus:outline-none focus:ring-0"
                        />
                        <label
                            htmlFor="floating_password"
                            className="peer-opacity-30 absolute top-4 z-10 ms-[55px] origin-[0] -translate-y-4 scale-75 transform text-sm text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:opacity-30 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-2/4 peer-focus:dark:opacity-30"
                        >
                            Password
                        </label>

                        <label
                            htmlFor="floating_email"
                            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500"
                        >
                            Email address
                        </label>
                    </div>

                    <div className="remeber-flex">
                        <div className="form-group custom_checkbox d-flex">
                            <input
                                type="checkbox"
                                name=""
                                id="check1"
                                checked=""
                            />
                            <label htmlFor="check1">Accept T&C</label>
                        </div>
                    </div>

                    <a
                        href="choose-user.html"
                        className="btn btn-primary w-100"
                    >
                        Sign Up
                    </a>

                    <div className="ls-text">
                        Already have an account?{" "}
                        <a href="login.html">Login HERE</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

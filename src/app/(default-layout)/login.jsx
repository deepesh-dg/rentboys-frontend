import React from "react";
import BG_IMG from "@/assets/img/login-bg.png";
import Button from "@/components/Button";
import { Link } from "react-router-dom";
import { MailIcon, PasswordIcon } from "@/components/icons/outline";
import Input from "../../components/common/Input/Input";

const login = () => {
    return (
        <>
            <div
                className="relative h-screen w-full bg-cover bg-center bg-no-repeat blur-sm"
                style={{
                    backgroundImage: `url(${BG_IMG})`,
                }}
            ></div>
            <div className="absolute left-[50%] top-[50%] w-full translate-x-[-50%] translate-y-[-50%] md:container">
                <div
                    className="mx-auto flex w-full max-w-xl flex-col items-center rounded-2xl border border-[#303030] bg-black/80 px-4 py-12 text-white md:px-16"
                    style={{
                        boxShadow: "0px 4px 50.6px 0px #D8000040",
                    }}
                >
                    <h1 className="relative font-fira-sans text-2xl font-normal text-white before:absolute before:-bottom-2 before:left-5 before:w-6 before:border-2 before:border-red-50 after:absolute after:-bottom-2 after:right-5 after:w-6 after:border-2 after:border-red-50">
                        Login
                    </h1>
                    <div className="flex w-full flex-col gap-y-4 py-10">
                        <Input
                            icon={MailIcon}
                            type="email"
                            placeholder="example@email.com"
                        />
                        <Input
                            icon={PasswordIcon}
                            type="password"
                            placeholder="Password"
                        />
                        <div className="flex justify-between text-sm">
                            <div className="flex items-center gap-x-2">
                                <input type="checkbox" />
                                <span>Remember me</span>
                            </div>
                            <p>Forgot Password?</p>
                        </div>
                        <Button
                            label="Login"
                            className="bg-red-100 px-20 py-4 text-xl font-bold uppercase hover:bg-red-50"
                        />
                    </div>
                    <p className="text-center text-xs text-white">
                        Don’t have an account?&nbsp;
                        <Link to="/signup">
                            <span className="font-bold text-red-50 underline">
                                SIGN UP HERE
                            </span>
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default login;

import React from "react";
import Button from "../../Button";
import { Link } from "react-router-dom";
import { MailIcon, PasswordIcon } from "../../icons/outline";
import Input from "../../common/Input/Input";
import { useLoginScreenSteps } from "@/state";
import { LoginScreenSteps } from "@/constants";
import { useLogin } from "@/state/context";

export default function Login() {
    const { setScreen } = useLoginScreenSteps();
    const { data, errors, formIds, loader, login, setData } = useLogin();

    return (
        <form
            onSubmit={login}
            className="z-1 flex w-full max-w-xl flex-col items-center rounded-2xl border border-dark bg-black/80 px-4 py-12 text-white shadow-sm md:px-16"
        >
            <h1 className="relative font-fira-sans text-2xl font-normal text-white before:absolute before:-bottom-2 before:left-5 before:w-6 before:border-2 before:border-red-50 after:absolute after:-bottom-2 after:right-5 after:w-6 after:border-2 after:border-red-50">
                Login
            </h1>
            {errors.form && (
                <div className="text-center text-red-50">{errors.form}</div>
            )}
            <div className="flex w-full flex-col gap-y-4 py-10">
                <Input
                    id={formIds.username}
                    value={data.username}
                    error={errors.username}
                    icon={MailIcon}
                    type="email"
                    placeholder="example@email.com"
                    onChange={e =>
                        setData(prev => {
                            prev.username = e.target.value;
                        })
                    }
                />
                <Input
                    id={formIds.password}
                    value={data.password}
                    error={errors.password}
                    icon={PasswordIcon}
                    type="password"
                    placeholder="Password"
                    onChange={e =>
                        setData(prev => {
                            prev.password = e.target.value;
                        })
                    }
                />
                <div className="flex justify-between text-sm">
                    <label
                        className="flex items-center gap-x-2"
                        htmlFor={formIds.rememberMe}
                    >
                        <input
                            id={formIds.rememberMe}
                            type="checkbox"
                            checked={data.rememberMe}
                            onChange={e =>
                                setData(prev => {
                                    prev.rememberMe = e.target.checked;
                                })
                            }
                        />
                        <span>Remember me</span>
                    </label>
                    <button
                        type="button"
                        onClick={() => {
                            setScreen(LoginScreenSteps.FORGOT_PASSWORD);
                        }}
                    >
                        Forgot Password?
                    </button>
                </div>
                <Button
                    label="Login"
                    disabled={loader}
                    type="submit"
                    className="bg-red-100 px-20 py-4 text-xl font-bold uppercase hover:bg-red-50"
                />
            </div>
            <p className="text-center text-xs text-white">
                Don't have an account?&nbsp;
                <Link to="/signup">
                    <span className="font-bold text-red-50 underline">
                        SIGN UP HERE
                    </span>
                </Link>
            </p>
        </form>
    );
}

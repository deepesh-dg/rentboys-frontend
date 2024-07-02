import React, { useEffect, useState } from "react";
import Button from "@/components/Button";
import { Link, useLocation } from "react-router-dom";
import {
    MailIcon,
    PasswordIcon,
    EyeClosedIcon,
    EyeOpenIcon,
} from "@/components/icons/outline";
// import Input from "@/components/common/Input/Input";
import { useLogin } from "@/state";
import Form from "@/components/auth-screens/Form";
import Icons from "@/components/icons/Component";
import HeadlessInput from "@/components/common/Input/HeadlessInput";

export default function Login() {
    const { data, errors, formIds, login, setData } = useLogin();
    const [viewPwd, setViewPwd] = useState(false);

    const location = useLocation();

    const togglePasswordVisibility = () => {
        setViewPwd(prev => !prev);
    };

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        if (searchParams.get("reset") === "true") {
            sessionStorage.setItem("forgot-password-screen", "forgot_password");
        }
    }, [location]);

    return (
        <Form onSubmit={login} error={errors.form} maxWidth="xl" title="Login">
            <div className="flex w-full flex-col gap-y-4">
                <HeadlessInput
                    id={formIds.username}
                    value={data.username}
                    error={errors.username}
                    icon={MailIcon}
                    type="email"
                    placeholder="example@email.com"
                    onChange={e =>
                        setData({
                            username: e.target.value,
                        })
                    }
                />
                <div className="relative">
                    <HeadlessInput
                        id={formIds.password}
                        value={data.password}
                        error={errors.password}
                        icon={PasswordIcon}
                        type={viewPwd ? "text" : "password"}
                        placeholder="Password"
                        onChange={e =>
                            setData({
                                password: e.target.value,
                            })
                        }
                    />
                    <button
                        type="button"
                        className="absolute right-4 top-7 translate-y-[-50%]"
                        onClick={togglePasswordVisibility}
                    >
                        <Icons
                            src={viewPwd ? EyeOpenIcon : EyeClosedIcon}
                            className="w-5"
                        />
                    </button>
                </div>
                <div className="flex justify-between pl-2 text-sm">
                    <label
                        className="flex items-center gap-x-2"
                        htmlFor={formIds.rememberMe}
                    >
                        <input
                            id={formIds.rememberMe}
                            type="checkbox"
                            checked={data.rememberMe}
                            onChange={e =>
                                setData({
                                    rememberMe: e.target.checked,
                                })
                            }
                        />
                        <span>Remember Me</span>
                    </label>
                    <Link to="/forgot-password">Forgot Password?</Link>
                </div>
                <Button
                    children="Login"
                    type="submit"
                    size="md"
                    theme="red"
                    className="rounded-xl text-xl font-bold uppercase"
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
        </Form>
    );
}

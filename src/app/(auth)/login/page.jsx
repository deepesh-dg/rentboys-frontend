import React, { useState } from "react";
import Button from "@/components/Button";
import { Link } from "react-router-dom";
import {
    MailIcon,
    PasswordIcon,
    EyeClosedIcon,
    EyeOpenIcon,
} from "@/components/icons/outline";
import Input from "@/components/common/Input/Input";
import { useLogin } from "@/state/context";
import Form from "@/components/auth-screens/Form";
import Icons from "@/components/icons/Component";

export default function Login() {
    const { data, errors, formIds, login, setData } = useLogin();
    const [viewPwd, setViewPwd] = useState(false);

    const togglePasswordVisibility = () => {
        setViewPwd(prev => !prev);
    };

    return (
        <Form onSubmit={login} error={errors.form} maxWidth="xl" title="Login">
            <div className="flex w-full flex-col gap-y-4">
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
                <div className="relative">
                    <Input
                        id={formIds.password}
                        value={data.password}
                        error={errors.password}
                        icon={PasswordIcon}
                        type={viewPwd ? "text" : "password"}
                        placeholder="Password"
                        onChange={e =>
                            setData(prev => {
                                prev.password = e.target.value;
                            })
                        }
                    />
                    <button
                        type="reset"
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
                                setData(prev => {
                                    prev.rememberMe = e.target.checked;
                                })
                            }
                        />
                        <span>Remember me</span>
                    </label>
                    <Link to="/forgot-password">Forgot Password?</Link>
                </div>
                <Button
                    label="Login"
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
        </Form>
    );
}

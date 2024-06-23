import React from "react";
import Button from "../../Button";
import { Link } from "react-router-dom";
import { MailIcon, PasswordIcon } from "../../icons/outline";
import Input from "../../common/Input/Input";
import { useLoginScreenSteps } from "@/state";
import { LoginScreenSteps } from "@/constants";
import { useLogin } from "@/state/context";
import Form from "../Form";

export default function Login() {
    const { setScreen } = useLoginScreenSteps();
    const { data, errors, formIds, loader, login, setData } = useLogin();

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
        </Form>
    );
}

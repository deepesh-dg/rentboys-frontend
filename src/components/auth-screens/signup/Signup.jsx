import React from "react";
import Button from "../../Button";
import { Link } from "react-router-dom";
import { MailIcon, UserIcon, PasswordIcon } from "../../icons/outline";
import Input from "../../common/Input/Input";
import { useSignup } from "@/state/context";
import { useSignupScreenSteps } from "@/state";
import { SignupScreenSteps } from "@/constants";

const Signup = () => {
    const { setScreen } = useSignupScreenSteps();
    const { data, errors, loader, formIds, setData, signup } = useSignup();

    return (
        <form
            onSubmit={async e => {
                // const status = await signup(e);
                const status = true;
                if (status) setScreen(SignupScreenSteps.VERIFY_EMAIL);
            }}
            className="z-1 flex w-full max-w-xl flex-col items-center rounded-2xl border border-dark bg-black/80 px-4 py-12 text-white md:px-16"
            style={{
                boxShadow: "0px 4px 50.6px 0px #D8000040",
            }}
        >
            <h1 className="relative font-fira-sans text-2xl font-normal text-white before:absolute before:-bottom-2 before:left-5 before:w-6 before:border-2 before:border-red-50 after:absolute after:-bottom-2 after:right-5 after:w-6 after:border-2 after:border-red-50">
                Sign Up
            </h1>
            {errors.form && <div className="text-red-50">{errors.form}</div>}
            <div className="flex w-full flex-col gap-y-4 py-10">
                <Input
                    icon={MailIcon}
                    type="email"
                    placeholder="example@email.com"
                    id={formIds.email}
                    error={errors.email}
                    value={data.email}
                    onChange={e =>
                        setData(prev => {
                            prev.email = e.target.value;
                        })
                    }
                />
                <Input
                    icon={UserIcon}
                    type="text"
                    id={formIds.username}
                    placeholder="Username"
                    error={errors.username}
                    value={data.username}
                    onChange={e =>
                        setData(prev => {
                            prev.username = e.target.value;
                        })
                    }
                />
                <Input
                    icon={PasswordIcon}
                    type="password"
                    placeholder="Password"
                    id={formIds.password}
                    error={errors.password}
                    value={data.password}
                    onChange={e =>
                        setData(prev => {
                            prev.password = e.target.value;
                        })
                    }
                />
                <label
                    className="flex items-center gap-x-2"
                    htmlFor={formIds.terms_conditions}
                >
                    <input
                        type="checkbox"
                        id={formIds.terms_conditions}
                        checked={data.terms_conditions === "1"}
                        onChange={e =>
                            setData(prev => {
                                prev.terms_conditions = e.target.checked
                                    ? "1"
                                    : "0";
                            })
                        }
                    />
                    <span className="text-sm font-thin">Accept T&C</span>
                    {errors.terms_conditions && (
                        <div className="text-red-50">
                            {errors.terms_conditions}
                        </div>
                    )}
                </label>
                <Button
                    label="Sign Up"
                    type="submit"
                    disabled={loader}
                    className="bg-red-100 py-4 hover:bg-red-50"
                />
            </div>
            <p className="text-center text-xs text-white">
                Already have an account ?&nbsp;
                <Link to="/login">
                    <span className="font-bold text-red-50 underline">
                        LOGIN HERE
                    </span>
                </Link>
            </p>
        </form>
    );
};

export default Signup;

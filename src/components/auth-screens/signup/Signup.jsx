import React, { useState } from "react";
import Button from "../../Button";
import { Link } from "react-router-dom";
import {
    MailIcon,
    UserIcon,
    PasswordIcon,
    EyeClosedIcon,
    EyeOpenIcon,
} from "../../icons/outline";
import Input from "../../common/Input/Input";
import { useSignup } from "@/state/context";
import { useSignupScreenSteps } from "@/state";
import { SignupScreenSteps } from "@/constants";
import Form from "../Form";
import Icons from "@/components/icons/Component";

const Signup = () => {
    const { setScreen } = useSignupScreenSteps();
    const { data, errors, formIds, setData, signup } = useSignup();
    const [viewPwd, setViewPwd] = useState(false);

    const togglePasswordVisibility = () => {
        setViewPwd(prev => !prev);
    };
    return (
        <Form
            onSubmit={async e => {
                const status = await signup(e);
                if (status) setScreen(SignupScreenSteps.VERIFY_EMAIL);
            }}
            error={errors.form}
            maxWidth="xl"
            title="Sign Up"
        >
            <div className="flex w-full flex-col gap-y-4">
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
                <div className="relative">
                    <Input
                        icon={PasswordIcon}
                        type={viewPwd ? "text" : "password"}
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
                <div className="block">
                    <label
                        className="flex items-center gap-x-2 pl-2"
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
                        <span className="">
                            Accept&nbsp;
                            <Link
                                to="/terms-of-service"
                                target="_blank"
                                className="text-red-50"
                            >
                                <span>T&C</span>&nbsp;
                            </Link>
                            &nbsp;and&nbsp;
                            <Link
                                to="/privacy-policy"
                                target="_blank"
                                className="text-red-50"
                            >
                                <span>Privacy Policy</span>&nbsp;
                            </Link>
                        </span>
                    </label>
                    {errors.terms_conditions && (
                        <div className="text-red-50">
                            {errors.terms_conditions}
                        </div>
                    )}
                </div>
                <Button
                    label="Sign Up"
                    type="submit"
                    className="bg-red-100 px-20 py-4 text-xl font-bold uppercase hover:bg-red-50"
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
        </Form>
    );
};

export default Signup;

import React, { useState } from "react";
import Button from "@/components/Button";
import Input from "@/components/common/Input/HeadlessInput";
import {
    PasswordIcon,
    EyeClosedIcon,
    EyeOpenIcon,
} from "@/components/icons/outline";
import { useLogin } from "@/state";
import Form from "@/components/auth-screens/Form";
import { useNavigate } from "react-router-dom";
import Icons from "@/components/icons/Component";

const ResetPassword = ({ setScreen }) => {
    const { data, errors, formIds, resetPassword, setData } = useLogin();
    const navigate = useNavigate();
    const [viewPwd, setViewPwd] = useState(false);
    const [viewConfirmPwd, setViewConfirmPwd] = useState(false);

    const handleShowPassword = () => {
        setViewPwd(prev => !prev);
    };

    return (
        <Form
            onSubmit={async e => {
                const status = await resetPassword(e);
                if (status) {
                    setScreen("forgot_password");
                    navigate("/login?reset=true");
                }
            }}
            title="Reset Password"
            maxWidth="xl"
            error={errors.form}
        >
            <div className="relative w-full">
                <Input
                    icon={PasswordIcon}
                    type={viewPwd ? "text" : "password"}
                    placeholder="New Password"
                    id={formIds.password}
                    error={errors.password}
                    value={data.password}
                    onChange={e =>
                        setData({
                            password: e.target.value,
                        })
                    }
                />
                <button
                    type="button"
                    className="absolute right-4 top-7 translate-y-[-50%]"
                    onClick={handleShowPassword}
                >
                    <Icons
                        src={viewPwd ? EyeOpenIcon : EyeClosedIcon}
                        className="w-5"
                    />
                </button>
            </div>
            <div className="relative w-full">
                <Input
                    icon={PasswordIcon}
                    type={viewConfirmPwd ? "text" : "password"}
                    placeholder="Confirm Password"
                    id={formIds.confirm_password}
                    error={errors.confirm_password}
                    value={data.confirm_password}
                    onChange={e =>
                        setData({
                            confirm_password: e.target.value,
                        })
                    }
                />
                <button
                    type="button"
                    className="absolute right-4 top-7 translate-y-[-50%]"
                    onClick={() => setViewConfirmPwd(!viewConfirmPwd)}
                >
                    <Icons
                        src={viewConfirmPwd ? EyeOpenIcon : EyeClosedIcon}
                        className="w-5"
                    />
                </button>
            </div>
            <Button
                children="Submit"
                type="submit"
                size="md"
                theme="red"
                className="w-full rounded-xl text-xl font-bold uppercase"
            />
        </Form>
    );
};

export default ResetPassword;

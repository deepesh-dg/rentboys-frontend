import React, { useState } from "react";
import Button from "@/components/Button";
import Input from "@/components/common/Input/Input";
import {
    PasswordIcon,
    EyeClosedIcon,
    EyeOpenIcon,
} from "@/components/icons/outline";
import { useLogin } from "@/state/context";
import Form from "@/components/auth-screens/Form";
import { useNavigate } from "react-router-dom";
import Icons from "@/components/icons/Component";

const ResetPassword = () => {
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
                if (status) navigate("/login");
            }}
            title="Reset Password"
            maxWidth="xl"
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
                        setData(prev => {
                            prev.password = e.target.value;
                        })
                    }
                />
                <button
                    type="reset"
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
                        setData(prev => {
                            prev.confirm_password = e.target.value;
                        })
                    }
                />
                <button
                    type="reset"
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
                className="uppercase font-bold rounded-xl text-xl w-full"
            />
        </Form>
    );
};

export default ResetPassword;

import React from "react";
import Button from "@/components/Button";
import Input from "@/components/common/Input/Input";
import { PasswordIcon } from "@/components/icons/outline";
import { useLogin } from "@/state/context";
import Form from "@/components/auth-screens/Form";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
    const { data, errors, formIds, resetPassword, setData } = useLogin();
    const navigate = useNavigate();

    return (
        <Form
            onSubmit={async e => {
                const status = await resetPassword(e);
                if (status) navigate("/login");
            }}
            title="Reset Password"
            maxWidth="xl"
        >
            <Input
                icon={PasswordIcon}
                type="password"
                placeholder="New Password"
                value={data.password}
                onChange={e =>
                    setData(prev => {
                        prev.password = e.target.value;
                    })
                }
                error={errors.password}
                id={formIds.password}
            />
            <Input
                icon={PasswordIcon}
                type="password"
                placeholder="Confirm Password"
                value={data.confirm_password}
                onChange={e =>
                    setData(prev => {
                        prev.confirm_password = e.target.value;
                    })
                }
                error={errors.confirm_password}
                id={formIds.confirm_password}
            />
            <Button
                label="Submit"
                type="submit"
                className="w-full bg-red-100 px-20 py-4 text-xl font-bold uppercase hover:bg-red-50"
            />
        </Form>
    );
};

export default ResetPassword;

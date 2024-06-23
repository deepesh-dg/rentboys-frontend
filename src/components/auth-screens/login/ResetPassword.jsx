import React from "react";
import Button from "../../Button";
import Input from "../../common/Input/Input";
import { PasswordIcon } from "../../icons/outline";
import { useLoginScreenSteps } from "@/state";
import { useLogin } from "@/state/context";
import { LoginScreenSteps } from "@/constants";
import Form from "../Form";

const ResetPassword = () => {
    const { setScreen } = useLoginScreenSteps();
    const { data, errors, formIds, resetPassword, setData } = useLogin();

    return (
        <Form
            onSubmit={async e => {
                const status = await resetPassword(e);
                if (status) setScreen(LoginScreenSteps.LOGIN);
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

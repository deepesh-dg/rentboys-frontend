import React from "react";
import Button from "../../Button";
import { MailIcon } from "../../icons/outline";
import Input from "../../common/Input/Input";
import { useLoginScreenSteps } from "@/state";
import { useLogin } from "@/state/context";
import { LoginScreenSteps } from "@/constants";
import Form from "../Form";

const ForgotPassword = () => {
    const { setScreen } = useLoginScreenSteps();
    const { data, errors, formIds, forgotPassword, setData } = useLogin();

    return (
        <Form
            onSubmit={async e => {
                // const status = await forgotPassword(e);
                const status = true;
                if (status) setScreen(LoginScreenSteps.FORGOT_PASSWORD_OTP);
            }}
            title="Forgot Password"
            description="Enter the email address associated with your RentBoys profile and we'll send you a link to recover your access."
            maxWidth="xl"
            error={errors.form}
        >
            <Input
                icon={MailIcon}
                type="email"
                placeholder="exapmple@test.com"
                value={data.email}
                onChange={e =>
                    setData(prev => {
                        prev.email = e.target.value;
                    })
                }
                error={errors.email}
                id={formIds.email}
            />
            <Button
                label="Send"
                type="submit"
                className="w-full bg-red-100 px-20 py-4 text-xl font-bold uppercase hover:bg-red-50"
            />
        </Form>
    );
};

export default ForgotPassword;

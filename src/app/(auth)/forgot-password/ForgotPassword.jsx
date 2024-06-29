import React from "react";
import Button from "@/components/Button";
import { MailIcon } from "@/components/icons/outline";
import Input from "@/components/common/Input/Input";
import { useLogin } from "@/state";
import Form from "@/components/auth-screens/Form";

const ForgotPassword = ({ setScreen }) => {
    const { data, errors, formIds, forgotPassword, setData } = useLogin();

    return (
        <Form
            onSubmit={async e => {
                const status = await forgotPassword(e);
                if (status) setScreen("otp");
            }}
            title="Forgot Password"
            description="Enter the email address associated with your RentBoys profile and we'll send you otp to recover your access."
            maxWidth="xl"
            error={errors.form}
        >
            <Input
                icon={MailIcon}
                type="email"
                placeholder="exapmple@test.com"
                value={data.email}
                onChange={e =>
                    setData({
                        email: e.target.value,
                    })
                }
                error={errors.email}
                id={formIds.email}
            />
            <Button
                children="Send"
                type="submit"
                size="md"
                theme="red"
                className="w-full rounded-xl text-xl font-bold uppercase"
            />
        </Form>
    );
};

export default ForgotPassword;

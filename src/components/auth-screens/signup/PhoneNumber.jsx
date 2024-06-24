import React from "react";
import Form from "../Form";
import { LocationIcon } from "@/components/icons/outline";
import Input from "@/components/common/Input/Input";
import Button from "@/components/Button";
import { useSignup } from "@/state/context";
import { useSignupScreenSteps } from "@/state";
import { SignupScreenSteps } from "@/constants";

export default function PhoneNumber() {
    const { data, errors, loader, formIds, phoneVerify, setData } = useSignup();
    const { setScreen } = useSignupScreenSteps();

    return (
        <Form
            onSubmit={async e => {
                const status = await phoneVerify();
                if (status) setScreen(SignupScreenSteps.VERIFY_PHONE);
            }}
            title="Phone no."
            maxWidth="xl"
            error={errors.form}
        >
            <div>
                <Input
                    icon={LocationIcon}
                    type="number"
                    placeholder="Enter your phone no."
                    id={formIds.phone_number}
                    value={data.phone_number}
                    error={errors.phone_number}
                    onChange={e => {
                        setData(prev => {
                            prev.phone_number = e.target.value;
                        });
                    }}
                />
                <p className="mt-2 text-base font-normal">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                </p>
            </div>
            <Button
                type="submit"
                label="Next"
                className="w-full bg-red-100 py-4 text-xl font-bold uppercase hover:bg-red-50"
            />
        </Form>
    );
}

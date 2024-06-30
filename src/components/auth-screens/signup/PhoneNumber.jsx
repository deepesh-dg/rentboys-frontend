import React from "react";
import Form from "../Form";
import Input from "@/components/common/Input/Input";
import Button from "@/components/Button";
import { useSignup } from "@/state";
import { useSignupScreenSteps } from "@/state";
import { SignupScreenSteps } from "@/constants";
import phoneCodes from "@/data/country_code.json";
import Select from "@/components/common/Input/Select";

export default function PhoneNumber() {
    const { data, errors, formIds, phoneVerify, setData } = useSignup();
    const { setScreen } = useSignupScreenSteps();

    return (
        <Form
            onSubmit={async e => {
                const status = await phoneVerify(e);
                if (status) setScreen(SignupScreenSteps.VERIFY_PHONE);
            }}
            title="Phone no."
            maxWidth="xl"
            error={errors.form}
        >
            <div>
                <div className="flex">
                    <Select
                        id={formIds.phone_code}
                        value={data.phone_code}
                        onChange={e => {
                            setData({
                                phone_code: e.target.value,
                            });
                        }}
                        options={phoneCodes.map(code => ({
                            id: `${code.dial_code} - ${code.name}`,
                            value: code.dial_code,
                            label: `${code.dial_code} ${code.name}`,
                        }))}
                        className="max-w-40"
                    />
                    <Input
                        type="number"
                        placeholder="Enter your phone no."
                        id={formIds.phone_number}
                        value={data.phone_number}
                        onChange={e => {
                            setData({
                                phone_number: e.target.value,
                            });
                        }}
                    />
                </div>
                {errors.phone_number && (
                    <p className="mt-1 text-base font-normal text-red-50">
                        {errors.phone_number}
                    </p>
                )}
                <p className="mt-2 text-base font-normal">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                </p>
            </div>
            <Button
                type="submit"
                children="Next"
                className="w-full rounded-xl text-xl font-bold uppercase"
            />
        </Form>
    );
}

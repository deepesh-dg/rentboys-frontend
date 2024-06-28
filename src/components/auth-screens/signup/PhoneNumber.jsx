import React from "react";
import Form from "../Form";
import Input from "@/components/common/Input/Input";
import Button from "@/components/Button";
import { useSignup } from "@/state/context";
import { useSignupScreenSteps } from "@/state";
import { SignupScreenSteps } from "@/constants";
import phoneCodes from "@/data/country_code.json";
import Icons from "@/components/icons/Component";
import { ArrowDownIcon } from "@/components/icons/outline";

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
                    <div className="relative w-auto max-w-40 border border-solid border-white/30 bg-black pl-4 pr-8">
                        <div className="h-full overflow-hidden">
                            <select
                                id={formIds.phone_code}
                                className="h-full bg-black"
                                value={data.phone_code}
                                transparent
                                onChange={e => {
                                    setData(prev => {
                                        prev.phone_code = e.target.value;
                                    });
                                }}
                            >
                                {phoneCodes.map(code => (
                                    <option
                                        key={`(${code.dial_code})-${code.name}`}
                                        value={code.dial_code}
                                    >
                                        ({code.dial_code}) {code.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <Icons
                            icon={ArrowDownIcon}
                            className="absolute right-2 top-1/2 w-4 -translate-y-1/2 text-red-50"
                        />
                    </div>
                    <Input
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
                </div>
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

import React from "react";
import Input from "@/components/common/Input/Input";
import { LocationIcon } from "@/components/icons/outline";
import Button from "@/components/Button";
import { useSignupScreenSteps } from "@/state";
import { useSignup } from "@/state/context";
import { SignupScreenSteps, UserType } from "@/constants";
import Form from "../Form";

const Location = () => {
    const { setScreen } = useSignupScreenSteps();
    const { data, errors, loader, selectLocation, setData } = useSignup();

    return (
        <Form
            onSubmit={async e => {
                // const status = await selectLocation(e);
                const status = true;
                if (status && data.user_type === UserType.ADVERTISER)
                    setScreen(SignupScreenSteps.UPLOAD_ID);
            }}
            title="Location"
            maxWidth="xl"
        >
            <h1 className="relative font-fira-sans text-2xl font-normal text-white before:absolute before:-bottom-2 before:left-5 before:w-6 before:border-2 before:border-red-50 after:absolute after:-bottom-2 after:right-5 after:w-6 after:border-2 after:border-red-50">
                Location
            </h1>
            <div className="flex w-full flex-col gap-y-4 py-10">
                <Input
                    icon={LocationIcon}
                    type="email"
                    placeholder="Enter your location/Current Location"
                    value={data.location}
                    onChange={e =>
                        setData(prev => {
                            prev.location = e.target.value;
                        })
                    }
                    error={errors.location}
                />
                <Button
                    label="Next"
                    type="submit"
                    disabled={loader}
                    className="bg-red-100 py-4 text-xl font-bold uppercase hover:bg-red-50"
                />
            </div>
        </Form>
    );
};

export default Location;

import React from "react";
import Input from "@/components/common/Input/Input";
import { LocationIcon } from "@/components/icons/outline";
import Button from "@/components/Button";
import { useSignupScreenSteps } from "@/state";
import { useSignup } from "@/state/context";
import { SignupScreenSteps, UserType } from "@/constants";

const Location = () => {
    const { setScreen } = useSignupScreenSteps();
    const { data, errors, loader, selectLocation, setData } = useSignup();

    return (
        <form
            onSubmit={async e => {
                // const status = await selectLocation(e);
                const status = true;
                if (status && data.user_type === UserType.ADVERTISER)
                    setScreen(SignupScreenSteps.UPLOAD_ID);
            }}
            className="z-1 flex w-full max-w-xl flex-col items-center rounded-2xl border border-dark bg-black/80 px-4 py-12 text-white md:px-16"
            style={{
                boxShadow: "0px 4px 50.6px 0px #D8000040",
            }}
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
        </form>
    );
};

export default Location;

import React, { useEffect } from "react";
import Input from "@/components/common/Input/Input";
import { LocationIcon } from "@/components/icons/outline";
import Button from "@/components/Button";
import { useSignupScreenSteps } from "@/state";
import { useSignup } from "@/state";
import { SignupScreenSteps, UserType } from "@/constants";
import Form from "../Form";
import api from "@/services";
import { useState } from "@/hooks";
import { useNavigate } from "react-router-dom";
import { classNames } from "@/lib";

const Location = () => {
    const { setScreen } = useSignupScreenSteps();
    const { data, errors, selectLocation, setData } = useSignup();

    const [locationSuggestions, setLocationSuggestions] = useState({});
    const [showSuggestions, setShowSuggestions] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if (
            data.location &&
            data.location.length > 2 &&
            !locationSuggestions[data.location]
        ) {
            const timer = setTimeout(async () => {
                const response = await api.common.getGeoLocations(
                    data.location
                );

                if (response.status) {
                    setLocationSuggestions(prev => {
                        prev[data.location] = response.data;
                    });
                }
            }, 500);

            return () => clearTimeout(timer);
        }
    }, [data.location, locationSuggestions]);

    return (
        <Form
            onSubmit={async e => {
                const status = await selectLocation(e);

                if (status) {
                    if (data.user_type === UserType.ADVERTISER)
                        setScreen(SignupScreenSteps.UPLOAD_ID);
                    else navigate("/client/choose-plans");
                }
            }}
            title="Location"
            maxWidth="xl"
            error={errors.form || errors.location}
        >
            <div className="flex w-full flex-col gap-y-4">
                <div className="relative">
                    <Input
                        icon={LocationIcon}
                        type="text"
                        placeholder="Enter your location/Current Location"
                        value={data.location}
                        onChange={e =>
                            setData({
                                location: e.target.value,
                            })
                        }
                        onFocus={() => {
                            setShowSuggestions(() => true);
                        }}
                        onBlur={() => {
                            setShowSuggestions(() => false);
                        }}
                        error={errors.location}
                    />
                    <ul
                        className={classNames(
                            "absolute inset-x-0 top-full max-h-28 overflow-auto border border-solid border-white/20",
                            showSuggestions ? "block" : "hidden hover:block"
                        )}
                    >
                        {locationSuggestions[data.location]?.map(item => (
                            <li
                                key={item.place_id}
                                className="bg-black text-sm text-red-50"
                            >
                                <button
                                    onClick={() => {
                                        setData({
                                            location: item.display_name,
                                            longitude: item.lon,
                                            latitude: item.lat,
                                            state: item.address.state,
                                            country: item.address.country,
                                        });
                                    }}
                                    className="w-full px-4 py-2 text-left hover:bg-white/10"
                                >
                                    {item.display_name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <Button
                    children="Next"
                    type="submit"
                    className="rounded-xl text-xl font-bold uppercase"
                />
            </div>
        </Form>
    );
};

export default Location;

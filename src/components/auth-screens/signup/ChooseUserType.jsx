import React from "react";
import AdvertiserImg from "@/assets/img/advertiser.png";
import ClientImg from "@/assets/img/client.png";
import Button from "@/components/Button";
import { useSignup } from "@/state/context";
import { useSignupScreenSteps } from "@/state";
import { SignupScreenSteps, UserType } from "@/constants";
import Form from "../Form";

const ChooseUserType = () => {
    const { setScreen } = useSignupScreenSteps();
    const { data, selectUserType, setData } = useSignup();

    return (
        <Form
            onSubmit={async e => {
                const status = await selectUserType(e);
                if (status) setScreen(SignupScreenSteps.SELECT_LOCATION);
            }}
            title="Choose User Type"
            maxWidth="4xl"
        >
            <div className="flex w-full flex-col items-center gap-y-6">
                {/* <span className='w-20 h-1 my-2 inline-block bg-red-50'></span> */}
                <div className="flex w-full justify-between gap-x-4">
                    <button
                        type="button"
                        className="relative flex w-full justify-end rounded-2xl bg-red-50 text-left"
                        onClick={() => {
                            setData(prev => {
                                prev.user_type = UserType.ADVERTISER;
                            });
                        }}
                    >
                        <div className="absolute left-3 top-8 md:left-6">
                            <h2 className="text-xl font-bold md:text-3xl">
                                Advertiser
                            </h2>
                            <p className="text-sm font-bold">
                                You want to promote yourself
                            </p>
                            <span className="relative mt-4 inline-block h-6 w-6 rounded-full border-2 border-white">
                                {data.user_type === UserType.ADVERTISER && (
                                    <span className="absolute inset-1 inline-block rounded-full bg-white" />
                                )}
                            </span>
                        </div>
                        <img src={AdvertiserImg} alt="advertiser_img" />
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            setData(prev => {
                                prev.user_type = UserType.CLIENT;
                            });
                        }}
                        className="relative flex w-full justify-end rounded-2xl bg-red-50 text-left"
                    >
                        <div className="absolute left-3 top-8 md:left-6">
                            <h2 className="text-xl font-bold md:text-3xl">
                                Client
                            </h2>
                            <p className="text-sm font-bold">
                                You're looking to hire
                            </p>
                            <span className="relative mt-4 inline-block h-6 w-6 rounded-full border-2 border-white">
                                {data.user_type === UserType.CLIENT && (
                                    <span className="absolute inset-1 inline-block rounded-full bg-white" />
                                )}
                            </span>
                        </div>
                        <img src={ClientImg} alt="advertiser_img" />
                    </button>
                </div>
                <div>
                    <Button
                        label="Continue"
                        type="submit"
                        className="mt-4 bg-red-100 px-20 py-4 text-xl font-bold uppercase hover:bg-red-50"
                    />
                </div>
            </div>
        </Form>
    );
};

export default ChooseUserType;

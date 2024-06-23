import React from "react";
import AdvertiserImg from "@/assets/img/advertiser.png";
import ClientImg from "@/assets/img/client.png";
import Button from "@/components/Button";
import { useSignup } from "@/state/context";
import { useSignupScreenSteps } from "@/state";
import { SignupScreenSteps, UserType } from "@/constants";

const ChooseUserType = () => {
    const { setScreen } = useSignupScreenSteps();
    const { data, loader, selectUserType, setData } = useSignup();

    return (
        <form
            onSubmit={async e => {
                // const status = await selectUserType(e);
                const status = true;
                if (status) setScreen(SignupScreenSteps.SELECT_LOCATION);
            }}
            className="z-1 flex w-full max-w-4xl flex-col items-center rounded-2xl border border-dark bg-black/80 px-4 py-12 text-white md:px-16"
            style={{
                boxShadow: "0px 4px 50.6px 0px #D8000040",
            }}
        >
            <div className="flex w-full flex-col items-center gap-y-6">
                <h1 className="relative font-fira-sans text-2xl font-normal text-white before:absolute before:-bottom-2 before:left-14 before:w-10 before:border-2 before:border-red-50 after:absolute after:-bottom-2 after:right-14 after:w-10 after:border-2 after:border-red-50">
                    Choose User Type
                </h1>
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
                        disabled={loader}
                        type="submit"
                        className="mt-4 bg-red-100 px-20 py-4 text-xl font-bold uppercase hover:bg-red-50"
                    />
                </div>
            </div>
        </form>
    );
};

export default ChooseUserType;

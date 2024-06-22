import React from "react";
import Icons from "@/components/icons/Component";
import { PasswordIcon } from "@/components/icons/outline";
import Button from "@/components/Button";
import Image from "@/components/Image";
import Man1 from "@/assets/img/landing-manVector.png";
import { useSignupScreenSteps } from "@/state";
import { SignupScreenSteps } from "@/constants";

const UploadId = () => {
    const { setScreen } = useSignupScreenSteps();
    return (
        <div className="z-1 flex w-full max-w-3xl flex-col items-center gap-y-6 rounded-2xl border border-dark bg-black/80 px-4 py-12 text-white shadow-sm md:px-16">
            <h1 className="relative font-fira-sans text-2xl font-normal text-white before:absolute before:-bottom-2 before:left-5 before:w-6 before:border-2 before:border-red-50 after:absolute after:-bottom-2 after:right-5 after:w-6 after:border-2 after:border-red-50">
                Login
            </h1>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Labore, eos!
            </p>
            <div className="gap-x-4 md:flex">
                <div className="w-full border border-[#5F5F5F] bg-black">
                    <div className="flex h-full w-full items-center justify-center">
                        <div className="flex flex-col items-center justify-center md-down:min-h-60">
                            <Icons
                                src={PasswordIcon}
                                className="mx-auto w-10"
                            />
                            <h2 className="text-xl md:text-2xl">
                                Upload User Id
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptate, molestias.
                    </p>
                    <ul className="list-disc [&>li]:ml-4">
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptate, molestias.
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptate, molestias.
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptate, molestias.
                        </li>
                    </ul>
                    <Image src={Man1} className="w-10" />
                    <Button
                        label="Skip"
                        onClick={() => {
                            setScreen(SignupScreenSteps.PHONE_NUMBER);
                        }}
                        className="w-full bg-red-100 px-20 py-4 text-xl font-bold uppercase hover:bg-red-50"
                    />
                </div>
            </div>
        </div>
    );
};

export default UploadId;

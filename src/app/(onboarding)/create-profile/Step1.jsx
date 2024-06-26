import React from "react";
import Icons from "@/components/icons/Component";
import Button from "@/components/Button";
import { UserUploadDpIcon } from "@/components/icons/solid";

const Step1 = () => {
    return (
        <div className="container flex-grow">
            <div className="flex flex-col items-start justify-start gap-x-10 gap-y-5 md:flex-row">
                <div className="flex min-h-80 w-full items-center justify-center border border-gray-300 bg-black md:w-1/4">
                    <div className="flex flex-col items-center justify-center gap-y-4">
                        <Icons
                            src={UserUploadDpIcon}
                            className="mx-auto w-40"
                        />
                        <Button
                            label="Upload Your Id"
                            variant="colored"
                            size="sm"
                        />
                    </div>
                </div>
                <div className="w-full space-y-6 md:w-3/4">
                    <div className="space-y-1">
                        <h2 className="text-2xl font-semibold">Photo rules</h2>
                        <p className="text-base">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </p>
                    </div>
                    <div className="space-y-1">
                        <h2 className="text-2xl font-semibold">Accepted</h2>
                        <ul className="ml-6 list-disc space-y-1 text-base">
                            <li>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                            </li>
                            <li>
                                Ut sed urna a metus scelerisque egestas molestie
                                sed dolor.
                            </li>
                            <li>Donec a ligula vel ante bibendum lobortis.</li>
                            <li>Morbi sed est quis ex tincidunt mollis.</li>
                            <li>Mauris hendrerit velit a aliquet malesuada.</li>
                        </ul>
                    </div>
                    <div className="space-y-1">
                        <h2 className="text-2xl font-semibold">Not Accepted</h2>
                        <ul className="ml-6 list-disc space-y-1 text-base">
                            <li>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                            </li>
                            <li>
                                Ut sed urna a metus scelerisque egestas molestie
                                sed dolor.
                            </li>
                            <li>Donec a ligula vel ante bibendum lobortis.</li>
                            <li>Morbi sed est quis ex tincidunt mollis.</li>
                            <li>Mauris hendrerit velit a aliquet malesuada.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Step1;

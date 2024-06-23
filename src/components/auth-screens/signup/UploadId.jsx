import React from "react";
import Form from "../Form";
import Icons from "../../icons/Component";
import Button from "../../Button";
import { CameraIcon } from "../../icons/outline";
import { FakeDocument } from "../../icons/solid";
import { SignupScreenSteps } from "@/constants";
import { useSignupScreenSteps } from "@/state";

export default function UploadId() {
    const { setScreen } = useSignupScreenSteps();
    const handleSubmit = () => {
        // handle form submission
    };

    return (
        <Form title="Upload ID" maxWidth="4xl" className="!gap-y-4">
            <p className="text-base font-normal">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
            </p>
            <div className="flex w-full flex-col gap-x-4 md:flex-row md-down:gap-y-4">
                <div className="w-full border border-gray-300 bg-black md:w-2/5">
                    <div className="flex h-full w-full items-center justify-center">
                        <div className="flex flex-col items-center justify-center gap-y-4 md-down:min-h-60">
                            <Icons src={CameraIcon} className="mx-auto w-16" />
                            <h2 className="text-xl md:text-2xl">
                                Upload Your Id
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="w-full space-y-4 md:w-3/5">
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                    </p>
                    <ul className="list-disc [&>li]:ml-4">
                        <li>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </li>
                        <li>
                            Nullam auctor diam et velit tempus, a porta diam
                            convallis.
                        </li>
                        <li>Etiam mollis ex vel mauris viverra fringilla.</li>
                    </ul>
                    <Icons src={FakeDocument} className="w-full" />
                    <Button
                        label="Skip"
                        type="button"
                        onClick={() => {
                            setScreen(SignupScreenSteps.PHONE_NUMBER);
                        }}
                        className="w-full bg-red-100 px-20 py-4 text-xl font-bold uppercase hover:bg-red-50"
                    />
                </div>
            </div>
        </Form>
    );
}

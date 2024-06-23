import React from "react";
import Input from "@/components/common/Input/Input";
import Textarea from "@/components/TextArea";
import Button from "@/components/Button";
import { useLocation } from "react-router-dom";

const page = () => {
    const location = useLocation();
    console.log(location.pathname.split("/")[1]);

    return (
        <div className="w-full space-y-4 py-4">
            <h2 className="border-b border-gray-50 pb-1 text-xl font-medium text-red-50">
                Contact US
            </h2>
            <p>
                Having issues, questions or just feeling lost? Contact us and
                we'll do our best to reach you back as soon as possible!
            </p>
            <div className="flex flex-col gap-4">
                <div className="gap-4 space-y-4 md:flex md:space-y-0">
                    <Input type="text" placeholder="Your Name*" />
                    <Input type="email" placeholder="Email Address*" />
                </div>
                {/* Dropdown */}
                <Input type="email" placeholder="Subject*" />
                <Textarea
                    rows={4}
                    placeholder="Your Message*"
                    className="bg-black p-4 text-white"
                />
                <div className="flex justify-end">
                    <Button
                        label="send"
                        className="bg-red-100 px-20 py-4 text-xl font-bold uppercase hover:bg-red-50"
                    />
                </div>
            </div>
        </div>
    );
};

export default page;

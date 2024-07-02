import React, { useState } from "react";
import Input from "@/components/common/Input/Input";
import Textarea from "@/components/TextArea";
import Button from "@/components/Button";
import Select from "@/components/common/Input/Select";

const page = () => {
    const [selectedOption, setSelectedOption] = useState("");
    const [customOption, setCustomOption] = useState("");

    const options = [
        { id: "option1", value: "option1", label: "Option 1" },
        { id: "option2", value: "option2", label: "Option 2" },
        { id: "option3", value: "option3", label: "Option 3" },
        { id: "other", value: "other", label: "Other" },
    ];

    const handleChange = event => {
        const value = event.target.value;
        setSelectedOption(value);
        if (value !== "other") {
            setCustomOption("");
        }
    };

    const handleCustomInputChange = event => {
        const customValue = event.target.value;
        setCustomOption(customValue);
        setSelectedOption(customValue);
    };
    return (
        <div className="w-full space-y-4 py-4">
            <h2 className="border-b border-gray-50 pb-1 text-xl font-bold text-red-50">
                Contact US
            </h2>
            <p className="pb-2 text-lg font-normal">
                Having issues, questions or just feeling lost? Contact us and
                we'll do our best to reach you back as soon as possible!
            </p>
            <div className="flex flex-col gap-4">
                <div className="gap-4 space-y-4 md:flex md:space-y-0">
                    <Input type="text" placeholder="Your Name*" />
                    <Input type="email" placeholder="Email Address*" />
                </div>
                <Select
                    options={options}
                    value={selectedOption === "other" ? "" : selectedOption}
                    onChange={handleChange}
                    className="w-full py-4"
                />
                {selectedOption === "other" && (
                    <Input
                        type="text"
                        placeholder="Others"
                        value={customOption}
                        onChange={handleCustomInputChange}
                        onClick={e => e.stopPropagation()}
                        className="mt-4 w-full rounded-md border border-gray-300 p-2"
                    />
                )}
                <Textarea
                    rows={4}
                    placeholder="Your Message*"
                    className="bg-black p-4 text-white"
                />
                <div className="flex justify-end">
                    <Button
                        children="send"
                        size="md"
                        className="w-36 uppercase"
                    />
                </div>
            </div>
        </div>
    );
};

export default page;

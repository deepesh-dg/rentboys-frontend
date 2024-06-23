import React from "react";
import Form from "../../../components/auth-screens/Form";
import { LocationIcon } from "@/components/icons/outline";
import Input from "@/components/common/Input/Input";
import Button from "@/components/Button";

export default function Page() {
    const handleSubmit = () => {
        console.log("update phone no");
    };

    return (
        <Form title="Phone no." maxWidth="xl">
            <div>
                <Input
                    icon={LocationIcon}
                    type="email"
                    placeholder="Enter your phone no."
                />
                <p className="mt-2 text-base font-normal">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                </p>
            </div>
            <Button
                onClick={handleSubmit}
                label="Next"
                className="w-full bg-red-100 py-4 text-xl font-bold uppercase hover:bg-red-50"
            />
        </Form>
    );
}

import React from "react";
import Form from "../../../components/auth-screens/Form";
import MemberImg from "@/assets/img/member-user.png";
import Button from "@/components/Button";

export default function Page() {
    const handleSubmit = () => {
        // handle form submission
    };

    return (
        <Form maxWidth="2xl" className="!gap-y-0 !px-4 !py-4">
            <div className="flex w-full flex-col gap-4 md:flex-row md-down:items-center">
                <img src={MemberImg} alt="member_user" />
                <div className="flex flex-col justify-between gap-4">
                    <div>
                        <h2 className="text-2xl font-bold">Well Done</h2>
                        <p className="text-base font-semibold">
                            Your Rentboys client is ready!
                        </p>
                        <p className="text-base font-normal">
                            you may sellect your membership type below.
                        </p>
                    </div>
                    <div className="flex items-center gap-x-4 md:justify-between">
                        <Button
                            label="Ill’ do it later"
                            className="rounded-xl border p-4 text-base font-bold"
                        />
                        <Button
                            label="Select Membership"
                            className="rounded-xl bg-red-50 p-4 text-base font-bold"
                        />
                    </div>
                </div>
            </div>
        </Form>
    );
}

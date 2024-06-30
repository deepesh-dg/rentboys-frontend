import React from "react";
import Form from "@/components/auth-screens/Form";
import MemberImg from "@/assets/img/member-user.png";
import Button from "@/components/Button";
import BG_IMG from "@/assets/img/login-bg.png";

export default function MembershipPlan() {
    return (
        <>
            <div className="relative flex min-h-screen w-full flex-col items-center justify-center py-20 backdrop-blur-sm">
                <div
                    className="absolute inset-0 h-full w-full bg-cover bg-no-repeat blur-sm"
                    style={{
                        backgroundImage: `url(${BG_IMG})`,
                    }}
                />
                <Form maxWidth="2xl" className="!gap-y-0 !px-4 !py-4">
                    <div className="flex w-full flex-col gap-4 md:flex-row md-down:items-center">
                        <img src={MemberImg} alt="member_user" />
                        <div className="flex flex-col justify-between gap-4">
                            <div>
                                <h2 className="text-2xl font-bold uppercase">
                                    Well Done
                                </h2>
                                <p className="text-base font-semibold">
                                    Your Rentboys client is ready!
                                </p>
                                <p className="text-base font-normal">
                                    you may sellect your membership type below.
                                </p>
                            </div>
                            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                                <Button
                                    children="Ill’ do it later"
                                    theme="white"
                                    variant="text"
                                    className="w-full rounded-xl text-center text-base font-bold text-white"
                                    href="/dashboard"
                                />
                                <Button
                                    themes="red"
                                    variant="colored"
                                    children="Select Membership"
                                    className="w-full whitespace-nowrap rounded-xl text-center text-base font-bold"
                                />
                            </div>
                        </div>
                    </div>
                </Form>
            </div>
        </>
    );
}

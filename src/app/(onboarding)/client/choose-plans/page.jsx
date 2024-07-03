import React from "react";
import Form from "@/components/auth-screens/Form";
import MemberImg from "@/assets/img/client.png";
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
                <Form
                    maxWidth="2xl"
                    className="!gap-y-0 overflow-hidden !px-4 !py-4"
                >
                    <div className="flex w-full flex-col gap-x-6 gap-y-4 md:flex-row md-down:items-center">
                        <div className="flex w-full max-w-[220px] justify-center rounded-2xl bg-red-50">
                            <img src={MemberImg} alt="member_user" />
                        </div>
                        <div className="flex max-w-sm flex-col justify-between gap-4">
                            <div className="space-y-2">
                                <h2 className="text-2xl font-bold uppercase">
                                    You are almost done!
                                </h2>
                                <p className="text-sm font-medium">
                                    Your Rentboys client is ready!
                                </p>
                                <p className="text-sm font-normal text-white/70">
                                    you may sellect your membership type below.
                                </p>
                            </div>
                            <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
                                <Button
                                    children="Ill’ do it later"
                                    theme="white"
                                    variant="text"
                                    className="w-full rounded-xl text-center text-base font-bold text-white"
                                    href="/dashboard"
                                />
                                <Button
                                    themes="red"
                                    href="/client/membership-plans"
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

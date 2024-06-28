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
                        <img src={MemberImg} alt="member_user" className="max-w-sm w-full" />
                        <div className="flex flex-col justify-between gap-4 max-w-sm">
                            <div className="space-y-2">
                                <h2 className="text-2xl font-bold uppercase">You are almost done!</h2>
                                <p className="text-sm font-medium">
                                    To be the part of our community, be visible in searches and start receiving offers, you need to purchase membership plan and complete the other steps of your profile setup.
                                </p>
                                <p className="text-sm font-normal text-white/70">
                                    To increase your traffic to your account in the selected location, you can view our advertise offers.
                                </p>
                            </div>
                            <div className="flex flex-col md:flex-row items-center gap-4 md:justify-between">
                                <Button
                                    label="Ill’ do it later"
                                    variant="outlined"
                                    className="w-full"
                                />
                                <Button
                                    label="Select Membership"
                                    className="w-full"

                                />
                            </div>
                        </div>
                    </div>
                </Form>
            </div>
        </>

    );
}

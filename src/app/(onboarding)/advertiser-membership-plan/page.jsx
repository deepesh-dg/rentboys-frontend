import React from "react";
import Form from "@/components/auth-screens/Form";
// import MemberImg from "@/assets/img/member-user.png";
import MemberImg from "@/assets/img/advertiser.png";

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
                        <div className="w-full max-w-sm rounded-2xl bg-red-50">
                            <img
                                src={MemberImg}
                                alt="member_user"
                                className="h-full w-full max-w-sm"
                            />
                        </div>
                        <div className="flex max-w-sm flex-col justify-between gap-4">
                            <div className="space-y-2">
                                <h2 className="text-2xl font-bold uppercase">
                                    You are almost done!
                                </h2>
                                <p className="text-sm font-medium">
                                    To be the part of our community, be visible
                                    in searches and start receiving offers, you
                                    need to purchase membership plan and
                                    complete the other steps of your profile
                                    setup.
                                </p>
                                <p className="text-sm font-normal text-white/70">
                                    To increase your traffic to your account in
                                    the selected location, you can view our
                                    advertise offers.
                                </p>
                            </div>
                            <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
                                <Button
                                    children="Ill’ do it later"
                                    theme="white"
                                    variant="text"
                                    className="w-full rounded-xl text-base font-bold text-white"
                                    href="/dashboard"

                                />
                                <Button
                                    themes="red"
                                    variant="colored"
                                    children="Select Membership"
                                    className="w-full whitespace-nowrap rounded-xl text-base font-bold"
                                />
                            </div>
                        </div>
                    </div>
                </Form>
            </div>
        </>
    );
}

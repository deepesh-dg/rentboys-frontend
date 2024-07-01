import React from "react";
import Form from "@/components/auth-screens/Form";
import MemberImg from "@/assets/img/member-user.png";
import Button from "@/components/Button";
import BG_IMG from "@/assets/img/login-bg.png";
import Icons from "@/components/icons/Component";
import { ArrowDownIcon, CheckIcon, ClosecircleIcon, LineIcon, TickCircleRoundedIcon } from "@/components/icons/outline";

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
                <Form maxWidth="2xl" className="!gap-y-0 !px-4 !py-4 overflow-x-auto">
                    <div className="flex justify-between items-center w-full">
                        <h2 className="text-xl font-bold">Membership Plan</h2>
                        <Icons icon={ClosecircleIcon} className="w-5" />
                    </div>
                    <div className="grid grid-cols-5 bg-gray-100 rounded-xl p-4 my-1">
                        <div className="col-span-2">
                            <h2 className="font-medium text-xl">Features</h2>
                            <p className="text-gray-200">
                                Select the plan the best suits your need
                            </p>
                        </div>
                        <div className="col-span-1">
                            <h2 className="text-xl font-bold text-red-50">Basic</h2>
                            <p className="text-sm font-normal text-gray-200">Free All Time</p>
                            <Button
                                children="Current Plan"
                                theme="white"
                                variant="outlined"
                                size="xs"
                                className="text-xs rounded-md px-2 mt-1" />
                        </div>
                        <div className="col-span-1">
                            <h2 className="text-xl font-bold text-[#DEBA57]">Gold</h2>
                            <p className="text-sm font-normal text-gray-200">$699USD</p>
                            <Button
                                children="Upgrade"
                                variants=""
                                theme="white"
                                size="xs"
                                className="text-xs rounded-md px-2 mt-1 bg-[#DEBA57]" />
                        </div>
                        <div className="col-span-1">
                            <h2 className="text-xl font-bold text-red-50">Platinum</h2>
                            <p className="text-sm font-normal text-gray-200">$999USD</p>
                            <Button
                                children="Upgrade"
                                variants=""
                                theme="white"
                                size="xs"
                                className="text-xs rounded-md px-2 mt-1" />
                        </div>
                    </div>
                    <div className="grid grid-cols-5 w-full rounded-xl my-1 gap-2">
                        <div className="col-span-2 bg-gray-100 rounded-md flex items-center justify-between py-4 px-2 w-full">
                            <p className="font-medium">Search and Contact Performers</p>
                            <Icons icon={ArrowDownIcon} className="w-5" />
                        </div>
                        <div className="bg-gray-100 rounded-md col-span-3 flex w-full py-4 px-2">
                            <div className="col-span-1 w-full flex justify-center items-center">
                                <Icons icon={TickCircleRoundedIcon} className="w-5" />
                            </div>
                            <div className="col-span-1 w-full flex justify-center items-center">
                                <Icons icon={TickCircleRoundedIcon} className="w-5" />
                            </div>
                            <div className="col-span-1 w-full flex justify-center items-center">
                                <Icons icon={TickCircleRoundedIcon} className="w-5" />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-5 w-full rounded-xl my-1 gap-2">
                        <div className="col-span-2 bg-gray-100 rounded-md flex items-center justify-between py-4 px-2 w-full">
                            <p className="font-medium">Personal Page</p>
                            <Icons icon={ArrowDownIcon} className="w-5" />
                        </div>
                        <div className="bg-gray-100 rounded-md col-span-3 flex w-full py-4 px-2">
                            <div className="col-span-1 w-full flex justify-center items-center">
                                <Icons icon={TickCircleRoundedIcon} className="w-5" />
                            </div>
                            <div className="col-span-1 w-full flex justify-center items-center">
                                <Icons icon={TickCircleRoundedIcon} className="w-5" />
                            </div>
                            <div className="col-span-1 w-full flex justify-center items-center">
                                <Icons icon={TickCircleRoundedIcon} className="w-5" />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-5 w-full rounded-xl my-1 gap-2">
                        <div className="col-span-2 bg-gray-100 rounded-md flex items-center justify-between py-4 px-2 w-full">
                            <p className="font-medium">Messenger</p>
                            <Icons icon={ArrowDownIcon} className="w-5" />
                        </div>
                        <div className="bg-gray-100 rounded-md col-span-3 flex w-full py-4 px-2">
                            <div className="col-span-1 w-full flex justify-center items-center">
                                <Icons icon={LineIcon} className="w-5" />
                            </div>
                            <div className="col-span-1 w-full flex justify-center items-center">
                                <Icons icon={TickCircleRoundedIcon} className="w-5" />
                            </div>
                            <div className="col-span-1 w-full flex justify-center items-center">
                                <Icons icon={TickCircleRoundedIcon} className="w-5" />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-5 w-full rounded-xl my-1 gap-2">
                        <div className="col-span-2 bg-gray-100 rounded-md flex items-center justify-between py-4 px-2 w-full">
                            <p className="font-medium">Unlimited Video Access</p>
                            <Icons icon={ArrowDownIcon} className="w-5" />
                        </div>
                        <div className="bg-gray-100 rounded-md col-span-3 flex w-full py-4 px-2">
                            <div className="col-span-1 w-full flex justify-center items-center">
                                <Icons icon={LineIcon} className="w-5" />
                            </div>
                            <div className="col-span-1 w-full flex justify-center items-center">
                                <Icons icon={TickCircleRoundedIcon} className="w-5" />
                            </div>
                            <div className="col-span-1 w-full flex justify-center items-center">
                                <Icons icon={TickCircleRoundedIcon} className="w-5" />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-5 w-full rounded-xl my-1 gap-2">
                        <div className="col-span-2 bg-gray-100 rounded-md flex items-center justify-between py-4 px-2 w-full">
                            <p className="font-medium">View Premium Photos</p>
                            <Icons icon={ArrowDownIcon} className="w-5" />
                        </div>
                        <div className="bg-gray-100 rounded-md col-span-3 flex w-full py-4 px-2">
                            <div className="col-span-1 w-full flex justify-center items-center">
                                <Icons icon={LineIcon} className="w-5" />
                            </div>
                            <div className="col-span-1 w-full flex justify-center items-center">
                                <Icons icon={LineIcon} className="w-5" />
                            </div>
                            <div className="col-span-1 w-full flex justify-center items-center">
                                <Icons icon={TickCircleRoundedIcon} className="w-5" />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-5 w-full rounded-xl my-1 gap-2">
                        <div className="col-span-2 bg-gray-100 rounded-md flex items-center justify-between py-4 px-2 w-full">
                            <p className="font-medium">Review Submission</p>
                            <Icons icon={ArrowDownIcon} className="w-5" />
                        </div>
                        <div className="bg-gray-100 rounded-md col-span-3 flex w-full py-4 px-2">
                            <div className="col-span-1 w-full flex justify-center items-center">
                                <Icons icon={LineIcon} className="w-5" />
                            </div>
                            <div className="col-span-1 w-full flex justify-center items-center">
                                <Icons icon={LineIcon} className="w-5" />
                            </div>
                            <div className="col-span-1 w-full flex justify-center items-center">
                                <Icons icon={TickCircleRoundedIcon} className="w-5" />
                            </div>
                        </div>
                    </div>



                </Form>
            </div>
        </>
    );
}

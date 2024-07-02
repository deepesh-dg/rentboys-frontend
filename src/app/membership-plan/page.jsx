import React from "react";
import Form from "@/components/auth-screens/Form";
import MemberImg from "@/assets/img/member-user.png";
import Button from "@/components/Button";
import BG_IMG from "@/assets/img/login-bg.png";
import Icons from "@/components/icons/Component";
import {
    ArrowDownIcon,
    CheckIcon,
    ClosecircleIcon,
    LineIcon,
    TickCircleRoundedIcon,
} from "@/components/icons/outline";
import { useNavigate } from 'react-router-dom';

export default function Page() {
    const navigate = useNavigate();
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
                    className="!gap-y-0 overflow-x-auto !px-4 !py-4"
                >
                    <div className="flex w-full items-center justify-between">
                        <h2 className="text-xl font-bold">Membership Plan</h2>
                        <Icons icon={ClosecircleIcon} className="w-5 cursor-pointer" onClick={() => navigate('/')} />
                    </div>
                    <div className="my-1 grid grid-cols-5 rounded-xl bg-gray-100 p-4">
                        <div className="col-span-2">
                            <h2 className="text-xl font-medium">Features</h2>
                            <p className="text-gray-200">
                                Select the plan the best suits your need
                            </p>
                        </div>
                        <div className="col-span-1">
                            <h2 className="text-xl font-bold text-red-50">
                                Basic
                            </h2>
                            <p className="text-sm font-normal text-gray-200">
                                Free All Time
                            </p>
                            <Button
                                children="Current Plan"
                                theme="white"
                                variant="outlined"
                                size="xs"
                                className="mt-1 rounded-md px-2 text-xs"
                            />
                        </div>
                        <div className="col-span-1">
                            <h2 className="text-xl font-bold text-[#DEBA57]">
                                Gold
                            </h2>
                            <p className="text-sm font-normal text-gray-200">
                                $699USD
                            </p>
                            <Button
                                children="Upgrade"
                                variants=""
                                theme="white"
                                size="xs"
                                className="mt-1 rounded-md bg-[#DEBA57] px-2 text-xs"
                            />
                        </div>
                        <div className="col-span-1">
                            <h2 className="text-xl font-bold text-red-50">
                                Platinum
                            </h2>
                            <p className="text-sm font-normal text-gray-200">
                                $999USD
                            </p>
                            <Button
                                children="Upgrade"
                                variants=""
                                theme="white"
                                size="xs"
                                className="mt-1 rounded-md px-2 text-xs"
                            />
                        </div>
                    </div>
                    <div className="my-1 grid w-full grid-cols-5 gap-2 rounded-xl">
                        <div className="col-span-2 flex w-full items-center justify-between rounded-md bg-gray-100 px-2 py-4">
                            <p className="font-medium">
                                Search and Contact Performers
                            </p>
                            <Icons icon={ArrowDownIcon} className="w-5" />
                        </div>
                        <div className="col-span-3 flex w-full rounded-md bg-gray-100 px-2 py-4">
                            <div className="col-span-1 flex w-full items-center justify-center">
                                <Icons
                                    icon={TickCircleRoundedIcon}
                                    className="w-5"
                                />
                            </div>
                            <div className="col-span-1 flex w-full items-center justify-center">
                                <Icons
                                    icon={TickCircleRoundedIcon}
                                    className="w-5"
                                />
                            </div>
                            <div className="col-span-1 flex w-full items-center justify-center">
                                <Icons
                                    icon={TickCircleRoundedIcon}
                                    className="w-5"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="my-1 grid w-full grid-cols-5 gap-2 rounded-xl">
                        <div className="col-span-2 flex w-full items-center justify-between rounded-md bg-gray-100 px-2 py-4">
                            <p className="font-medium">Personal Page</p>
                            <Icons icon={ArrowDownIcon} className="w-5" />
                        </div>
                        <div className="col-span-3 flex w-full rounded-md bg-gray-100 px-2 py-4">
                            <div className="col-span-1 flex w-full items-center justify-center">
                                <Icons
                                    icon={TickCircleRoundedIcon}
                                    className="w-5"
                                />
                            </div>
                            <div className="col-span-1 flex w-full items-center justify-center">
                                <Icons
                                    icon={TickCircleRoundedIcon}
                                    className="w-5"
                                />
                            </div>
                            <div className="col-span-1 flex w-full items-center justify-center">
                                <Icons
                                    icon={TickCircleRoundedIcon}
                                    className="w-5"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="my-1 grid w-full grid-cols-5 gap-2 rounded-xl">
                        <div className="col-span-2 flex w-full items-center justify-between rounded-md bg-gray-100 px-2 py-4">
                            <p className="font-medium">Messenger</p>
                            <Icons icon={ArrowDownIcon} className="w-5" />
                        </div>
                        <div className="col-span-3 flex w-full rounded-md bg-gray-100 px-2 py-4">
                            <div className="col-span-1 flex w-full items-center justify-center">
                                <Icons icon={LineIcon} className="w-5" />
                            </div>
                            <div className="col-span-1 flex w-full items-center justify-center">
                                <Icons
                                    icon={TickCircleRoundedIcon}
                                    className="w-5"
                                />
                            </div>
                            <div className="col-span-1 flex w-full items-center justify-center">
                                <Icons
                                    icon={TickCircleRoundedIcon}
                                    className="w-5"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="my-1 grid w-full grid-cols-5 gap-2 rounded-xl">
                        <div className="col-span-2 flex w-full items-center justify-between rounded-md bg-gray-100 px-2 py-4">
                            <p className="font-medium">
                                Unlimited Video Access
                            </p>
                            <Icons icon={ArrowDownIcon} className="w-5" />
                        </div>
                        <div className="col-span-3 flex w-full rounded-md bg-gray-100 px-2 py-4">
                            <div className="col-span-1 flex w-full items-center justify-center">
                                <Icons icon={LineIcon} className="w-5" />
                            </div>
                            <div className="col-span-1 flex w-full items-center justify-center">
                                <Icons
                                    icon={TickCircleRoundedIcon}
                                    className="w-5"
                                />
                            </div>
                            <div className="col-span-1 flex w-full items-center justify-center">
                                <Icons
                                    icon={TickCircleRoundedIcon}
                                    className="w-5"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="my-1 grid w-full grid-cols-5 gap-2 rounded-xl">
                        <div className="col-span-2 flex w-full items-center justify-between rounded-md bg-gray-100 px-2 py-4">
                            <p className="font-medium">View Premium Photos</p>
                            <Icons icon={ArrowDownIcon} className="w-5" />
                        </div>
                        <div className="col-span-3 flex w-full rounded-md bg-gray-100 px-2 py-4">
                            <div className="col-span-1 flex w-full items-center justify-center">
                                <Icons icon={LineIcon} className="w-5" />
                            </div>
                            <div className="col-span-1 flex w-full items-center justify-center">
                                <Icons icon={LineIcon} className="w-5" />
                            </div>
                            <div className="col-span-1 flex w-full items-center justify-center">
                                <Icons
                                    icon={TickCircleRoundedIcon}
                                    className="w-5"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="my-1 grid w-full grid-cols-5 gap-2 rounded-xl">
                        <div className="col-span-2 flex w-full items-center justify-between rounded-md bg-gray-100 px-2 py-4">
                            <p className="font-medium">Review Submission</p>
                            <Icons icon={ArrowDownIcon} className="w-5" />
                        </div>
                        <div className="col-span-3 flex w-full rounded-md bg-gray-100 px-2 py-4">
                            <div className="col-span-1 flex w-full items-center justify-center">
                                <Icons icon={LineIcon} className="w-5" />
                            </div>
                            <div className="col-span-1 flex w-full items-center justify-center">
                                <Icons icon={LineIcon} className="w-5" />
                            </div>
                            <div className="col-span-1 flex w-full items-center justify-center">
                                <Icons
                                    icon={TickCircleRoundedIcon}
                                    className="w-5"
                                />
                            </div>
                        </div>
                    </div>
                </Form>
            </div>
        </>
    );
}

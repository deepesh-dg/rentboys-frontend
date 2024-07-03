import React from "react";
import BuddyActivityCard from "@/components/cards/BuddyActivityCard";
import Button from "@/components/Button";
import Icons from "@/components/icons/Component";
import {
    LocationIcon,
    EyeIcon,
    HeartIcon,
    ThreedotIcon,
} from "@/components/icons/solid";
import { ArrowRightIcon } from "@/components/icons/outline";
import LastSeenUser from "@/components/cards/LastSeenUser";
import InputSwitch from "@/components/Switch";
import { useAuth } from "@/state";
import { AccountStatus } from "@/constants";
import { useState } from "@/hooks";
import ChangePassword from "./ChangePassword";

export default function Dashboard() {
    const [openChangePassword, setOpenChangePassword] = useState(false);

    const { user } = useAuth();

    return (
        <div className="text-white md:pl-4">
            <div className="col-span-6 grid grid-cols-6 items-start gap-4">
                <div className="col-span-6 grid grid-cols-4 gap-4 space-y-2 md:space-y-0 xl:col-span-4">
                    <div className="col-span-4 flex items-center rounded-xl bg-gray-100 p-4 md:col-span-2">
                        <div className="flex items-start gap-x-1">
                            <Icons icon={LocationIcon} className="mt-1 w-8" />
                            <div className="font-medium">
                                <p className="text-base text-gray-200">
                                    My Location
                                </p>
                                <p className="text-lg text-white">
                                    {user.location}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 flex w-full rounded-xl bg-gray-100 p-4 md:col-span-2">
                        <div className="flex w-full items-center justify-between">
                            <div className="flex items-center gap-x-3">
                                <Icons icon={HeartIcon} className="mt-1 w-8" />
                                <div className="font-medium">
                                    <p className="text-lg text-white">
                                        Online Buddies
                                    </p>
                                </div>
                            </div>
                            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-50">
                                <span className="text-lg font-bold text-white">
                                    5
                                </span>
                            </div>
                        </div>
                    </div>
                    <h2 className="relative whitespace-nowrap font-medium after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:bg-custom-gradient">
                        Membership & Billing
                    </h2>
                    <div className="col-span-4 w-full">
                        <div className="rounded-xl bg-gray-100">
                            <div className="flex justify-between p-4">
                                <div className="space-y-1">
                                    <p className="text-lg font-medium text-gray-200">
                                        Current
                                    </p>
                                    <div className="flex items-center gap-x-2">
                                        <Button
                                            children="Basic"
                                            theme="white"
                                            variant="default"
                                            size="sm"
                                            className="rounded-md !py-0.5 px-4 text-base font-medium"
                                        />
                                        <span>Free</span>
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <Button
                                        children="Get Premium"
                                        variant="default"
                                        size="sm"
                                        className="rounded-xl px-6 text-base font-medium"
                                    />
                                    <p className="text-base font-medium">
                                        Only US $19.95/month
                                    </p>
                                </div>
                            </div>
                            <div className="mt-4 flex items-start justify-between border-t border-[#444444] p-4">
                                <div className="w-1/2">
                                    <p className="text-lg font-bold text-gray-200">
                                        Valid thru
                                    </p>
                                    <p>No Expiration</p>
                                </div>
                                <span className="mt-2 inline-block h-10 border border-[#444444]" />
                                <div className="relative flex w-1/2 items-center justify-between pl-4">
                                    <p className="text-lg font-bold text-gray-200">
                                        Next Billing Date
                                    </p>
                                    <div className="absoluteright-3 bottom-3">
                                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white">
                                            <Icons
                                                src={ThreedotIcon}
                                                className="w-5"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2 className="mb- relative w-full whitespace-nowrap font-medium after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:bg-custom-gradient">
                        Buddy Activity
                    </h2>
                    <div className="col-span-4 grid grid-cols-4 gap-x-4 gap-y-6">
                        <div className="col-span-4 rounded-xl bg-gray-100 md:col-span-2">
                            <BuddyActivityCard />
                        </div>
                        <div className="col-span-4 rounded-xl bg-gray-100 md:col-span-2">
                            <BuddyActivityCard />
                        </div>
                    </div>
                    <h2 className="mb- relative w-full whitespace-nowrap font-medium after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:bg-custom-gradient">
                        Who did I see
                    </h2>
                    <div className="col-span-4 grid grid-cols-4 gap-y-6">
                        <div className="col-span-2 grid rounded-xl md:col-span-1 sm-down:col-span-4">
                            <LastSeenUser />
                        </div>
                        <div className="col-span-2 grid rounded-xl md:col-span-1 sm-down:col-span-4">
                            <LastSeenUser />
                        </div>
                        <div className="col-span-2 grid rounded-xl md:col-span-1 sm-down:col-span-4">
                            <LastSeenUser />
                        </div>
                        <div className="col-span-2 grid rounded-xl md:col-span-1 sm-down:col-span-4">
                            <LastSeenUser />
                        </div>
                    </div>
                </div>
                <div className="col-span-6 space-y-6 text-white xl:col-span-2">
                    <h2 className="relative whitespace-nowrap font-medium after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-1/2 after:bg-custom-gradient">
                        Account Overview
                    </h2>
                    <div className="col-span-1 rounded-xl bg-gray-100 py-4">
                        <table className="ml-10">
                            <tbody>
                                <tr>
                                    <td className="whitespace-nowrap text-gray-200">
                                        User Name
                                    </td>
                                    <td className="whitespace-nowrap py-2 pl-8">
                                        {user.username}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="whitespace-nowrap text-gray-200">
                                        My Location
                                    </td>
                                    <td className="whitespace-nowrap py-2 pl-8">
                                        {user.location}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="whitespace-nowrap text-gray-200">
                                        Member ID
                                    </td>
                                    <td className="whitespace-nowrap py-2 pl-8">
                                        1210942
                                    </td>
                                </tr>
                                <tr>
                                    <td className="whitespace-nowrap text-gray-200">
                                        Contact Email
                                    </td>
                                    <td className="whitespace-nowrap py-2 pl-8">
                                        {user.email}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="my-8 border border-[#444444]"></div>
                        <table className="ml-10">
                            <tbody>
                                <tr className="mt-10">
                                    <td className="whitespace-nowrap text-gray-200">
                                        Current plan
                                    </td>
                                    <td className="whitespace-nowrap py-2 pl-8">
                                        Basic
                                    </td>
                                </tr>
                                <tr>
                                    <td className="whitespace-nowrap text-gray-200">
                                        Valid thru
                                    </td>
                                    <td className="whitespace-nowrap py-2 pl-8">
                                        No Expiration
                                    </td>
                                </tr>
                                <tr>
                                    <td className="whitespace-nowrap text-gray-200">
                                        Profile Status
                                    </td>
                                    <td className="whitespace-nowrap py-2 pl-8">
                                        {user.is_approved ===
                                        AccountStatus.APPROVED ? (
                                            <span className="text-green-500">
                                                Approved
                                            </span>
                                        ) : (
                                            ""
                                        )}
                                        {user.is_approved ===
                                        AccountStatus.PENDING ? (
                                            <span className="text-yellow-500">
                                                Pending
                                            </span>
                                        ) : (
                                            ""
                                        )}
                                        {user.is_approved ===
                                        AccountStatus.REJECTED ? (
                                            <span className="text-red-500">
                                                Rejected
                                            </span>
                                        ) : (
                                            ""
                                        )}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-span-1 my-4 rounded-xl bg-gray-100 p-2">
                        <button
                            onClick={() => setOpenChangePassword(true)}
                            type="button"
                            className="col-span-1 flex w-full items-center justify-between rounded-xl bg-gray-100 p-2"
                        >
                            <p>Change Password</p>
                            <span>
                                <Icons src={ArrowRightIcon} className="w-5" />
                            </span>
                        </button>
                    </div>
                    <h2 className="mb- relative font-medium after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-1/2 after:bg-custom-gradient">
                        Privacy Settings
                    </h2>
                    <div className="col-span-1 my-4 rounded-xl bg-gray-100 p-4">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center justify-between">
                                <Icons src={EyeIcon} className="w-10" />
                                {/* Toggler */}
                                <InputSwitch />
                            </div>
                            <p className="text-base font-medium">
                                Do not track me
                            </p>
                            <p className="text-sm font-normal">
                                Don't allow users to see if you've visited their
                                profile and keep the history of the profiles you
                                visit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {openChangePassword && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50">
                    <ChangePassword
                        close={() => setOpenChangePassword(false)}
                    />
                </div>
            )}
        </div>
    );
}

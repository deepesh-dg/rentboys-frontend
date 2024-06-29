import React from "react";
import BuddyActivityCard from "@/components/cards/BuddyActivityCard";
import Button from "@/components/Button";
import Icons from "@/components/icons/Component";
import { LocationIcon, EyeIcon, HeartIcon, ThreedotIcon } from "@/components/icons/solid";
import { ArrowRightIcon } from "@/components/icons/outline";
import LastSeenUser from "@/components/cards/LastSeenUser";

export default function Dashboard() {
    return (
        <div className="text-white md:pl-4">
            <div className="col-span-6 grid grid-cols-6 items-start gap-4">
                <div className="col-span-6 grid grid-cols-4 gap-4 space-y-2 md:space-y-0 xl:col-span-4">
                    <div className="col-span-4 rounded-xl bg-gray-100 p-4 md:col-span-2 flex items-center">
                        <div className="flex items-start gap-x-1">
                            <Icons icon={LocationIcon} className="mt-1 w-8" />
                            <div className="font-medium">
                                <p className="text-base text-gray-200">
                                    My Location
                                </p>
                                <p className="text-lg text-white">
                                    Ab-sarojni nagar, Delhi, India
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 rounded-xl bg-gray-100 p-4 md:col-span-2 flex w-full">
                        <div className="flex items-center justify-between w-full">
                            <div className="flex items-center gap-x-3">
                                <Icons icon={HeartIcon} className="mt-1 w-8" />
                                <div className="font-medium">
                                    <p className="text-lg text-white">
                                        Online Buddies
                                    </p>
                                </div>
                            </div>
                            <div className="bg-gray-50 w-7 h-7 rounded-full flex justify-center items-center">
                                <span className="text-white font-bold text-lg">5</span>
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
                                            className="rounded-md font-medium text-base px-4 !py-0.5"
                                        />
                                        <span>Free</span>
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <Button
                                        children="Get Premium"
                                        variant="default"
                                        size="sm"
                                        className="rounded-xl font-medium text-base px-6"
                                    />
                                    <p className="font-medium text-base">Only US $19.95/month</p>
                                </div>
                            </div>
                            <div className="mt-4 flex items-start justify-between border-t border-[#444444] p-4">
                                <div className="w-1/2">
                                    <p className="text-lg font-bold text-gray-200">
                                        Valid thru
                                    </p>
                                    <p>No Expiration</p>
                                </div>
                                <span className="inline-block border h-10 mt-2 border-[#444444]" />
                                <div className="relative w-1/2 pl-4 flex justify-between items-center">
                                    <p className="text-lg font-bold text-gray-200">
                                        Next Billing Date
                                    </p>
                                    <div className='absoluteright-3 bottom-3'>
                                        <div className='w-7 h-7 rounded-full bg-black text-white flex justify-center items-center'>
                                            <Icons src={ThreedotIcon} className='w-5' />
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
                        <div className="col-span-4 md:col-span-2 rounded-xl bg-gray-100">
                            <BuddyActivityCard />
                        </div>
                        <div className="col-span-4 md:col-span-2 rounded-xl bg-gray-100">
                            <BuddyActivityCard />

                        </div>
                    </div>
                    <h2 className="mb- relative w-full whitespace-nowrap font-medium after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:bg-custom-gradient">
                        Who did I see
                    </h2>
                    <div className="col-span-4 grid grid-cols-4 gap-y-6">
                        <div className="grid sm-down:col-span-4 col-span-2 md:col-span-1 rounded-xl">
                            <LastSeenUser />
                        </div>
                        <div className="grid sm-down:col-span-4 col-span-2 md:col-span-1 rounded-xl">
                            <LastSeenUser />
                        </div>
                        <div className="grid sm-down:col-span-4 col-span-2 md:col-span-1 rounded-xl">
                            <LastSeenUser />
                        </div>
                        <div className="grid sm-down:col-span-4 col-span-2 md:col-span-1 rounded-xl">
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
                                        Qwertyzxcasd
                                    </td>
                                </tr>
                                <tr>
                                    <td className="whitespace-nowrap text-gray-200">
                                        My Location
                                    </td>
                                    <td className="whitespace-nowrap py-2 pl-8">
                                        Delhi, India
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
                                        ra************42@g...
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
                                    <td className="whitespace-nowrap py-2 pl-8 text-green-500">
                                        Approved
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-span-1 my-4 rounded-xl bg-gray-100 p-2">
                        <div className="col-span-1 flex items-center justify-between rounded-xl bg-gray-100 p-2">
                            <p>Change Password</p>{" "}
                            <span>
                                <Icons src={ArrowRightIcon} className="w-5" />
                            </span>
                        </div>
                    </div>
                    <h2 className="mb- relative font-medium after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-1/2 after:bg-custom-gradient">
                        Privacy Settings
                    </h2>
                    <div className="col-span-1 my-4 rounded-xl bg-gray-100 p-4">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center justify-between">
                                <Icons src={EyeIcon} className="w-10" />
                                {/* Toggler */}
                            </div>
                            <p className="text-base font-medium">Do not track me</p>
                            <p className="text-sm font-normal">
                                Don't allow users to see if you've visited their
                                profile and keep the history of the profiles you
                                visit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

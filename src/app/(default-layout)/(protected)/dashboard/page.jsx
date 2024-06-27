import Icons from "@/components/icons/Component";
import { LocationIcon, EyeIcon } from "@/components/icons/solid";
import React from "react";
import Button from "@/components/Button";
import { ArrowRightIcon } from "@/components/icons/outline";

export default function Dashboard() {
    return (
        <div className="container text-white px-0 md:pl-4">
            <div className="col-span-6 grid grid-cols-6 items-start gap-4">
                <div className="col-span-6 grid grid-cols-4 gap-4 xl:col-span-4 space-y-2">
                    <div className="col-span-4 rounded-xl bg-gray-50 p-4 md:col-span-2">
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
                    <div className="col-span-4 rounded-xl bg-gray-50 p-4 md:col-span-2">
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
                    <h2 className="whitespace-nowrap relative mb- font-medium after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:bg-custom-gradient">
                        Membership & Billing
                    </h2>
                    <div className="col-span-4 w-full">
                        <div className="rounded-xl bg-gray-50">
                            <div className="flex justify-between p-4">
                                <div className="space-y-1">
                                    <p className="text-base text-gray-200">
                                        Current
                                    </p>
                                    <div className="flex items-center gap-x-2">
                                        <button className="rounded-md bg-white px-4 py-0.5 font-semibold text-black">
                                            Basic
                                        </button>
                                        <span>Free</span>
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <Button
                                        label="Get Premium"
                                        variant="default"
                                        size="sm"
                                    />
                                    <p>Only US $19.95/month</p>
                                </div>
                            </div>
                            <div className="mt-4 flex justify-between border-t border-[#444444] p-4">
                                <div className="">
                                    <p className="text-base text-gray-200">
                                        Valid thru
                                    </p>
                                    <p>No Expiration</p>
                                </div>
                                <div className="">
                                    <p className="text-base text-gray-200">
                                        Valid thru
                                    </p>
                                    <p>No Expiration</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2 className="whitespace-nowrap relative mb- w-full font-medium after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:bg-custom-gradient">
                        Buddy Activity
                    </h2>
                    <div className="col-span-4 grid grid-cols-4 gap-x-4">
                        <div className="col-span-2 rounded-xl bg-gray-50 p-4">
                            {/* UserCard */}
                        </div>
                        <div className="col-span-2 rounded-xl bg-gray-50 p-4">
                            {/* Slider */}
                        </div>
                    </div>
                </div>

                <div className="col-span-6 text-white xl:col-span-2 space-y-6">
                    <h2 className="whitespace-nowrap relative font-medium after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-1/2 after:bg-custom-gradient">
                        Account Overview
                    </h2>
                    <div className="col-span-1 rounded-xl bg-gray-50 p-2">
                        <table className="flex flex-col justify-cente items-center">
                            <tbody>
                                <tr>
                                    <td className="whitespace-nowrap text-gray-200">User Name</td>
                                    <td className="whitespace-nowrap py-2 pl-8">Qwertyzxcasd</td>
                                </tr>
                                <tr>
                                    <td className="whitespace-nowrap text-gray-200">My Location</td>
                                    <td className="whitespace-nowrap py-2 pl-8">Delhi, India</td>
                                </tr>
                                <tr>
                                    <td className="whitespace-nowrap text-gray-200">Member ID</td>
                                    <td className="whitespace-nowrap py-2 pl-8">1210942</td>
                                </tr>
                                <tr>
                                    <td className="whitespace-nowrap text-gray-200">Contact Email</td>
                                    <td className="whitespace-nowrap py-2 pl-8">ra************42@g...</td>
                                </tr>
                                <div className="mt-6 border h-2 border-gray-200"></div>

                                <tr className="mt-10">
                                    <td className="whitespace-nowrap text-gray-200">Current plan</td>
                                    <td className="whitespace-nowrap py-2 pl-8">Basic</td>
                                </tr>
                                <tr>
                                    <td className="whitespace-nowrap text-gray-200">Valid thru</td>
                                    <td className="whitespace-nowrap py-2 pl-8">No Expiration</td>
                                </tr>
                                <tr>
                                    <td className="whitespace-nowrap text-gray-200">Profile Status</td>
                                    <td className="whitespace-nowrap py-2 pl-8 text-green-500">Approved</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-span-1 rounded-xl bg-gray-50 p-2 my-4">
                        <div className="col-span-1 rounded-xl bg-gray-50 p-2 flex justify-between items-center">
                            <p>Change Password</p> <span><Icons src={ArrowRightIcon} className="w-5" /></span>
                        </div>
                    </div>
                    <h2 className="relative mb- font-medium after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-1/2 after:bg-custom-gradient">
                        Privacy Settings
                    </h2>
                    <div className="col-span-1 rounded-xl bg-gray-50 p-2 my-4">
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between items-center">
                                <Icons src={EyeIcon} className="w-8" />
                                {/* Toggler */}

                            </div>
                            <p className="text-base">Do not track me</p>
                            <p className="text-sm">Don't allow users to see if you've visited their profile and keep the history of the profiles you visit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

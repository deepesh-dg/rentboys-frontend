import Icons from "@/components/icons/Component";
import { LocationIcon, HeartIcon } from "@/components/icons/solid";
import React from "react";
import Button from "@/components/Button";

const userDetails = [
    { label: "User Name", value: "Qwertyzxcasd" },
    { label: "My Location", value: "Delhi, India" },
    { label: "Member ID", value: "1210942" },
    { label: "Contact Email", value: "ra************42@g..." },
    { label: "Current plan", value: "Basic" },
    { label: "Valid thru", value: "No Expiration" },
    { label: "Profile Status", value: "Approved" },
];
export default function Dashboard() {
    return (
        <div className="container text-white">
            <div className="col-span-6 grid grid-cols-6 items-start gap-4">
                <div className="col-span-6 grid grid-cols-4 gap-4 xl:col-span-4">
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

                    <div className="col-span-4 w-full">
                        <h2 className="relative mb-4 font-medium after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:bg-custom-gradient">
                            Membership & Billing
                        </h2>

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
                    <h2 className="relative mb-4 w-full font-medium after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:bg-custom-gradient">
                        Buddy Activity
                    </h2>
                    <div className="col-span-4 grid grid-cols-4 gap-x-4">
                        <div className="col-span-2 rounded-xl bg-gray-50 p-4">
                            {/* UserCard */}
                        </div>
                        <div className="col-span-2 rounded-xl bg-gray-50 p-4">
                            {/* UserCard */}
                        </div>
                    </div>
                </div>
                <div className="col-span-6 text-white xl:col-span-2">
                    <h2 className="relative mb-4 font-medium after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:bg-custom-gradient">
                        Account Overview
                    </h2>
                    <div className="col-span-1 rounded-xl bg-gray-50 p-2">
                        <table>
                            <tbody>
                                {userDetails.map((detail, index) => (
                                    <tr key={index}>
                                        <td className="whitespace-nowrap py-2 font-bold">
                                            {detail.label}
                                        </td>
                                        <td className="whitespace-nowrap py-2">
                                            {detail.value}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

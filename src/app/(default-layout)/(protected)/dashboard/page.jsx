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
    { label: "Profile Status", value: "Approved" }
];
export default function Dashboard() {
    return (
        <div className="container text-white">
            <div className="col-span-6 grid grid-cols-6 gap-4 items-start">
                <div className="col-span-4 grid grid-cols-4 gap-x-4">
                    <div className="col-span-2 bg-gray-50 p-4 rounded-xl">
                        <div className="flex items-start gap-x-1">
                            <Icons icon={LocationIcon} className="w-8 mt-1" />
                            <div className="font-medium">
                                <p className="text-gray-200 text-base">My Location</p>
                                <p className="text-white text-lg">Ab-sarojni nagar, Delhi, India</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 bg-gray-50 p-4 rounded-xl">
                        <div className="flex items-start gap-x-1">
                            <Icons icon={LocationIcon} className="w-8 mt-1" />
                            <div className="font-medium">
                                <p className="text-gray-200 text-base">My Location</p>
                                <p className="text-white text-lg">Ab-sarojni nagar, Delhi, India</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full col-span-4">
                        <h2 className="relative mb-4 font-medium after:absolute after:h-0.5 after:w-full after:-bottom-2 after:left-0 after:bg-custom-gradient">
                            Membership & Billing
                        </h2>

                        <div className="bg-gray-50 rounded-xl">
                            <div className="flex justify-between p-4">
                                <div className="space-y-1">
                                    <p className="text-gray-200 text-base">Current</p>
                                    <div className="flex items-center gap-x-2">
                                        <button className="bg-white text-black px-4 py-0.5 rounded-md font-semibold">Basic</button><span>Free</span>
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <Button label="Get Premium" variant="default" size="sm" />
                                    <p>Only US $19.95/month</p>

                                </div>
                            </div>
                            <div className="flex justify-between border-[#444444] border-t mt-4 p-4">
                                <div className="">
                                    <p className="text-gray-200 text-base">Valid thru</p>
                                    <p>No Expiration</p>
                                </div>
                                <div className="">
                                    <p className="text-gray-200 text-base">Valid thru</p>
                                    <p>No Expiration</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2 className="relative mb-4 font-medium after:absolute after:h-0.5 after:w-full after:-bottom-2 after:left-0 after:bg-custom-gradient w-full">
                        Buddy Activity
                    </h2>
                    <div className="col-span-4 grid grid-cols-4 gap-x-4">
                        <div className="col-span-2  bg-gray-50 p-4 rounded-xl">
                            {/* UserCard */}
                        </div>
                        <div className="col-span-2 bg-gray-50 p-4 rounded-xl">
                            {/* UserCard */}
                        </div>
                    </div>
                </div>
                <div className="col-span-2 text-white">
                    <h2 className="relative mb-4 font-medium after:absolute after:h-0.5 after:w-full after:-bottom-2 after:left-0 after:bg-custom-gradient">
                        Account Overview
                    </h2>
                    <div className="col-span-1 bg-gray-50 p-2 rounded-xl">
                        <table>
                            <tbody>
                                {userDetails.map((detail, index) => (
                                    <tr key={index}>
                                        <td className="py-2 whitespace-nowrap font-bold">{detail.label}</td>
                                        <td className="py-2 whitespace-nowrap">{detail.value}</td>
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

import React from "react";
import Image from "../Image";
import Icons from "@/components/icons/Component";
import { PentagonShapeIcon, ThreedotIcon } from "../icons/solid";
import ModelImg from "@/assets/img/model8.png";

const BuddyActivityCard = () => {
    return (
        <>
            <div className="relative flex flex-row gap-x-4 rounded-xl bg-gray-100 text-white">
                <div className="w-28 overflow-hidden rounded-md">
                    <Image src={ModelImg} className="rounded-md" />
                </div>
                <div className="mt-4 flex flex-col gap-2">
                    <div className="flex shrink-0 items-center gap-4">
                        <h2 className="text-base font-bold">HotMassageN</h2>
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-red-50" />
                        <p className="text-base font-medium">30Y/O</p>
                    </div>
                    <p className="text-sm">Has Changed His Current Locat...</p>
                    <div className="flex gap-x-2">
                        <Icons src={PentagonShapeIcon} className="w-4" />
                        <p className="text-sm">02 May 14:12</p>
                    </div>
                </div>
                <div className="absolute bottom-3 right-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white">
                        <Icons src={ThreedotIcon} className="w-5" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default BuddyActivityCard;

import React from "react";
import Image from "../Image";
import Icons from "@/components/icons/Component";
import { PentagonShapeIcon, ThreedotIcon } from "../icons/solid";
import ModelImg from "@/assets/img/model8.png";

const LastSeenUser = () => {
    return (
        <>
            <div className="relative">
                <Image src={ModelImg} />
                <div className="absolute right-3 top-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white">
                        <Icons src={ThreedotIcon} className="w-5" />
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 w-full bg-background px-4 py-2">
                    <h2 className="text-base font-bold">TeddyGBT</h2>
                    <p>Luanda, Angola</p>
                </div>
            </div>
        </>
    );
};

export default LastSeenUser;

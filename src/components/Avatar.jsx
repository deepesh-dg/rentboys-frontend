import { classNames } from "@/lib";
import React from "react";
import Image from "./Image";

export default function Avatar({ src, className, alt = "" }) {
    return (
        <div
            className={classNames(
                `relative mx-auto w-full overflow-hidden rounded-full pt-[100%]`,
                className
            )}
        >
            <div className="absolute inset-0 flex items-center justify-center">
                <Image src={src} alt={alt} />
            </div>
        </div>
    );
}

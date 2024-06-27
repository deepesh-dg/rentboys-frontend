import { useLoader } from "@/state";
import React from "react";

/**
 *
 * @param {{force?: boolean}} param0
 * @returns
 */
export default function GlobalLoader({ force = false }) {
    const { loader } = useLoader();

    if (loader.length === 0 && !force) return null;

    return (
        <div className="bg-grayv2-50/40 fixed inset-0 z-51 flex dark:bg-gray-950/40">
            <div className="flex h-full w-full items-center justify-center">
                <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-red-50 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]">
                    <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">
                        Loading...
                    </span>
                </div>
            </div>
        </div>
    );
}

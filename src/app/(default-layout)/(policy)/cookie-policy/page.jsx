import React from "react";
import { useLocation } from "react-router-dom";
import { pathToNameMapping } from "@/utils/pathMappings";

const Page = () => {
    const location = useLocation();
    const pathSegment = location.pathname.split("/")[1];
    const title = pathToNameMapping[pathSegment] || "Cookie Policy";

    return (
        <div className="w-full space-y-4 py-4">
            <h2 className="border-b border-gray-50 pb-1 text-xl font-bold text-red-50">
                {title}
            </h2>
        </div>
    );
};

export default Page;

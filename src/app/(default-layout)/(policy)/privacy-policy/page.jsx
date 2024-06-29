import React from "react";
import { useGlobalLoader } from "@/hooks";
import { useQuery } from "react-query";
import { ReactQueryKeys } from "@/constants";

import api from "@/services";
import parse from "html-react-parser";

const page = () => {
    const {
        data: { status, data } = {},
        error,
        isLoading,
    } = useQuery(
        ReactQueryKeys.CREATE_PROFILE_PAGE_CONTENT,
        () => api.common.getPrivacyPolicy(),
        {
            staleTime: Infinity,
        }
    );

    useGlobalLoader(isLoading);

    if (error || status === false) throw new Error(error?.message || "Error");

    if (isLoading) return null;
    return (
        <div className="w-full">
            <div className="text-white">{parse(data?.body || "")}</div>
        </div>
    );
};

export default page;

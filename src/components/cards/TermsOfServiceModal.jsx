import React from "react";
import { useGlobalLoader } from "@/hooks";
import { useQuery } from "react-query";
import { ReactQueryKeys } from "@/constants";
import api from "@/services";
import Modal from "@/components/Modal";

const TermsOfServiceModel = ({ isOpen, setIsOpen, close }) => {

    const {
        data: { status, data } = {},
        error,
        isLoading,
    } = useQuery(
        ReactQueryKeys.TERMS_OF_SERVICE_PAGE_CONTENT,
        () => api.common.getTermsAndConditions(),
        {
            staleTime: Infinity,
        }
    );

    useGlobalLoader(isLoading);

    if (error || status === false) throw new Error(error?.message || "Error");

    if (isLoading) return null;

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} close={close} data={data} />
    );
};



export default TermsOfServiceModel
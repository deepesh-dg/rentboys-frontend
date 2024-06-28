import React from "react";
import Form from "../Form";
import Icons from "../../icons/Component";
import Button from "../../Button";
import { CameraIcon } from "../../icons/outline";
import {
    ReactQueryKeys,
    SignupScreenSteps,
    acceptedFileTypes,
} from "@/constants";
import { useSignupScreenSteps } from "@/state";
import { useQuery } from "react-query";
import api from "@/services";
import Image from "@/components/Image";
import parse from "html-react-parser";
import { useSignup } from "@/state/context";
import { useBlobUrl, useGlobalLoader } from "@/hooks";

export default function UploadId() {
    const { setScreen } = useSignupScreenSteps();
    const {
        data: formData,
        errors: formErrors,
        formIds,
        setData,
        uploadId,
    } = useSignup();
    const {
        data: { status, data } = {},
        error,
        isLoading,
    } = useQuery(
        ReactQueryKeys.UPLOAD_ID_PAGE_CONTENT,
        () => api.common.getIdProofPageContent(),
        {
            staleTime: Infinity,
        }
    );

    useGlobalLoader(isLoading);

    const blobUrl = useBlobUrl(formData.id_proof);

    if (error || status === false) throw new Error(error?.message || "Error");

    if (isLoading) return null;

    return (
        <Form
            onSubmit={async e => {
                const status = await uploadId(e);

                if (status) setScreen(SignupScreenSteps.PHONE_NUMBER);
            }}
            title={data?.title}
            maxWidth="4xl"
            description={data?.short_description}
            className="!gap-y-4"
            error={formErrors.id_proof || formErrors.form}
        >
            <div className="flex w-full flex-col gap-x-4 md:flex-row md-down:gap-y-4">
                <div className="w-full border border-gray-300 bg-black md:w-2/5">
                    <div className="flex h-full w-full items-center justify-center">
                        <label
                            htmlFor={formIds.id_proof}
                            className="flex cursor-pointer flex-col items-center justify-center gap-y-4 md-down:min-h-60"
                        >
                            <input
                                type="file"
                                id={formIds.id_proof}
                                className="hidden"
                                accept={acceptedFileTypes.join(",")}
                                onChange={e => {
                                    const file = e.target.files[0];
                                    if (file) {
                                        setData(prev => {
                                            prev.id_proof = file;
                                        });
                                    }
                                }}
                            />
                            {blobUrl ? (
                                <Image src={blobUrl} />
                            ) : (
                                <>
                                    <Icons
                                        src={CameraIcon}
                                        className="mx-auto w-16"
                                    />
                                    <h2 className="text-xl md:text-2xl">
                                        Upload Your Id
                                    </h2>
                                </>
                            )}
                        </label>
                    </div>
                </div>
                <div className="w-full space-y-4 md:w-3/5">
                    <div className="reset text-white">
                        {parse(data?.description || "")}
                    </div>
                    <Image src={data?.image} className="w-full" />
                    <Button
                        children={formData.id_proof ? "Upload" : "Skip"}
                        type={formData.id_proof ? "submit" : "button"}
                        onClick={
                            formData.id_proof
                                ? undefined
                                : () => {
                                      setScreen(SignupScreenSteps.PHONE_NUMBER);
                                  }
                        }
                        className="w-full bg-red-100 px-20 py-4 text-xl font-bold uppercase hover:bg-red-50"
                    />
                </div>
            </div>
        </Form>
    );
}

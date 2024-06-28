import React, { useEffect } from "react";
import Icons from "@/components/icons/Component";
import Button from "@/components/Button";
import { UserUploadDpIcon } from "@/components/icons/solid";
import { useQuery } from "react-query";
import api from "@/services";
import parse from "html-react-parser";
import { useBlobUrl, useGlobalLoader } from "@/hooks";
import {
    FileUploadTypes,
    ReactQueryKeys,
    acceptedImageTypes,
} from "@/constants";
import Avatar from "@/components/Avatar";
import { useProfile } from "@/state/context";

const Step1 = ({
    addOnSkip,
    addOnNext,
    removeOnSkip,
    removeOnNext,
    setCurrentStep,
}) => {
    const {
        data: { status, data } = {},
        error,
        isLoading,
    } = useQuery(
        ReactQueryKeys.CREATE_PROFILE_PAGE_CONTENT,
        () => api.common.getCreateProfilePageContent(),
        {
            staleTime: Infinity,
        }
    );

    const { data: formData, setData, uploadProfilePicture } = useProfile();

    const blobUrl = useBlobUrl(formData.profile_file);

    useGlobalLoader(isLoading);

    useEffect(() => {
        const i = addOnSkip(() => setCurrentStep(prev => prev + 1));
        const j = addOnNext(uploadProfilePicture);

        return () => {
            removeOnSkip(i);
            removeOnNext(j);
        };
    }, [uploadProfilePicture]);

    if (error || status === false) throw new Error(error?.message || "Error");

    if (isLoading) return null;

    return (
        <div className="flex-grow px-4">
            {!isLoading && (
                <div className="flex flex-col items-start justify-start gap-x-10 gap-y-5 md:flex-row">
                    <div className="flex min-h-80 w-full items-center justify-center border border-gray-300 bg-black md:w-1/4">
                        <div className="flex flex-col items-center justify-center gap-y-4">
                            <label
                                htmlFor="profile-photo"
                                className="cursor-pointer"
                            >
                                <input
                                    type="file"
                                    id="profile-photo"
                                    className="hidden"
                                    accept={acceptedImageTypes.join(",")}
                                    onChange={e => {
                                        const file = e.target.files[0];
                                        if (file) {
                                            setData(prev => {
                                                prev.profile_file = file;
                                            });
                                        }
                                    }}
                                />
                                {blobUrl ? (
                                    <div className="w-40">
                                        <Avatar src={blobUrl} />
                                    </div>
                                ) : (
                                    <Icons
                                        src={UserUploadDpIcon}
                                        className="mx-auto w-40"
                                    />
                                )}
                            </label>
                            <Button
                                label={`${formData.profile_file ? "Change" : "Select"} Your Id`}
                                variant="colored"
                                size="sm"
                                onClick={() => {
                                    document
                                        .getElementById("profile-photo")
                                        ?.click();
                                }}
                            />
                        </div>
                    </div>
                    <div className="w-full space-y-6 md:w-3/4">
                        <div className="reset text-white">
                            {parse(data?.description || "")}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Step1;

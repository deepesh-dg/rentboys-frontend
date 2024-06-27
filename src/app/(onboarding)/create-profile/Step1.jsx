import React from "react";
import Icons from "@/components/icons/Component";
import Button from "@/components/Button";
import { UserUploadDpIcon } from "@/components/icons/solid";
import { useQuery } from "react-query";
import api from "@/services";
import parse from "html-react-parser";
import { useBlobUrl } from "@/hooks";
import {
    FileUploadTypes,
    ReactQueryKeys,
    acceptedImageTypes,
} from "@/constants";
import Image from "@/components/Image";

const Step1 = () => {
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

    const [file, setFile] = React.useState(null);

    const blobUrl = useBlobUrl(file);

    const submit = async () => {
        if (file) {
            api.common.uploadFile(FileUploadTypes.USER_PROFILE, file);
        }
    };

    if (error || status === false) throw new Error(error?.message || "Error");

    return (
        <div className="container flex-grow">
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
                                            setFile(file);
                                        }
                                    }}
                                />
                                {blobUrl ? (
                                    <div className="mx-auto h-40 w-40 overflow-hidden rounded-full">
                                        <Image src={blobUrl} />
                                    </div>
                                ) : (
                                    <Icons
                                        src={UserUploadDpIcon}
                                        className="mx-auto w-40"
                                    />
                                )}
                            </label>
                            <Button
                                label={`${file ? "Upload" : "Select"} Your Id`}
                                variant="colored"
                                size="sm"
                                onClick={
                                    file
                                        ? submit
                                        : () => {
                                              document
                                                  .getElementById(
                                                      "profile-photo"
                                                  )
                                                  ?.click();
                                          }
                                }
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

import Button from "@/components/Button";
import Image from "@/components/Image";
import Form from "@/components/auth-screens/Form";
import Icons from "@/components/icons/Component";
import { CameraIcon } from "@/components/icons/outline";
import {
    FileUploadTypes,
    ReactQueryKeys,
    acceptedFileTypes,
} from "@/constants";
import { useBlobUrl, useForm, useGlobalLoader } from "@/hooks";
import api from "@/services";
import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import BG_IMG from "@/assets/img/login-bg.png";
import parse from "html-react-parser";
import { useMetadata } from "@/state";

export default function UploadId() {
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

    const { formData, formErrors, handleSubmit, setFormData, loader } = useForm(
        {
            /** @type {File | null} */
            id_proof: null,
        }
    );
    const navigate = useNavigate();
    const { closeUploadIdModel } = useMetadata();

    useGlobalLoader(isLoading || loader);

    const blobUrl = useBlobUrl(formData.id_proof);

    const submit = handleSubmit(
        async data => {
            const response = await api.common.uploadFile(
                FileUploadTypes.USER_DOC,
                data.id_proof
            );

            if (!response.status) throw response;

            const response2 = await api.profile.updateIdProof(
                response.data.upload_path
            );

            if (!response2.status) throw response2;

            closeUploadIdModel();
            navigate("/dashboard");
        },
        data => {
            const errors = {};

            if (!data.id_proof)
                errors.id_proof = ["Please upload your ID proof"];

            if (Object.keys(errors).length > 0) throw { errors };
        }
    );

    if (error || status === false) throw new Error(error?.message || "Error");

    if (isLoading) return null;

    return (
        <div className="relative flex min-h-screen w-full flex-col items-center justify-center py-20">
            <div
                className="absolute inset-0 h-full w-full bg-cover bg-no-repeat blur-[9px]"
                style={{
                    backgroundImage: `url(${BG_IMG})`,
                }}
            />
            <Form
                onSubmit={submit}
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
                                htmlFor="formIds.id_proof"
                                className="flex cursor-pointer flex-col items-center justify-center gap-y-4 md-down:min-h-60"
                            >
                                <input
                                    type="file"
                                    id="formIds.id_proof"
                                    className="hidden"
                                    accept={acceptedFileTypes.join(",")}
                                    onChange={e => {
                                        const file = e.target.files[0];
                                        if (file) {
                                            setFormData(prev => {
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
                            children="Upload"
                            type="submit"
                            className="w-full rounded-xl text-xl font-bold uppercase"
                        />
                    </div>
                </div>
            </Form>
        </div>
    );
}

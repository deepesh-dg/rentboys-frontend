import React, { useState } from "react";
import Button from "@/components/Button";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { useQuery } from "react-query";
import api from "@/services";
import { ReactQueryKeys } from "@/constants";
import { useGlobalLoader } from "@/hooks";
import { ProfileProvider } from "@/state/context";

export default function Profile() {
    const [currentStep, setCurrentStep] = useState(0);
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
    const [loader, setLoader] = useState(false);

    const onSkipRefs = React.useRef([]);
    const onNextRefs = React.useRef([]);

    const handleNextClick = async () => {
        setLoader(() => true);
        await Promise.all(onNextRefs.current.map(ref => ref()));
        setLoader(() => false);
        setCurrentStep(prevStep => prevStep + 1);
    };

    const handlePrevClick = () => {
        setCurrentStep(prevStep => prevStep - 1);
    };

    const handleSkipClick = async () => {
        setLoader(() => true);
        await Promise.all(onSkipRefs.current.map(ref => ref()));
        setLoader(() => false);
    };

    const addOnSkip = cb => {
        onSkipRefs.current.push(cb);
        return onSkipRefs.current.indexOf(cb);
    };

    const addOnNext = cb => {
        onNextRefs.current.push(cb);
        return onNextRefs.current.indexOf(cb);
    };

    const removeOnSkip = index => {
        onSkipRefs.current.splice(index, 1);
    };

    const removeOnNext = index => {
        onNextRefs.current.splice(index, 1);
    };

    const renderStep = () => {
        switch (currentStep) {
            case 0:
                return (
                    <Step1
                        addOnSkip={addOnSkip}
                        addOnNext={addOnNext}
                        removeOnSkip={removeOnSkip}
                        removeOnNext={removeOnNext}
                        setCurrentStep={setCurrentStep}
                    />
                );
            case 1:
                return <Step2 />;
            case 2:
                return <Step3 />;
            default:
                return null;
        }
    };

    useGlobalLoader(isLoading || loader);

    if (error || status === false) throw new Error(error?.message || "Error");

    return (
        <ProfileProvider>
            <div className="flex min-h-screen flex-col bg-gray-100 text-white">
                {!isLoading && (
                    <>
                        <div className="relative mb-10 py-6">
                            <h1 className="relative text-center text-3xl font-medium after:absolute after:-bottom-5 after:left-0 after:h-1 after:w-full after:bg-custom-gradient">
                                {data?.title}
                            </h1>
                        </div>
                        {renderStep()}
                        <div className="bg-red-100 py-2">
                            <div className="container flex justify-between">
                                <Button
                                    label="Skip"
                                    variant="text"
                                    size="xs"
                                    onClick={handleSkipClick}
                                />
                                <div className="flex gap-x-10">
                                    {currentStep > 0 && (
                                        <Button
                                            label="Prev"
                                            variant="text"
                                            size="xs"
                                            onClick={handlePrevClick}
                                        />
                                    )}
                                    <Button
                                        href={
                                            currentStep >= 2
                                                ? "/membership-plan"
                                                : undefined
                                        }
                                        label="Next"
                                        variant="text"
                                        size="xs"
                                        onClick={
                                            currentStep >= 2
                                                ? undefined
                                                : handleNextClick
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </ProfileProvider>
    );
}

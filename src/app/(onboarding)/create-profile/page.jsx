import React, { useState } from "react";
import Button from '@/components/Button';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';


export default function Profile() {
    const [currentStep, setCurrentStep] = useState(0);

    const handleNextClick = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    };

    const handlePrevClick = () => {
        setCurrentStep((prevStep) => prevStep - 1);
    };

    const renderStep = () => {
        switch (currentStep) {
            case 0:
                return <Step1 />;
            case 1:
                return <Step2 />;
            case 2:
                return <Step3 />;
            default:
                return null;
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-100 text-white">
            <div className="relative mb-10 py-6">
                <h1 className="relative text-3xl font-medium text-center after:absolute after:h-1 after:w-full after:-bottom-5 after:left-0 after:bg-custom-gradient">
                    Create Your Profile
                </h1>
            </div>
            {renderStep()}
            <div className="py-2 bg-red-100">
                <div className="container flex justify-between">
                    <Button
                        label="Skip"
                        variant="text"
                        size="xs"
                    // onClick={handleSkip}
                    />
                    <div className="flex gap-x-10">
                        <Button
                            label="Prev"
                            variant="text"
                            size="xs"
                            onClick={handlePrevClick}
                            disabled={currentStep === 0}
                        />
                        {/* {currentStep >= 2 ? null : ( */}
                        <Button
                            label="Next"
                            variant="text"
                            size="xs"
                            onClick={handleNextClick}
                        />
                        {/* )} */}
                    </div>
                </div>
            </div>
        </div>
    );
}

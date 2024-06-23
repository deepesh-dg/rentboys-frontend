// import React from "react";
// import Icons from "@/components/icons/Component";
// import Button from '@/components/Button';
// import { UserUploadDpIcon } from "@/components/icons/solid";


// export default function Profile() {
//     return (
//         <div className="flex flex-col min-h-screen bg-gray-100 text-white">
//             <div className="relative mb-10 py-6">
//                 <h1 className="relative text-3xl font-medium text-center after:absolute after:h-1 after:w-full after:-bottom-5 after:left-0 after:bg-custom-gradient">
//                     Create Your Profile
//                 </h1>
//             </div>
//             <div className="container flex-grow">
//                 <div className="flex flex-col md:flex-row justify-start items-start gap-x-10 gap-y-5">
//                     <div className="w-full md:w-1/4 flex justify-center items-center min-h-80 bg-black border border-gray-300">
//                         <div className='flex flex-col justify-center gap-y-4 items-center'>
//                             <Icons src={UserUploadDpIcon} className="w-40 mx-auto" />
//                             <Button
//                                 label="Upload Your Id"
//                                 variant="colored"
//                                 size="sm"
//                             />
//                         </div>
//                     </div>
//                     <div className='w-full md:w-3/4 space-y-6'>
//                         <div className="space-y-1">
//                             <h2 className='font-semibold text-2xl'>Photo rules</h2>
//                             <p className="text-base">
//                                 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//                             </p>
//                         </div>
//                         <div className="space-y-1">
//                             <h2 className='font-semibold text-2xl'>Accepted</h2>
//                             <ul className="ml-6 list-disc space-y-1 text-base">
//                                 <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
//                                 <li>Ut sed urna a metus scelerisque egestas molestie sed dolor.</li>
//                                 <li>Donec a ligula vel ante bibendum lobortis.</li>
//                                 <li>Morbi sed est quis ex tincidunt mollis.</li>
//                                 <li>Mauris hendrerit velit a aliquet malesuada.</li>
//                             </ul>
//                         </div>
//                         <div className="space-y-1">
//                             <h2 className='font-semibold text-2xl'>Not Accepted</h2>
//                             <ul className="ml-6 list-disc space-y-1 text-base">
//                                 <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
//                                 <li>Ut sed urna a metus scelerisque egestas molestie sed dolor.</li>
//                                 <li>Donec a ligula vel ante bibendum lobortis.</li>
//                                 <li>Morbi sed est quis ex tincidunt mollis.</li>
//                                 <li>Mauris hendrerit velit a aliquet malesuada.</li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="py-2 bg-red-100">
//                 <div className="container flex justify-between">
//                     <Button
//                         label="Skip"
//                         variant="text"
//                         size="xs"
//                     />
//                     <Button
//                         label="Next"
//                         variant="text"
//                         size="xs"
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// }

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
                    // disabled={currentStep === 0}
                    />
                    <div className="flex gap-x-10">
                        <Button
                            label="Prev"
                            variant="text"
                            size="xs"
                            onClick={handlePrevClick}
                            disabled={currentStep === 0}
                        />
                        <Button
                            label="Next"
                            variant="text"
                            size="xs"
                            onClick={handleNextClick}
                        />


                    </div>
                </div>
            </div>
        </div>
    );
}

import React from 'react';
import Icons from "@/components/icons/Component";
import Button from '@/components/Button';
import { UserUploadDpIcon } from "@/components/icons/solid";

const Step1 = () => {
    return (
        <div className="container flex-grow">
            <div className="flex flex-col md:flex-row justify-start items-start gap-x-10 gap-y-5">
                <div className="w-full md:w-1/4 flex justify-center items-center min-h-80 bg-black border border-gray-300">
                    <div className='flex flex-col justify-center gap-y-4 items-center'>
                        <Icons src={UserUploadDpIcon} className="w-40 mx-auto" />
                        <Button
                            label="Upload Your Id"
                            variant="colored"
                            size="sm"
                        />
                    </div>
                </div>
                <div className='w-full md:w-3/4 space-y-6'>
                    <div className="space-y-1">
                        <h2 className='font-semibold text-2xl'>Photo rules</h2>
                        <p className="text-base">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </div>
                    <div className="space-y-1">
                        <h2 className='font-semibold text-2xl'>Accepted</h2>
                        <ul className="ml-6 list-disc space-y-1 text-base">
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Ut sed urna a metus scelerisque egestas molestie sed dolor.</li>
                            <li>Donec a ligula vel ante bibendum lobortis.</li>
                            <li>Morbi sed est quis ex tincidunt mollis.</li>
                            <li>Mauris hendrerit velit a aliquet malesuada.</li>
                        </ul>
                    </div>
                    <div className="space-y-1">
                        <h2 className='font-semibold text-2xl'>Not Accepted</h2>
                        <ul className="ml-6 list-disc space-y-1 text-base">
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Ut sed urna a metus scelerisque egestas molestie sed dolor.</li>
                            <li>Donec a ligula vel ante bibendum lobortis.</li>
                            <li>Morbi sed est quis ex tincidunt mollis.</li>
                            <li>Mauris hendrerit velit a aliquet malesuada.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Step1;

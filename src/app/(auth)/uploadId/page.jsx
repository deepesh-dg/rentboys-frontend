import React from 'react';
import Form from '../components/Form';
import Icons from "@/components/icons/Component";
import Button from '@/components/Button';
import { CameraIcon } from "@/components/icons/outline";
import { FakeDocument } from "@/components/icons/solid";

export default function Page() {

    const handleSubmit = () => {
        // handle form submission
    };

    return (
        <Form
            title="Upload ID"
            maxWidth="4xl"
            className="!gap-y-4"
        >
            <p className='text-base font-normal'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
            <div className='flex flex-col md:flex-row gap-x-4 md-down:gap-y-4 w-full'>
                <div className='bg-black border border-gray-300 w-full md:w-2/5'>
                    <div className='w-full flex justify-center items-center h-full'>
                        <div className='md-down:min-h-60 flex flex-col justify-center gap-y-4 items-center'>
                            <Icons src={CameraIcon} className="w-16 mx-auto" />
                            <h2 className='text-xl md:text-2xl'>Upload Your Id</h2>
                        </div>
                    </div>
                </div>
                <div className='space-y-4 w-full md:w-3/5'>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <ul className='[&>li]:ml-4 list-disc' >
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Nullam auctor diam et velit tempus, a porta diam convallis.</li>
                        <li>Etiam mollis ex vel mauris viverra fringilla.</li>
                    </ul>
                    <Icons src={FakeDocument} className="w-full" />
                    <Button label="Skip" className="bg-red-100 w-full hover:bg-red-50 py-4 px-20 uppercase font-bold text-xl" />
                </div>
            </div>
        </Form>
    );
};


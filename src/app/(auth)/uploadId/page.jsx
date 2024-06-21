import React from 'react'
import Icons from "@/components/icons/Component";
import { CameraIcon } from "@/components/icons/outline";
import { FakeDocument } from "@/components/icons/solid";
import Button from '@/components/Button'

const page = () => {
    return (
        <div
            className="z-1 flex w-full max-w-3xl flex-col gap-y-6 items-center rounded-2xl border border-dark bg-black/80 px-4 py-12 text-white md:px-16 shadow-sm">
            <h1 className="relative font-fira-sans text-2xl font-normal text-white before:absolute before:-bottom-2 before:left-6 before:w-6 before:border-2 before:border-red-50 after:absolute after:-bottom-2 after:right-6 after:w-6 after:border-2 after:border-red-50">
                Upload ID
            </h1>
            <p className='text-base font-normal'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
            <div className='flex flex-col md:flex-row gap-x-4 md-down:gap-y-4'>
                <div className='bg-black border border-[#303030] w-full'>
                    <div className='w-full flex justify-center items-center h-full'>
                        <div className='md-down:min-h-60 flex flex-col justify-center gap-y-4 items-center'>
                            <Icons src={CameraIcon} className="w-16 mx-auto" />
                            <h2 className='text-xl md:text-2xl'>Upload Your Id</h2>
                        </div>
                    </div>
                </div>
                <div className='space-y-4'>
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
        </div>
    )
}

export default page
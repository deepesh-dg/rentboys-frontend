import React from 'react'
import Icons from "@/components/icons/Component";
import { PasswordIcon } from "@/components/icons/outline";
import Button from '@/components/Button'
import Image from "@/components/Image";
import Man1 from "@/assets/img/landing-manVector.png"

const page = () => {
    return (
        <div
            className="z-1 flex w-full max-w-3xl flex-col gap-y-6 items-center rounded-2xl border border-dark bg-black/80 px-4 py-12 text-white md:px-16 shadow-sm">
            <h1 className="relative font-fira-sans text-2xl font-normal text-white before:absolute before:-bottom-2 before:left-5 before:w-6 before:border-2 before:border-red-50 after:absolute after:-bottom-2 after:right-5 after:w-6 after:border-2 after:border-red-50">
                Login
            </h1>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, eos!
            </p>
            <div className='md:flex gap-x-4'>
                <div className='bg-black border border-[#5F5F5F] w-full'>
                    <div className='w-full flex justify-center items-center h-full'>
                        <div className='md-down:min-h-60 flex flex-col justify-center items-center'>
                            <Icons src={PasswordIcon} className="w-10 mx-auto" />
                            <h2 className='text-xl md:text-2xl'>Upload User Id</h2>
                        </div>
                    </div>
                </div>
                <div className='space-y-4'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, molestias.
                    </p>
                    <ul className='[&>li]:ml-4 list-disc' >
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, molestias.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, molestias.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, molestias.</li>
                    </ul>
                    <Image src={Man1} className="w-10" />
                    <Button label="Skip" className="bg-red-100 w-full hover:bg-red-50 py-4 px-20 uppercase font-bold text-xl" />

                </div>
            </div>
        </div>
    )
}

export default page
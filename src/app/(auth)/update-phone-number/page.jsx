import React from 'react'
import Input from '@/components/common/Input/Input'
import { LocationIcon, PasswordIcon } from '@/components/icons/outline'
import Button from '@/components/Button'

const page = () => {
    return (
        <div
            className="z-1 flex w-full max-w-xl flex-col items-center rounded-2xl border border-dark bg-black/80 px-4 py-12 text-white md:px-16 shadow-sm"
        >
            <h1 className='font-fira-sans text-white font-normal text-2xl relative before:absolute before:-bottom-2 before:left-7 before:w-6 before:border-2 before:border-red-50 after:absolute after:-bottom-2 after:right-7 after:w-6 after:border-2 after:border-red-50'>Phone no.</h1>
            <div className='w-full flex flex-col gap-y-4 py-10'>
                <Input icon={LocationIcon} type="email" placeholder="Enter your location/Current Location" />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <Button label="Next" className="bg-red-100 hover:bg-red-50 py-4 uppercase font-bold text-xl" />
            </div>
        </div>
    )
}

export default page
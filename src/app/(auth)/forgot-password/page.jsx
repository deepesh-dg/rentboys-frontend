import React from 'react'
import Button from '@/components/Button'
import { MailIcon } from "@/components/icons/outline";
import Input from "@/components/common/Input/Input";

const page = () => {
    return (
        <div
            className="z-1 flex w-full max-w-xl flex-col gap-y-6 items-center rounded-2xl border border-dark bg-black/80 px-4 py-12 text-white md:px-16 shadow-sm">
            <div className='flex flex-col items-center'>
                <h1 className='font-fira-sans text-white font-normal text-2xl'>Forgot Password</h1>
                <p className='text-gray-200 text-center mt-2'>
                    Enter the email address associated with your RentBoys profile and we'll send you a link to recover your access.
                </p>
                <span className='w-10 h-1 my-2 inline-block bg-red-50'></span>
            </div>
            <Input
                icon={MailIcon}
                type="email"
                placeholder="example@email.com"
            />
            <Button label="Send" className="bg-red-100 w-full hover:bg-red-50 py-4 px-20 uppercase font-bold text-xl" />
        </div>
    )
}

export default page
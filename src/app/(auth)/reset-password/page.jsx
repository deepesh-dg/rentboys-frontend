import React from 'react'
import Button from '@/components/Button'
import Input from "@/components/common/Input/Input";
import { PasswordIcon } from "@/components/icons/outline";

const page = () => {
    return (
        <div
            className="z-1 flex w-full max-w-xl flex-col gap-y-6 items-center rounded-2xl border border-dark bg-black/80 px-4 py-12 text-white md:px-16"
            style={{
                boxShadow: "0px 4px 50.6px 0px #D8000040",
            }}>
            <h1 className='font-fira-sans text-white font-normal text-2xl'>Reset Password</h1>
            <div className='flex flex-col items-center'>
                <p className='text-gray-200 text-center'>
                    Enter the email address associated with the Rentboys
                </p>
                <span className='w-20 h-1 my-2 inline-block bg-red-50'></span>
            </div>
            <Input
                icon={PasswordIcon}
                type="password"
                placeholder="New Password"
            />
            <Input
                icon={PasswordIcon}
                type="password"
                placeholder="Confirm Password"
            />
            <Button label="Submit" className="bg-red-100 w-full hover:bg-red-50 py-4 px-20 uppercase font-bold text-xl" />
        </div>
    )
}

export default page
import React from 'react'
import Button from '@/components/Button'
import Input from "@/components/common/Input/Input";
import { PasswordIcon } from "@/components/icons/outline";

const page = () => {
    return (
        <div
            className="z-1 flex w-full max-w-xl flex-col gap-y-6 items-center rounded-2xl border border-dark bg-black/80 px-4 py-12 text-white md:px-16 shadow-sm">
            <h1 class="mb-2 relative font-fira-sans text-2xl font-normal text-white text-center before:content-[''] before:absolute before:-bottom-2 before:left-1/2 before:w-6 before:border-2 before:border-red-50 before:transform before:-translate-x-full after:content-[''] after:absolute after:-bottom-2 after:right-1/2 after:w-6 after:border-2 after:border-red-50 after:transform after:translate-x-full">
                Reset Password
            </h1>
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
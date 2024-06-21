import React from 'react'
import Button from '@/components/Button'
import { Link } from 'react-router-dom'
import { MailIcon, UserIcon, PasswordIcon } from '@/components/icons/outline'
import Input from '@/components/common/Input/Input'

const signup = () => {
    return (
        <div
            className="z-1 flex w-full max-w-xl flex-col items-center rounded-2xl border border-dark bg-black/80 px-4 py-12 text-white md:px-16"
            style={{
                boxShadow: "0px 4px 50.6px 0px #D8000040",
            }}
        >
            <h1 className='font-fira-sans text-white font-normal text-2xl relative before:absolute before:-bottom-2 before:left-5 before:w-6 before:border-2 before:border-red-50 after:absolute after:-bottom-2 after:right-5 after:w-6 after:border-2 after:border-red-50'>Sign Up</h1>
            <div className='w-full flex flex-col gap-y-4 py-10'>
                <Input icon={MailIcon} type="email" placeholder="example@email.com" />
                <Input icon={UserIcon} type="text" placeholder="Username" />
                <Input icon={PasswordIcon} type="password" placeholder="Password" />
                <div className='flex gap-x-2 items-center'><input type='checkbox' /><span className='text-sm font-thin'>Accept T&C</span></div>
                <Button label="Sign Up" className="bg-red-100 hover:bg-red-50 py-4" />
            </div>
            <p className='text-white text-center text-xs'>Already have an account ?&nbsp;
                <Link to="/login"><span className='underline text-red-50 font-bold'>LOGIN HERE</span></Link>
            </p>
        </div>
    )
}

export default signup
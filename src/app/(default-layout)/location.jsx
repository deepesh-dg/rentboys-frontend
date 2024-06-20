import React from 'react'
import BG_IMG from "@/assets/img/login-bg.png"
import Button from '@/components/Button'
import { Link } from 'react-router-dom'
import Input from '@/components/common/Input/Input'
import { LocationIcon, PasswordIcon } from '@/components/icons/outline'

const location = () => {
    return (
        <>
            <div className='w-full h-screen relative bg-cover bg-no-repeat bg-center blur-sm'
                style={{
                    backgroundImage: `url(${BG_IMG})`
                }}
            >
            </div>
            <div className='md:container w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <div className='w-full max-w-xl mx-auto py-12 px-4 md:px-16 text-white bg-black/80 border border-[#303030] rounded-2xl flex flex-col items-center'
                    style={{
                        boxShadow: "0px 4px 50.6px 0px #D8000040"
                    }}>
                    <h1 className='font-fira-sans text-white font-normal text-2xl relative before:absolute before:-bottom-2 before:left-5 before:w-6 before:border-2 before:border-red-50 after:absolute after:-bottom-2 after:right-5 after:w-6 after:border-2 after:border-red-50'>Location</h1>
                    <div className='w-full flex flex-col gap-y-4 py-10'>
                        <Input icon={LocationIcon} type="email" placeholder="Enter your location/Current Location" />
                        <Button label="Next" className="bg-red-100 hover:bg-red-50 py-4 uppercase font-bold text-xl" />
                    </div>
                </div>
            </div>
        </>
    )
}


export default location
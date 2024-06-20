import React from 'react'
import BG_IMG from "@/assets/img/login-bg.png"
import Icons from "@/components/icons/Component"
import MemberImg from "@/assets/img/member-user.png"
import Button from '@/components/Button'
import { Link } from 'react-router-dom'

const otpVarification = () => {
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
                    <h1 className='font-fira-sans text-white font-normal text-2xl'>OTP Verification</h1>
                    <p className='text-gray-200 text-center'>
                        We have sent a One-Time Password (OTP) to your registered email address. Please check your inbox (and spam folder, just in case!) for the email containing the OTP.
                    </p>
                    <span className='w-20 h-1 my-2 inline-block bg-red-50'></span>
                    <div className='flex flex-col items-center gap-y-4 mt-4 w-full'>
                        <Button label="Login" className="bg-red-100 w-full hover:bg-red-50 py-4 px-20 uppercase font-bold text-xl" />
                        <span>
                            00:30 <Link to="#"><span className='text-red-50 underline text-base font-normal'>Resend OTP</span></Link>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default otpVarification
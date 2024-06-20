import React from 'react'
import BG_IMG from "@/assets/img/login-bg.png"
import Icons from "@/components/icons/Component"
import { Men2Icon } from '@/components/icons/solid'
import MemberImg from "@/assets/img/member-user.png"
import Button from '@/components/Button'

const membershipPlan = () => {
    return (
        <>
            <div className='w-full h-screen relative bg-cover bg-no-repeat bg-center blur-sm'
                style={{
                    backgroundImage: `url(${BG_IMG})`
                }}
            >
            </div>
            <div className='container w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <div className='w-full md:max-w-2xl mx-auto text-white bg-black/80 border border-[#303030] rounded-2xl flex flex-col md:flex-row items-center py-8 md:p-4'
                    style={{
                        boxShadow: "0px 4px 50.6px 0px #D8000040"
                    }}>
                    <div className='flex flex-col md:flex-row gap-4'>
                        <img src={MemberImg} alt="" />
                        <div className='flex flex-col gap-4 justify-between'>
                            <div>
                                <h2 className='text-2xl font-bold'>Well Done</h2>
                                <p className='text-base font-semibold'>Your Rentboys client is ready!</p>
                                <p className='text-base font-normal'>you may sellect your membership type below.</p>
                            </div>
                            <div className='flex items-center justify-between'>
                                <Button label="Ill’ do it later" className="border font-bold text-base p-4 rounded-xl" />
                                <Button label="Select Membership" className="bg-red-50 font-bold text-base p-4 rounded-xl" />

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default membershipPlan
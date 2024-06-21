import React from 'react'
import MemberImg from "@/assets/img/member-user.png"
import Button from '@/components/Button'

const page = () => {
    return (
        <div
            className="z-1 w-full max-w-sm md:max-w-2xl rounded-2xl border border-dark bg-black/80 py-10 md:p-4 text-white"
            style={{
                boxShadow: "0px 4px 50.6px 0px #D8000040",
            }}>
            <div className='flex flex-col md:flex-row md-down:items-center gap-4'>
                <img src={MemberImg} alt="member_user" />
                <div className='flex flex-col gap-4 justify-between'>
                    <div>
                        <h2 className='text-2xl font-bold'>Well Done</h2>
                        <p className='text-base font-semibold'>Your Rentboys client is ready!</p>
                        <p className='text-base font-normal'>you may sellect your membership type below.</p>
                    </div>
                    <div className='flex items-center gap-x-4 md:justify-between'>
                        <Button label="Ill’ do it later" className="border font-bold text-base p-4 rounded-xl" />
                        <Button label="Select Membership" className="bg-red-50 font-bold text-base p-4 rounded-xl" />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
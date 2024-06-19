import React from 'react'
import BG_IMG from "@/assets/img/login-bg.png"
import AdvertiserImg from "@/assets/img/advertiser.png"
import ClientImg from "@/assets/img/client.png"
import Button from '@/components/Button'

const userRole = () => {
    return (
        <>
            <div className='w-full h-screen relative bg-cover bg-no-repeat bg-center blur-sm'
                style={{
                    backgroundImage: `url(${BG_IMG})`
                }}
            >
            </div>
            <div className='container w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <div className='w-full max-w-5xl mx-auto py-12 px-4 md:px-16 text-white bg-black/80 border border-[#303030] rounded-2xl flex flex-col items-center'
                    style={{
                        boxShadow: "0px 4px 50.6px 0px #D8000040"
                    }}>
                    <div className='w-full flex flex-col items-center gap-y-6'>
                        <h1 className='font-fira-sans text-white font-normal text-2xl relative before:absolute before:-bottom-2 before:left-14 before:w-10 before:border-2 before:border-red-50 after:absolute after:-bottom-2 after:right-14 after:w-10 after:border-2 after:border-red-50'>Choose User Type</h1>
                        {/* <span className='w-20 h-1 my-2 inline-block bg-red-50'></span> */}
                        <div className='flex justify-between gap-x-4 w-full'>
                            <div className='bg-red-50 w-full md:w-1/2 flex justify-end rounded-2xl relative'>
                                <div className='absolute top-8 left-6'>
                                    <h2 className='text-3xl font-bold'>Advertiser</h2>
                                    <p className='text-sm font-bold'>You want to promote yourself</p>
                                    <span className='w-6 h-6 inline-block rounded-full border border-white mt-4' />
                                </div>
                                <img src={AdvertiserImg} alt="advertiser_img" />
                            </div>
                            <div className='bg-red-50 w-full md:w-1/2 flex justify-end rounded-2xl relative'>
                                <div className='absolute top-8 left-6'>
                                    <h2 className='text-3xl font-bold'>Client</h2>
                                    <p className='text-sm font-bold'>You’re looking to hire</p>
                                    <span className='w-6 h-6 inline-block rounded-full border border-white mt-4' />
                                </div>
                                <img src={ClientImg} alt="advertiser_img" />
                            </div>
                        </div>
                        <div>
                            <Button label="Continue" className="mt-4 bg-red-100 hover:bg-red-50 py-4 px-20 uppercase font-bold text-xl" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default userRole
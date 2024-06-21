import React from 'react'
import AdvertiserImg from "@/assets/img/advertiser.png"
import ClientImg from "@/assets/img/client.png"
import Button from '@/components/Button'

const page = () => {
    return (
        <div
            className="z-1 flex w-full max-w-4xl flex-col items-center rounded-2xl border border-dark bg-black/80 px-4 py-12 text-white md:px-16 shadow-sm">
            <div className='w-full flex flex-col items-center gap-y-6'>
                <h1 className='font-fira-sans text-white font-normal text-2xl relative before:absolute before:-bottom-2 before:left-14 before:w-10 before:border-2 before:border-red-50 after:absolute after:-bottom-2 after:right-14 after:w-10 after:border-2 after:border-red-50'>Choose User Type</h1>
                {/* <span className='w-20 h-1 my-2 inline-block bg-red-50'></span> */}
                <div className='flex justify-between gap-x-4 w-full mt-4'>
                    <div className='bg-red-50 w-full flex justify-end rounded-2xl relative'>
                        <div className='absolute top-8 left-3 md:left-6'>
                            <h2 className='text-xl md:text-3xl font-bold'>Advertiser</h2>
                            <p className='text-sm font-bold'>You want to promote yourself</p>
                            <span className='w-6 h-6 inline-block rounded-full border border-white mt-4' />
                        </div>
                        <img src={AdvertiserImg} alt="advertiser_img" />
                    </div>
                    <div className='bg-red-50 w-full flex justify-end rounded-2xl relative'>
                        <div className='absolute top-8 left-3 md:left-6'>
                            <h2 className='text-xl md:text-3xl font-bold'>Client</h2>
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
    )
}

export default page
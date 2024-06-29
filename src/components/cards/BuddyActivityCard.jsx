import React from 'react'
import Image from '../Image'
import Icons from "@/components/icons/Component";
import { PentagonShapeIcon, ThreedotIcon } from '../icons/solid'
import ModelImg from "@/assets/img/model8.png"

const BuddyActivityCard = () => {
    return (
        <>
            <div className='relative flex flex-row gap-x-4 bg-gray-100 text-white rounded-xl'>
                <div className='w-28 rounded-md overflow-hidden'>
                    <Image src={ModelImg} className="rounded-md" />
                </div>
                <div className='flex flex-col gap-2 mt-4'>
                    <div className="flex gap-4 items-center shrink-0">
                        <h2 className='text-base font-bold'>HotMassageN</h2>
                        <span className='inline-block w-1.5 h-1.5 rounded-full bg-red-50' />
                        <p className='text-base font-medium'>30Y/O</p>
                    </div>
                    <p className='text-sm'>
                        Has Changed His Current Locat...
                    </p>
                    <div className="flex gap-x-2">
                        <Icons src={PentagonShapeIcon} className='w-4' />
                        <p className='text-sm'>
                            02 May 14:12
                        </p>
                    </div>
                </div>
                <div className='absolute right-3 bottom-3'>
                    <div className='w-7 h-7 rounded-full bg-black text-white flex justify-center items-center'>
                        <Icons src={ThreedotIcon} className='w-5' />
                    </div>
                </div>
            </div>

        </>
    )
}

export default BuddyActivityCard
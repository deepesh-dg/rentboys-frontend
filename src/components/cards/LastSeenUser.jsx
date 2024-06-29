import React from 'react'
import Image from '../Image'
import Icons from "@/components/icons/Component";
import { PentagonShapeIcon, ThreedotIcon } from '../icons/solid'
import ModelImg from "@/assets/img/model8.png"

const LastSeenUser = () => {
    return (
        <>
            <div className="relative">
                <Image src={ModelImg} />
                <div className='absolute right-3 top-3'>
                    <div className='w-7 h-7 rounded-full bg-black text-white flex justify-center items-center'>
                        <Icons src={ThreedotIcon} className='w-5' />
                    </div>
                </div>
                <div className='absolute w-full bottom-0 py-2 px-4 left-0 right-0 bg-background'>
                    <h2 className='text-base font-bold'>TeddyGBT</h2>
                    <p>Luanda, Angola</p>
                </div>
            </div>
        </>
    )
}

export default LastSeenUser
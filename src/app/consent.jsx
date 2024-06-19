import React from 'react'
import Image from "@/components/Image";
import BackgroundImg from "@/assets/img/landing-bg.png"
// import Man1 from "@/assets/img/landing-manVector.png"
// import { MenLeftIcon } from "../assets/icons";
import Button from "@/components/Button";


const consent = () => {
    return (
        <div className='bg-dark text-white'>
            <div className='container min-h-screen bg-cover bg-center'
            // style={{
            //     backgroundImage: `url(${BackgroundImg})`
            // }}
            >
                <h2 className='uppercase text-5xl text-center font-normal py-8'>Rent&nbsp;<span className='text-red'>Boys</span></h2>
                {/* <Image src={Man1} className="w-10" /> */}
                <div className='border h-screen'>
                    {/* <img src={MenLeftIcon} alt="sexy_men" width={200} height={200} /> */}
                </div>
                <div className='max-w-md mx-auto text-center'>
                    <p className='text-sm'>
                        By entering site, I agree that I am over 18 years old, and I have read and
                        accept the <span className='text-red'>Terms of Service</span>, <span className='text-red'>Privacy Policy</span> and all <span className='text-red'>Cookies</span> or customize cookies <span className='text-red'>here</span>
                    </p>
                    <div className='flex justify-center'>
                        <Button
                            label="I Agree - Enter RentBoys"
                            className={"text-bold !bg-[#ff0000]"}
                            onClick={() => console.log("onlcik")}
                        />
                    </div>
                    <p className='text-red text-xs'>
                        I disagree - Exit this site
                    </p>
                </div>

            </div>
        </div>
    )
}

export default consent;
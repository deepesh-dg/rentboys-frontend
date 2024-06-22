import React from 'react';
import Form from '../components/Form';
import AdvertiserImg from "@/assets/img/advertiser.png"
import ClientImg from "@/assets/img/client.png"
import Button from '@/components/Button'

export default function Page() {

    const handleSubmit = () => {
        // handle form submission
    };

    return (
        <Form
            title="Choose User Type"
            maxWidth="4xl"
        >
            <div className='flex justify-between gap-x-4 w-full'>
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
        </Form>
    );
};


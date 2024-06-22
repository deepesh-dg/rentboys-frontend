import React from 'react';
import Form from '../components/Form';
import MemberImg from "@/assets/img/member-user.png"
import Button from '@/components/Button';

export default function Page() {

    const handleSubmit = () => {
        // handle form submission
    };

    return (
        <Form
            maxWidth="2xl"
            className="!gap-y-0 !px-4 !py-4"
        >
            <div className='flex flex-col md:flex-row md-down:items-center gap-4 w-full'>
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
        </Form>
    );
};


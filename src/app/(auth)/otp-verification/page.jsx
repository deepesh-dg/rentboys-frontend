import React from 'react';
import { Link } from 'react-router-dom';
import Form from '../components/Form';
import Input from "@/components/common/Input/Input";
import Button from '@/components/Button';

export default function Page() {

    const handleSubmit = () => {
        // handle form submission
    };

    return (
        <Form
            title="OTP Verification"
            description="We have sent a One-Time Password (OTP) to your registered email address. Please check your inbox (and spam folder, just in case!) for the email containing the OTP."
            maxWidth="xl"
        >
            <Input
                type="text"
                placeholder="OTP"
            />
            <Button label="Send" className="bg-red-100 w-full hover:bg-red-50 py-4 px-20 uppercase font-bold text-xl" />
            <div>
                00:30 <Link to="#"><span className='text-red-50 underline text-base font-bold'>Resend OTP</span></Link>
            </div>
        </Form>
    );
};


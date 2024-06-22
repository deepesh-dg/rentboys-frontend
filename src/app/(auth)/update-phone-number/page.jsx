import React from 'react';
import Form from '../components/Form';
import { LocationIcon } from "@/components/icons/outline";
import Input from "@/components/common/Input/Input";
import Button from '@/components/Button';

export default function Page() {

    const handleSubmit = () => {
        console.log("update phone no");
    };

    return (
        <Form
            title="Phone no."
            maxWidth="xl"
        >
            <div>
                <Input icon={LocationIcon} type="email" placeholder="Enter your phone no." />
                <p className='mt-2 font-normal text-base'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <Button onClick={handleSubmit} label="Next" className="w-full bg-red-100 hover:bg-red-50 py-4 uppercase font-bold text-xl" />
        </Form>
    );
};


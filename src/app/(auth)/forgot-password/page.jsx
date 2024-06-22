import React from 'react';
import Form from '../components/Form';
import Input from "@/components/common/Input/Input";
import Button from '@/components/Button';
import { MailIcon } from "@/components/icons/outline";


export default function Page() {

    const handleSubmit = () => {
        // handle form submission
    };

    return (
        <Form
            title="Forgot Password"
            description="Enter the email address associated with your RentBoys profile and we'll send you a link to recover your access."
            maxWidth="xl"
        >
            <Input
                icon={MailIcon}
                type="email"
                placeholder="example@email.com"
            />
            <Button label="Send" className="bg-red-100 w-full hover:bg-red-50 py-4 px-20 uppercase font-bold text-xl" />
        </Form>
    );
};




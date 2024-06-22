import React from 'react';
import { LocationIcon, PasswordIcon } from '@/components/icons/outline'
import Form from '../components/Form';
import Input from "@/components/common/Input/Input";
import Button from '@/components/Button';

export default function Page() {

    const handleSubmit = () => {
        // handle form submission
    };

    return (
        <Form
            title="Location"
            maxWidth="xl"
        >
            <Input icon={LocationIcon} type="email" placeholder="Enter your location/Current Location" />
            <Button label="Next" className="w-full bg-red-100 hover:bg-red-50 py-4 uppercase font-bold text-xl" />
        </Form>
    );
};


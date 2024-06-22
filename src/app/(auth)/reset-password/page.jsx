import React from 'react';
import Form from '../components/Form';
import Input from "@/components/common/Input/Input";
import Button from '@/components/Button';
import { PasswordIcon } from "@/components/icons/outline";


export default function Page() {

    const handleSubmit = () => {
        // handle form submission
    };

    return (
        <Form
            title="Reset Password"
            maxWidth="xl"
        >
            <Input
                icon={PasswordIcon}
                type="password"
                placeholder="New Password"
            />
            <Input
                icon={PasswordIcon}
                type="password"
                placeholder="Confirm Password"
            />
            <Button label="Submit" className="bg-red-100 w-full hover:bg-red-50 py-4 px-20 uppercase font-bold text-xl" />
        </Form>
    );
};




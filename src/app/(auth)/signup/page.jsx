import React from 'react';
import { Link } from 'react-router-dom';
import Form from '../components/Form';
import { UserIcon, MailIcon, PasswordIcon } from "@/components/icons/outline";
import Input from "@/components/common/Input/Input";
import Button from '@/components/Button';

const signup = () => {
    const handleSubmit = () => {
        // handle form submission
    };

    return (
        <Form
            title="Sign Up"
            maxWidth="xl"
        >
            <Input
                icon={MailIcon}
                type="email"
                placeholder="example@email.com"
            />
            <Input
                icon={UserIcon}
                type="text"
                placeholder="Username"
            />

            <Input
                icon={PasswordIcon}
                type="password"
                placeholder="Password"
            />
            <div className='flex gap-x-2 items-center w-full text-sm'>
                <input type='checkbox' /><span className='text-sm font-normal'>Accept T&C</span>
            </div>
            <Button
                label="Sign Up"
                className="bg-red-100 w-full hover:bg-red-50 py-4 px-20 uppercase font-bold text-xl"
                onClick={handleSubmit}
            />
            <p className='text-white text-center text-sm'>Already have an account ?&nbsp;
                <Link to="/login"><span className='underline text-red-50 font-bold'>LOGIN HERE</span></Link>
            </p>
        </Form>
    );
};

export default signup;

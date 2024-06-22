import React from 'react';
import { Link } from 'react-router-dom';
import Form from '../components/Form';
import { MailIcon, PasswordIcon } from "@/components/icons/outline";
import Input from "@/components/common/Input/Input";
import Button from '@/components/Button';

export default function Login() {

    const handleSubmit = () => {
        // handle form submission
    };

    return (
        <Form
            title="Login"
            maxWidth="xl"
        >
            <Input
                icon={MailIcon}
                type="email"
                placeholder="example@email.com"
            />
            <Input
                icon={PasswordIcon}
                type="password"
                placeholder="Password"
            />
            <div className="flex justify-between text-sm w-full">
                <div className="flex items-center gap-x-2">
                    <input type="checkbox" />
                    <span>Remember me</span>
                </div>
                <p>Forgot Password?</p>
            </div>
            <Button
                label="Login"
            // onClick={() => console.log("onClick")}
            />
            <p className="text-center text-sm text-white">
                Don't have an account?&nbsp;
                <Link to="/signup">
                    <span className="font-bold text-red-50 underline">
                        SIGN UP HERE
                    </span>
                </Link>
            </p>
        </Form>
    );
};


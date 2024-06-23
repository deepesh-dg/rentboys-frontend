import Input from '@/components/common/Input/Input';
import React from 'react';

const Step3 = () => {
    return (
        <div className="container flex-grow mt-6">
            <h2 className='text-xl font-bold text-white'>Services Offering</h2>
            <div className='grid gap-4 md:grid-cols-3'>
                <div className='space-y-2'>
                    <p>On Call</p>
                    <Input placeholder="price" />
                </div>
                <div className='space-y-2'>
                    <p>Off Call</p>
                    <Input placeholder="price" />
                </div>
                <div className='space-y-2'>
                    <p>Overnight</p>
                    <Input placeholder="price" />
                </div>
            </div>
        </div>
    );
};

export default Step3;

import Textarea from '@/components/TextArea';
import React from 'react';

const Step2 = () => {
    return (
        <div className="container flex-grow mt-6">
            <Textarea
                rows={4}
                placeholder="Description*"
                className="p-4 "
            />
        </div>
    );
};

export default Step2;

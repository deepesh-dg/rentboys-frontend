import React from 'react';
import { useLocation } from "react-router-dom";
import { pathToNameMapping } from '@/utils/pathMappings';

const Page = () => {
    const location = useLocation();
    const pathSegment = location.pathname.split("/")[1];
    const title = pathToNameMapping[pathSegment] || "Cookie Policy";

    return (
        <div className='py-4 w-full space-y-4'>
            <h2 className='text-xl text-red-50 font-medium pb-1 border-b border-gray-50'>
                {title}
            </h2>
            {/* <h2 className='text-xl text-red-50 font-medium pb-1 border-b border-gray-50'>Cookie Policy</h2> */}
        </div>
    );
};

export default Page;

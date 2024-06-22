import React from 'react'
import { SearchIcon } from "@/components/icons/outline";
import Icons from "@/components/icons/Component";

const SearchInput = () => {
    return (
        <div className='relative flex w-full md-only:hidden'>
            <div className='relative w-full'>
                <Icons src={SearchIcon} className='w-6 absolute top-2 left-2' />
                <input type="text" placeholder='Search in all locations'
                    className='w-full border border-gray-50 bg-gray-100 py-2 pl-10 text-md text-white placeholder:text-white focus:ring-1focus:ring-red-50 outline-none' />
            </div>
            <button className="text-md rounded-br-lg rounded-tr-lg bg-red-50 w-28 font-medium text-white md:font-medium">
                Search
            </button>
        </div>
    )
}

export default SearchInput
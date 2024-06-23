import React from "react";
import { SearchIcon } from "@/components/icons/outline";
import Icons from "@/components/icons/Component";

const SearchInput = ({ searchQuery, handleOnChange, handleSearch }) => {
    const handleKeyDown = e => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };
    return (
        <div className="relative flex w-full md-only:hidden">
            <div className="relative w-full">
                <Icons src={SearchIcon} className="absolute left-2 top-2 w-6" />
                <input
                    type="text"
                    placeholder="Search in all locations"
                    value={searchQuery}
                    onChange={handleOnChange}
                    onKeyDown={handleKeyDown}
                    className="text-md focus:ring-1focus:ring-red-50 w-full border border-gray-50 bg-gray-100 py-2 pl-10 text-white outline-none placeholder:text-white"
                />
            </div>
            <button
                className="text-md w-28 rounded-br-lg rounded-tr-lg bg-red-50 font-medium text-white md:font-medium"
                onClick={handleSearch}
            >
                Search
            </button>
        </div>
    );
};

export default SearchInput;

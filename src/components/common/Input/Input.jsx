import React from 'react'
import Icons from "@/components/icons/Component"

const Input = ({ icon, type, placeholder, value, onchange, className, ...props }) => {
    return (
        <div className='w-full relative'>
            <input type={type} placeholder={placeholder} value={value} onChange={onchange} {...props}
                className={`w-full border border-[#303030] bg-black py-4 text-md text-white placeholder:text-white focus:ring-1 focus:ring-red-50 outline-none ${icon ? "pl-12" : "pl-4"} ${className}`}
            />
            {icon && icon ?
                <div className='absolute top-[50%] translate-y-[-50%] left-4'>
                    <Icons src={icon} className="w-6" />
                </div> : null
            }
        </div>
    )
}

export default Input
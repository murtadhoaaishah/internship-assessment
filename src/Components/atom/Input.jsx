import React from 'react'

const Input = ({ prefixIcon, placeholder, suffixIcon, customStyle }) => {
    return (
        <div className={`${customStyle} max-w-[45%] py-4 px-4 overflow-hidden border rounded-lg `}>
            <input
                className='border-none bg-[#121B27] flex-grow w-full bg-none'
                prefixIcon={prefixIcon}
                placeholder={placeholder}
                suffixIcon={suffixIcon}
            />
            {/* {console.log(prefixIcon)} */}
        </div >
    )
}

export default Input

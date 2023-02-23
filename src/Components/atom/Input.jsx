import React from 'react'

const Input = ({ prefixicon, placeholder, suffixicon, customStyle }) => {
    return (
        <div className={`${customStyle} max-w-[45%] py-4 px-4 overflow-hidden border rounded-lg`}>
            <input
                // <span><img src={prefixicon} /></span> 
                prefixicon={<img src={prefixicon} />}
                placeholder={placeholder}
                suffixicon={suffixicon} className='border-none bg-[#121B27] flex-grow w-full bg-none'
            />
            {/* {console.log(placeholder)} */}
        </div >
    )
}

export default Input

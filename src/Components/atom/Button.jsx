import React from 'react'

const Button = ({ label, customStyle }) => {
    return (
        // <div className={`button-div flex justify-center align-center bg-white border rounded-lg ${customStyle}`}>
        <button className={`focus h-[2rem] w-[26.5rem] rounded-full outline-none font-bold text-white ${customStyle}`}>{label}</button>
        // </div>
    )
}

export default Button

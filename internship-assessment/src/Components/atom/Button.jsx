import React from 'react'

const Button = ({ label, customStyle }) => {
    return (
        <div className={`button-div flex justify-center align-center bg-white border rounded-lg ${customStyle}`}>
            <button className=''>{label}</button>
        </div>
    )
}

export default Button

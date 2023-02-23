import React from 'react'
import Button from './Button'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center px-[6.25rem] py-[4rem]'>
            <div className='flex flex-row align-center justify-center'>
                <span className='text-white  text-5xl font-[700]'>I</span>
                <img src="/public/vectors/love.svg" alt="" />
                <span className='text-white text-5xl font-[700]'>yalbaze</span>
            </div>
            <Button />
        </div>
    )
}

export default Navbar

import React from 'react'
import Button from './atom/Button'
import Input from './atom/Input'

const Hero = () => {
    const profiles = [
        {
            icon: '/public/vectors/profile.svg',
            placeholder: 'Tell us about your name'
        },
        {
            icon: '/public/vectors/message.svg',
            placeholder: 'Enter your email address'
        }
    ]
    return (
        <div className='px-8 py-20 max-w-[60%] flex flex-col justify-center'>
            <img src="/public/vectors/galaxy1.png" className='screen1 w-screen h-[screen]' />
            <p className='text-[4rem] text-white font-[900] '>
                Turn your best customers into<span className='text-[#A75FD2] self-center'> Loyal fans</span> </p>
            <p className='text-[#FCFCFC] text-2xl font-[400] mb-12'> Loyalbaze, empowers businesses to offer digital, mobile-first loyalty programs to their customers. With our AI Powered platform, you can easily create and manage custom loyalty and rewards programs, track customer engagement, and gain valuable insights to improve your business. Sign up now to get early access.</p>
            {/* 
                Get early access
                G
                O
                U
                M
                +57 Joined */}

            {profiles.map((profile, profileIndex) => (
                // console.log(profile.icon)
                <Input prefixicon={profile.icon} placeholder={profile.placeholder} key={`profile_${profileIndex}`} className='row-gap-8' />
            )

            )
            }
            <Button />r
        </div>
    )
}

export default Hero

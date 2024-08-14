import React from 'react'
import Socials from './Socials';
import { FcPhone } from "react-icons/fc";


const Footer = () => {
return (
    <div className="GetinTouch flex justify-between items-center mx-20 mt-10">
    <div className="email">
        <h1 className='text-white text-md md:text-2xl font-writingFont font-bold'>E-mail:</h1>
        <h2 className='text-white text-xs md:text-2xl font-writingFont font-normal'>business.manzil01@gmail.com</h2>
        <br/>
        <h1 className='text-white text-md md:text-2xl font-writingFont font-normal'><FcPhone/>: 9864530504</h1>
    </div>

        <div className="socials h-[100px] flex flex-col">
        <Socials/>
        </div>
    
    </div>
)
}

export default Footer;

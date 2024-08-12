import React from 'react'

const Socials = () => {
return (
    <div className="Socials flex items-center justify-center mt-10">
    <div className="Icons w-[150px] md:w-[300px] h-[40px] md:h-[60px]
    rounded-lg md:rounded-xl flex justify-between md:justify-evenly items-center
    shadow-2xl shadow-appleblack cursor-pointer p-2 md:p-8 ">

<img src='./images/ig.png'
className='cursor-pointer h-[20px] w-[20px] md:w-[30px] md:h-[30px] hover:w-[30px] hover:h-[30px] hover:md:w-[50px] hover:md:h-[50px]
transition duration-300 ease-in-out m-2 md:m-0' alt='iglogo'></img>

<img src='./images/linkedin.png'
className='cursor-pointer h-[20px] w-[20px] md:w-[30px] md:h-[30px] hover:w-[30px] hover:h-[30px] hover:md:w-[50px] hover:md:h-[50px]
transition duration-300 ease-in-out m-2 md:m-0' alt='linkedinlogo'></img>

<img src='./images/github.png'
className='cursor-pointer h-[20px] w-[20px] md:w-[30px] md:h-[30px] hover:w-[30px] hover:h-[30px] hover:md:w-[50px] hover:md:h-[50px]
transition duration-300 ease-in-out m-2 md:m-0' alt='githublogo'></img>

    </div>
    
    </div>
)
}

export default Socials

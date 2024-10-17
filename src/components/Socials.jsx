import React from 'react'

const Socials = () => {
return (
    <div className="Socials flex items-center justify-center mt-6 bg-transparent">
    <div className="Icons w-[150px] md:w-[300px] h-[40px] md:h-[60px]
    rounded-lg md:rounded-xl flex justify-between md:justify-evenly items-center
cursor-pointer p-2 md:p-8 ">

<a href='https://www.instagram.com/__manzil/'>
<img src='../icons/ig.png'
className='cursor-pointer h-[20px] w-[20px] md:w-[30px] md:h-[30px] hover:md:w-[50px] hover:md:h-[50px]
transition duration-300 ease-in-out m-2 md:m-0' alt='iglogo'></img>
</a>

<a href='https://www.linkedin.com/in/manjil-maharjan-443858297/'>
<img src='../icons/linkedin.png'
className='cursor-pointer h-[20px] w-[20px] md:w-[30px] md:h-[30px] hover:md:w-[50px] hover:md:h-[50px]
transition duration-300 ease-in-out m-2 md:m-0' alt='linkedinlogo'></img>
</a>

<a href='https://github.com/Manjil00'>
<img src='../icons/github.png'
className='cursor-pointer h-[20px] rounded-full p-1 bg-white w-[20px] md:w-[30px] md:h-[30px] hover:md:w-[50px] hover:md:h-[50px]
transition duration-300 ease-in-out m-2 md:m-0' alt='githublogo'></img>
</a>

<a href='https://medium.com/@manzilmaharjan00'>
<img src='../icons/medium.png'
className='cursor-pointer h-[20px] rounded-full p-1 bg-white w-[20px] md:w-[30px] md:h-[30px] hover:md:w-[50px] hover:md:h-[50px]
transition duration-300 ease-in-out m-2 md:m-0' alt='githublogo'></img>
</a>

    </div>
    
    </div>
)
}

export default Socials;
import React from 'react'

const Wordrotate = () => {
return (
    <div className='NAME_PLACE  font-boldfont text-left text-md md:text-6xl mt-5
    h-[120px] md:h-[400px] ml-[10px] md:ml-[100px] relative text-black overflow-hidden'>
        Hello,
    <br/>I am <span className='text-crimson'>Manjil Maharjan</span> &
    <br/>I am a
    <div className="inner-rotate  relative overflow-hidden h-[25px] md:h-[60px] w-full md:ml-[120px]">
    <div className='rotate-place  animate-word-rotate-mobile  md:animate-word-rotate-desktop relative w-full '>
        <p className='text-crimson'>UI/UX Designer</p>
        <p className='text-crimson'>Frontend Developer</p>
        <p className='text-crimson'>Backend Developer</p>
        <p className='text-crimson'>Full-Stack Developer</p>
        <p className='text-crimson'>Digital Marketer</p>
        <br/>
    </div>
    </div>

    </div>
)
}

export default Wordrotate;

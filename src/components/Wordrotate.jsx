import React from 'react'

const Wordrotate = () => {
return (
    <div className='NAME_PLACE  font-boldfont text-left text-md md:text-6xl
    h-[120px] md:h-[400px] mt-10 md:mt-[80px] ml-[10px] md:ml-[100px] relative text-crimson overflow-hidden'>
        Hello,
    <br/>I am Manjil Maharjan &
    <br/>I am a
    <div className="inner-rotate  relative overflow-hidden h-[25px] md:h-[60px] w-full md:ml-[120px]">
    <div className='rotate-place  animate-word-rotate-mobile  md:animate-word-rotate-desktop relative w-full '>
        <p>UI/UX Designer</p>
        <p>Frontend Developer</p>
        <p>Backend Developer</p>
        <p>Full-Stack Developer</p>
        <p>Digital Marketer</p>
        <br/>
    </div>
    </div>

    </div>
)
}

export default Wordrotate;

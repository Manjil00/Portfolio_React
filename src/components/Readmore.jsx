import React, { useState } from 'react'

const Readmore = () => {

    const fullText=(
        <>
    Hey there! I'm a creative force with a passion for bringing ideas to life on the web.
    As a UI/UX designer, Frontend and Backend Developer, a Full-Stack enthusiast,
    and Digital Marketer, From pixel-perfect responsive websites to strategic Digital Marketing,
    I blend aesthetics with analytics 🚀
        </>
    )
    const halfText=(
        <> Hey there! I'm a creative force with a passion for bringing ideas to life on the web.
        As a UI/UX designer, Frontend and Backend Developer, a Full-Stack enthusiast,
        and Digital Marketer,
        </>
    )
    
        const[showFullText,setShowFullText]=useState(false);
    
    
return (
<h1 className='font-writingFont mr-4 p-2 md:p-8 mt-10 md:mt-5 text-xs md:text-2xl w-full h-[50px] flex flex-col justify-center'>
    {showFullText?fullText : halfText}
<button onClick={()=>{
    setShowFullText(!showFullText)}
    }
    className='text-blue-500 text-xs md:text-xl mx-auto font-writingFont'>
{showFullText?"Read Less":"...Read More"}
</button>
</h1>
)
}

export default Readmore;

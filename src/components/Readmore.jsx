import React, { useState } from 'react'

const Readmore = () => {

    const fullText=(
        <>
Glad to meet you! I am an imaginative person who loves turning concepts into reality on the web. As a  Full Stack Developer and as a Digital Marketer,
I create everything from perfectly responsive websites to efficient Digital Marketing Strategies.
        </>
    )
    const halfText=(
        <> Glad to meet you! I am an imaginative person who loves turning concepts into reality on the web.
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

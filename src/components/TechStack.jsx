import React from 'react'

import Marquee from "react-fast-marquee";


const Techstack = () => {
return (
    <div className="techStack bg-bgcolorlite w-full h-[100px] mt-10 rounded-xl cursor-pointer">
    <Marquee pauseOnHover={true} >
        <img src='../icons/figma.png' className='h-[50px] w-[50px] md:w-[70px] md:h-[70px] ml-5' alt='figma'/>
        <img src='../icons/html.png' className='h-[50px] w-[50px] md:w-[70px] md:h-[70px] ml-5' alt='html'/>
        <img src='../icons/css.png' className='h-[50px] w-[50px] md:w-[70px] md:h-[70px] ml-5' alt='css'/>
        <img src='../icons/tailwind.png' className='h-[50px] w-[50px] md:w-[70px] md:h-[70px] ml-5' alt='tailwind'/>
        <img src='../icons/js.png' className='h-[50px] w-[50px] md:w-[70px] md:h-[70px] ml-5' alt='js'/>
        <img src='../icons/react.png' className='h-[50px] w-[50px] md:w-[70px] md:h-[70px] ml-5' alt='react'/>
        <img src='../icons/nextjs.png' className='h-[50px] w-[50px] md:w-[70px] md:h-[70px] ml-5' alt='next'/>
        <img src='../icons/node.png' className='h-[50px] w-[50px] md:w-[70px] md:h-[70px] ml-5' alt='node'/>
        <img src='../icons/express.png' className='h-[50px] w-[50px] md:w-[70px] md:h-[70px] ml-5' alt='express'/>
        <img src='../icons/mongodb.png' className='h-[50px] w-[50px] md:w-[70px] md:h-[70px] ml-5' alt='mongodb'/>
        <img src='../icons/prisma.png' className='h-[50px] w-[50px] md:w-[70px] md:h-[70px] ml-5' alt='prisma'/>
        <img src='../icons/git.png' className='h-[50px] w-[50px] md:w-[70px] md:h-[70px] ml-5' alt='git'/>
        <img src='../icons/github.png' className='h-[50px] w-[50px] md:w-[70px] md:h-[70px] ml-5' alt='github'/>
        <img src='../icons/slack.png' className='h-[50px] w-[50px] md:w-[70px] md:h-[70px] ml-5' alt='slack'/>
        <img src='../icons/trello.png' className='h-[50px] w-[50px] md:w-[70px] md:h-[70px] ml-5' alt='trello'/>
        <img src='../icons/meta.png' className='h-[50px] w-[50px] md:w-[70px] md:h-[70px] ml-5' alt='meta'/>
        <img src='../icons/illustrator.png' className='h-[50px] w-[50px] md:w-[70px] md:h-[70px] ml-5' alt='illustrator'/>
        <img src='../icons/canva.png' className='h-[50px] w-[50px] md:w-[70px] md:h-[70px] ml-5' alt='canva'/>
    </Marquee>
</div>
)
}

export default Techstack

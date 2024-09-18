import React from 'react'
import Marquee from "react-fast-marquee";


const TechStack = () => {
return (
    <div className="TechStack w-full h-auto bg-white">
    <Marquee pauseOnHover={false} direction='left' delay={1} gradient={false} gradientWidth={20} className="w-full h-full flex justify-center items-center gap-8 rounded-xl ">
<div className="ICONS flex justify-start items-center mt-5 gap-10 ">
<img src='./logos/figma.png' className="w-[50px] h-[50px] md:w-[100px] md:h-[100px]" alt='figma'></img>
    <img src='./logos/html.png' className="w-[50px] h-[50px] md:w-[100px] md:h-[100px]" alt='html'></img>
    <img src='./logos/css.png' className="w-[50px] h-[50px] md:w-[100px] md:h-[100px]" alt='css'></img>
    <img src='./logos/tailwind.png' className="w-[50px] h-[50px] md:w-[100px] md:h-[100px]" alt='tailwind'></img>
    <img src='./logos/js.png' className="w-[50px] h-[50px] md:w-[100px] md:h-[100px]" alt='js'></img>
    <img src='./logos/react.png' className="w-[50px] h-[50px] md:w-[100px] md:h-[100px]" alt='react'></img>
    <img src='./logos/nextjs.png' className="w-[50px] h-[50px] md:w-[100px] md:h-[100px]" alt='nextjs'></img>
    <img src='./logos/prisma.png' className="w-[50px] h-[50px] md:w-[100px] md:h-[100px]" alt='prisma'></img>
    <img src='./logos/node.png' className="w-[50px] h-[50px] md:w-[100px] md:h-[100px]" alt='node'></img>
    <img src='./logos/express.png' className="w-[50px] h-[50px] md:w-[100px] md:h-[100px]" alt='express'></img>
    <img src='./logos/mongo.png' className="w-[50px] h-[50px] md:w-[100px] md:h-[100px]" alt='mongo'></img>
    <img src='./logos/git.png' className="w-[50px] h-[50px] md:w-[100px] md:h-[100px]" alt='git'></img>
    <img src='./logos/github.png' className="w-[50px] h-[50px] md:w-[100px] md:h-[100px]" alt='github'></img>
    <img src='./logos/slack.png' className="w-[70px] h-[70px] md:w-[100px] md:h-[100px]" alt='slack'></img>
    <img src='./logos/trello.png' className="w-[70px] h-[70px] md:w-[100px] md:h-[100px]" alt='trello'></img>
    <img src='./logos/meta.png' className="w-[50px] h-[50px] md:w-[100px] md:h-[100px]" alt='meta'></img>
    <img src='./logos/illu.png' className="w-[50px] h-[50px] md:w-[100px] md:h-[100px]" alt='illu'></img>
    <img src='./logos/canva.png' className="w-[50px] h-[50px] md:w-[100px] md:h-[100px]" alt='canva'></img>

</div>
</Marquee>
</div>
)
}

export default TechStack;

import React, { useEffect } from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import Aos from 'aos';
import 'aos/dist/aos.css';

import { FcManager } from "react-icons/fc";


const Experience = () => {
    const offset = 300;  // Example value for offset
    const duration = 600;

    useEffect(()=>{
        Aos.init({offset:100,duration:600});

    },[offset,
        duration])
return (
    <div className="Experience w-full h-full ">

    <div className="topic flex justify-center gap-6" data-aos="fade-right">
    <img src='./images/rocket.png' className='w-[50px] h-[50px] animate-bounce-slow' alt='rocket'/>
    <h1 className='text-crimson text-2xl md:text-4xl font-boldfont'> Experiences</h1>
    </div>

    <VerticalTimeline className='mt-15' data-aos="fade-right">
        <VerticalTimelineElement className='vertical-timeline-element--work cursor-pointer'
        contentStyle={{ background: 'rgb(255, 255, 255)', color: '#000' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)', boxShadow:'inherit' }}
    date="2022 - 2023"
    iconStyle={{ background: 'rgb(255, 255, 255)', color: '#000' }}
    icon={<FcManager/>}
>
    <h3 className="vertical-timeline-element-title font-writingFont text-sm md:text-xl">Social Media Manager,</h3>
    <h4 className="vertical-timeline-element-subtitle font-writingFont text-sm md:text-xl">Digipline Digital Agency,</h4>
    <h4 className="vertical-timeline-element-subtitle font-writingFont text-sm md:text-xl">Australia</h4>

    <p>
    </p>
        </VerticalTimelineElement>
    </VerticalTimeline>

    
    </div>
)
}

export default Experience;

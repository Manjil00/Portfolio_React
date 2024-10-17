import React from 'react';

//COMPONENTS
import Journey from '../components/Journey';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Resume from '../components/Resume';
import Socials from '../components/Socials';
import Progress from '../components/progress';
import Techstack from '../components/Techstack';

const Introduction = () => {
return (
<div className="main-container h-full w-full bg-bgcolor">

    <Nav/>

    <div className="Section1 w-full h-auto md:p-8 bg-bgcolor">

<div className="innerContainer bg-bgcolorlite rounded-xl h-[600px] w-full relative flex flex-col md:flex-row  ">
    <div className="text flex flex-col justify-start items-start ml-4 md:ml-44">
        <h1 className='text-2xl lg:text-6xl font-bold text-start text-slate-500 mt-10 '>Hello, I'm <span className='text-orange-500'>Manjil Maharjan</span>
        <br/> And I'm a <span className='text-orange-500 '>Frontend Developer</span> </h1>
        <p className='mt-10 text-slate-500 '>Transforming complex ideas into simple and sophisticated web visuals, leveraging React.js,
            <br/>seamless API integration, and intuitive UI design to create engaging and responsive user experiences. </p>
        <div className="ResumeANDSocials flex justify-between items-center gap-10 lg:gap-44">
        <Resume/>
        <Socials/>
        </div>

    </div>

    <div className="img">
    <img src='../images/pfpwhite.png' className='h-[200px] w-[150px]  lg:h-[300px] lg:w-[300px] xl:h-[450px] xl:w-[450px] rounded-full border-4 border-bgcolorlite absolute right-10 md:bottom-10 object-cover bg-opacity-30 ' alt='Pfp'/>
    </div>
</div>
</div>


<div className="Section2 h-auto w-full bg-bgcolor md:px-8  mt-5 md:mt-0">
    <div className="innercontainer2 bg-bgcolorlite h-auto w-full rounded-xl flex flex-col justify-start items-start ">
    <h1 className="tech text-sm lg:text-4xl text-orange-500 mt-20 ml-10 font-bold ">TECHNICAL PROFICENCY</h1>

    <div className="Progression h-auto w-full mt-10 md:mt-20 flex justify-start items-start gap-9 mx-2">
    <div className="UI/UX flex flex-col justify-between items-center md:p-2 md:mx-2 gap-16 md:gap-10 font-bold">
            <h1 className="UI/UX text-xs md:text-2xl text-slate-500">UI/UX Technologies <br/><span className='font-normal'>(Figma)</span></h1>
            <h1 className="frontend text-xs md:text-2xl text-slate-500">Frontend Technologies <br/><span className='font-normal'>(React.js-Redux, Next.js)</span></h1>
            <h1 className="backend text-xs md:text-2xl text-slate-500">Backend Technologies <br/> <span className='font-normal'>(Prisma, Zod, <br/>Node.js, Express.js)</span></h1>
            <h1 className="database text-xs md:text-2xl text-slate-500">Database Platforms <br/> <span className='font-normal'>(myAQL, MongoDB)</span></h1>

        </div>
    
        <div className="frontend flex flex-col justify-between items-center p-2 md:mx-2 gap-16 md:gap-20">
            <Progress percentage={95}/>
            <Progress percentage={95}/>
            <Progress percentage={60}/>
            <Progress percentage={55}/>
        </div>

        <div className="backend flex flex-col justify-between items-center p-2 md:mx-2 gap-20">
            <h1 className="num text-xs md:text-2xl text-slate-500">95%</h1>
            <h1 className="num text-xs md:text-2xl text-slate-500">95%</h1>
            <h1 className="num text-xs md:text-2xl text-slate-500">60%</h1>
            <h1 className="num text-xs md:text-2xl text-slate-500">55%</h1>
        </div>

    </div>
        <Techstack/>
    </div>
</div>


    <Journey/>
    <Footer/>

</div>
)
}

export default Introduction;

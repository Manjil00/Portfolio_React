import React from 'react';
import Marquee from "react-fast-marquee";

const Projects = () => {
return (
    <div className="Section4 w-full h-auto md:h-[600px] mt-16 flex flex-col md:flex-row gap-6 md:gap-4">
    <div className="LeftS4 w-full md:w-[50%] h-[300px] md:h-full flex flex-col gap-4">
        <div className="left-top rounded-xl w-full h-[200px] md:h-[50%] shadow-xl shadow-appleblack">
        <h1 className="font-boldfont text-center md:text-start ml-5 mt-5 text-md md:text-5xl text-crimson">Projects</h1>
        <p className="text-sm md:text-xl text-start m-5">
            lorem ipsum
            <br />ipsum

        </p>
        </div>

        <div className="bottomleft flex w-full h-[200px] md:h-[50%] gap-2">
    
    <div className="left-b-right w-full h-full rounded-xl shadow-xl shadow-appleblack">
        <Marquee pauseOnHover={false} direction='right' delay={1} gradient={true} gradientWidth={20} className="w-full h-full flex justify-center items-center gap-8 rounded-xl ">
        <img src="./images/news.png" className="w-full h-[150px]  md:h-[300px]  object-cover" alt="NewsWapi" />
        <img src="./images/weather.png" className="w-full h-[150px]  md:h-[300px]  object-cover" alt="NewsWapi" />
        <img src="./images/figmaecom.png" className="w-full h-[150px]  md:h-[300px]  object-cover" alt="NewsWapi" />
        <img src="./images/figma3.png" className="w-full h-[150px]  md:h-[300px]  object-cover" alt="NewsWapi" />
        <img src="./images/figma1.png" className="w-full h-[150px]  md:h-[300px]  object-cover" alt="NewsWapi" />
        <img src="./images/figma2.png" className="w-full h-[150px]  md:h-[300px]  object-cover" alt="NewsWapi" />


        </Marquee>
        </div>
        </div>
    </div>

    <div className="RightS4 w-full md:w-[50%] h-[300px] md:h-full rounded-xl shadow-xl shadow-appleblack">
        <Marquee pauseOnHover={false} direction='left' delay={1} gradient={true} gradientWidth={20} className="w-full h-full flex justify-center items-center gap-6 cursor-pointer rounded-xl">
        <div className="w-full h-full  flex justify-center items-center overflow-hidden gap-4">
            {/* <img src="../projectimg/figmaecom.png" className="w-full h-[300px]  md:h-[600px]  object-cover" alt="e-com0" /> */}
            <img src="../images/nursery1.png" className="w-full h-[300px]  md:h-[600px]   object-cover" alt="e-com1" />
            <img src="../images/nursery2.png" className="w-full h-[300px]  md:h-[600px]  object-cover" alt="e-com2" />
            <img src="../images/nursery3.png" className="w-full h-[300px]  md:h-[600px]   object-cover" alt="e-com3" />
            <img src="../images/nursery4.png" className="w-full h-[300px]  md:h-[600px]   object-cover" alt="e-com4" />
            <img src="../images/figmaecom.png" className="w-full h-[300px]  md:h-[600px]   object-cover" alt="e-com5" />
        </div>
        </Marquee>
    </div>
    </div>
);
};

export default Projects;

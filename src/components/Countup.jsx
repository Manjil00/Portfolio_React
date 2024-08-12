import React from 'react'
import CountUp from 'react-countup';


const Countup = () => {
return (
<div className="flex justify-evenly items-center mx-1 p-2 md:h-auto">
    <div className="service1 w-[110px] h-auto md:h-auto bg-bgcolor rounded-xl text-black font-writingFont md:w-[300px] text-center">
    <h1 className="p-3 mt-2 font-sans font-bold text-4xl md:text-6xl">
        <CountUp end={2}
        duration={10}></CountUp>
        +
    </h1>
    <p className="mx-5 my-2 p-1 font-sans text-sm text-center md:text-xl ">Years of Experience</p>
    </div>
    <div className="service2  w-[110px] h-auto md:h-auto bg-bgcolor rounded-xl text-black font-writingFont md:w-[300px] text-center ">
    <h1 className="p-3 mt-2 font-sans font-bold text-4xl md:text-6xl">
    <CountUp end={10}
        duration={10}></CountUp>
        +
    </h1>
    <p className=" mx-5 my-2 p-1 font-sans text-sm text-center md:text-xl">Completed Projects</p>
    </div>
    <div className="service3  w-[110px] h-auto md:h-auto bg-bgcolor rounded-xl md:w-[300px] text-center ">
    <h1 className="p-3 mt-2 font-sans font-bold text-4xl md:text-6xl">
    <CountUp end={100}
        duration={10}></CountUp>
        +
    </h1>
    <p className=" mx-5 my-2 p-1 font-sans text-sm text-center md:text-xl">Concept/ Insights</p>
    </div>
</div>


)
}

export default Countup;

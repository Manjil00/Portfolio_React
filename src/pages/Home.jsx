import React from 'react';


//Components
import Footer from '../components/Footer';
import Nav from '../components/Nav';



const Home = () => {
return (
    <div className='main-container w-full h-full leading-relaxed'>
    <Nav/>

    <div className="body h-auto w-full">
        <div className="sec-1 w-full h-[350px] md:h-[700px] flex ">
        <div className="sectionLeft w-[60%] h-auto bg-black">
    <div className='font-boldfont text-left text-md md:text-2xl
    h-[120px] md:h-[200px] mt-10 md:mt-[80px] ml-[10px] md:ml-[100px] relative text-crimson overflow-hidden'>
        Hello,
    <br/>I am Manjil Maharjan &
    <br/>I am a
    <div className="inner-rotate relative overflow-hidden h-[30px] md:h-[40px] w-full md:ml-[120px]">
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
    
    </div>

    <div className="sectionRight w-[40%] h-full bg-green-800">
    </div>
        </div>
    
    </div>

    <Footer/>
    </div>
)
}

export default Home

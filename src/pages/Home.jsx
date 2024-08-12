import React from 'react';


//Components
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Wordrotate from '../components/Wordrotate';
import CVdownload from '../components/CVdownload';
import Socials from '../components/Socials';

//ICONS






const Home = () => {
return (
    <div className='main-container w-full h-full leading-relaxed'>
    <Nav/>

    <div className="body h-auto w-full">
    <div className="sec-1 w-full h-[350px] md:h-[700px] flex ">
    <div className="sectionLeft  w-[60%] h-auto ">

    <Wordrotate/>

    <h1 className='font-writingFont mr-4 text-xs md:text-xl w-full h-[50px] flex justify-center'> Creating stunning websites and marketing
        <br/>your ideas</h1>
        <CVdownload/>
        <Socials/>


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

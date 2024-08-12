import React from 'react';


//Components
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Wordrotate from '../components/Wordrotate';
import CVdownload from '../components/CVdownload';

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
    <div className="Socials flex items-center justify-center mt-10">
    <div className="Icons w-[150px] md:w-[300px] h-[40px] md:h-[60px]
    rounded-lg md:rounded-xl flex justify-between md:justify-evenly items-center
    shadow-2xl shadow-appleblack cursor-pointer p-2 md:p-8 ">

<img src='./images/ig.png'
className='cursor-pointer h-[20px] w-[20px] md:w-[30px] md:h-[30px] hover:w-[30px] hover:h-[30px] hover:md:w-[50px] hover:md:h-[50px]
transition duration-300 ease-in-out m-2 md:m-0' alt='iglogo'></img>

<img src='./images/linkedin.png'
className='cursor-pointer h-[20px] w-[20px] md:w-[30px] md:h-[30px] hover:w-[30px] hover:h-[30px] hover:md:w-[50px] hover:md:h-[50px]
transition duration-300 ease-in-out m-2 md:m-0' alt='linkedinlogo'></img>

<img src='./images/github.png'
className='cursor-pointer h-[20px] w-[20px] md:w-[30px] md:h-[30px] hover:w-[30px] hover:h-[30px] hover:md:w-[50px] hover:md:h-[50px]
transition duration-300 ease-in-out m-2 md:m-0' alt='githublogo'></img>

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

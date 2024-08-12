import React from 'react';
// import { Link } from 'react-router-dom';


//Components
import Countup from '../components/Countup';
import CVdownload from '../components/CVdownload';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Readmore from '../components/Readmore';
import Socials from '../components/Socials';
import Wordrotate from '../components/Wordrotate';

//ICONS


const Home = () => {

return (
    <div className='main-container w-full h-full leading-relaxed'>
    <Nav/>

    <div className="body h-auto w-full">
    <div className="sec-1 w-full h-auto flex ">

    <div className="sectionLeft  w-[60%] h-auto ">
    <Wordrotate/>
    <Readmore/>
<CVdownload/>
<Socials/>
    </div>

    <div className="sectionRight w-[40%] h-[350px] md:h-[700px] ">
        <img src='#' className='rounded-full bg-black w-[150px] h-[150px] md:w-[600px] md:h-[600px] mt-8 ml-1 md:mt-10 md:ml-10' alt='myphoto'></img>
    </div>
        </div>

    <div className="section2 mt-[100px] w-full h-auto md:h-auto">
    <Countup/>
    </div>

    <div className="Section-3 mt-10">

    </div>
    
    </div>

    <Footer/>
    </div>
)
}

export default Home

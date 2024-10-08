import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';



//Components
import Countup from '../components/Countup';
import CVdownload from '../components/CVdownload';
import EduKey from '../components/EduKey';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Projects from '../components/Projects';
import Readmore from '../components/Readmore';
import Socials from '../components/Socials';
import TechStack from '../components/TechStack';
import Wordrotate from '../components/Wordrotate';

const Home = () => {
    const offset = 300;  // Example value for offset
    const duration = 600;

    useEffect(()=>{
        document.title = "Manjil's Portfolio";
        Aos.init({offset:100,duration:600});

    },[offset,
        duration])

    
return (
    <div className='main-container w-full h-full leading-relaxed bg-white'>
    <Nav/>

    <div className="body h-auto w-full" >
    <div className="section-1 w-full h-auto flex " >

    <div className="sectionLeft  w-[60%] h-auto "  >
    <Wordrotate/>
    <Readmore/>
<CVdownload/>
<Socials/>
    </div>

    <div className="sectionRight w-[40%] h-[350px] md:h-[700px]">
        <img src='./images/main1.png' className='rounded-full w-[100px]  h-[100px] md:w-[500px] md:h-[500px] mt-8 md:mt-10 md:ml-12' alt='myphoto'></img>
    </div>
        </div>

<div id='section-2' className="section-2 mt-[30px] md:mt-[80px] w-full h-auto md:h-auto" data-aos="fade-up">
    <Countup/>
    </div>
</div>

<div id='section-3' className="section-3" data-aos="fade-up">
    <Projects/>
</div>

<div id='section-4' className="section-4 bg-transparent" data-aos="fade-up">
        <EduKey/>
    </div>

<div id='section-5' className="section-5 bg-gradient-to-r from-white to-blue-100  w-full h-[230px] md:h-[300px] rounded-xl mt-16 p-5 " data-aos="fade-up">
<Experience/>
</div>

<div id='section-6' className="section-6 w-full h-auto mt-16 bg-white py-2 md:py-3 rounded-2xl " data-aos="fade-up" >
<TechStack/>
</div>

<div id='section-7' className="section-7 w-full h-[200px] bg-black mt-16" data-aos="fade-up">
<Footer/>
</div>

</div>
)
}

export default Home

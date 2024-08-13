import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';


//Components
import Countup from '../components/Countup';
import CVdownload from '../components/CVdownload';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Readmore from '../components/Readmore';
import Socials from '../components/Socials';
import Wordrotate from '../components/Wordrotate';
import EduKey from '../components/EduKey';
import Projects from '../components/Projects';

//ICONS


const Home = () => {
    const offset = 300;  // Example value for offset
    const duration = 600;

    useEffect(()=>{
        Aos.init({offset:100,duration:600});

    },[offset,
        duration])

return (
    <div className='main-container w-full h-full leading-relaxed ' >
    <Nav/>

    <div className="body h-auto w-full" >
    <div className="sec-1 w-full h-auto flex " >

    <div className="sectionLeft  w-[60%] h-auto "  >
    <Wordrotate/>
    <Readmore/>
<CVdownload/>
<Socials/>
    </div>

    <div className="sectionRight w-[40%] h-[350px] md:h-[700px]">
        <img src='#' className='rounded-full bg-black w-[150px] h-[150px] md:w-[600px] md:h-[600px] mt-8 ml-1 md:mt-10 md:ml-10' alt='myphoto'></img>
    </div>
        </div>

    <div className="section2 mt-[30px] md:mt-[80px] w-full h-auto md:h-auto" data-aos="fade-up">
    <Countup/>
    </div>
    </div>


            {/* Section-4 */}
<div className="section4" data-aos="fade-up">
    <Projects/>
</div>
<div className="section3" data-aos="fade-up">
        <EduKey/>
    </div>

<div className="section5 bg-tangerine w-full h-[500px] mt-16">

</div>

    <Footer/>
    </div>
)
}

export default Home

import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';

const EduKey = () => {

const offset = 300;
const duration = 600;

useEffect(()=>{
Aos.init({offset:100,duration:600});

},[offset,
duration])

return (

<div className="Section-3 mt-[30px] md:mt-[80px] h-auto w-full flex shadow-2xl shadow-appleblack p-5 bg-transparent" data-aos="fade-up">

<div className="Left w-[50%] h-full flex flex-col">
        <div className="Certificates bg-transparent h-full w-full text-sm md:text-2xl">
        <h1 className='font-boldfont font-medium text-start ml-5 text-xl md:text-4xl text-crimson' data-aos="fade-right">Education  & <span className='ml-auto'>Certificates</span> </h1>
        <br/>
        <h2 className='font-writingFont font-semibold text-center mt-5' data-aos="fade-right">+2 (Science)</h2>
        <h2 className='font-writingFont font-medium text-center'data-aos="fade-right">United Academy</h2>
        <br/>
        <h2 className='font-writingFont font-semibold text-center'data-aos="fade-right">B.Sc.IT(Hons).Computing</h2>
        <h2 className='font-writingFont font-medium text-center'data-aos="fade-right">Majors: Computing </h2>
        <h2 className='font-writingFont font-medium text-center'data-aos="fade-right">Softwarica Collage of IT and
        E-Commerce/
        <br/> Coventry University </h2>


        </div>
    </div>

    <div className="vertical border-2 border-black h-[250px] md:h-[350px] m-auto">
    </div>


    <div className="Right w-[50%] h-full flex flex-col "data-aos="fade-right">
    <div className="Competemcies  bg-transparent h-full w-full text-sm md:text-2xl"data-aos="fade-right">
    <h1 className='font-boldfont font-medium text-start ml-10 text-xl md:text-4xl text-crimson'data-aos="fade-right">Key Competencies </h1>
        <br/>
        <h2 className='font-writingFont font-medium text-center'data-aos="fade-right">Critical Thinking</h2>
        <br/>
        <h2 className='font-writingFont font-medium text-center'data-aos="fade-right">Report Writing and Presenting</h2>
        <br/>
        <h2 className='font-writingFont font-medium text-center'data-aos="fade-right">Adaptability </h2>
        <br/>
        <h2 className='font-writingFont font-medium text-center' data-aos="fade-right">Continuous Learning</h2>
        <br/>
        <h2 className='font-writingFont font-medium text-center'data-aos="fade-right">Domain-Specific Knowledge</h2>
        <br/>
</div>
</div>
</div>
)
}

export default EduKey

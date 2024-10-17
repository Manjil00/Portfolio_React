import React from 'react'

//COMPONENTS
import Nav from '../components/Nav';
import Footer from '../components/Footer';


const Aboutme = () => {
return (
    <div className='main-container w-full h-full bg-bgcolor md:p-8'>
    <Nav/>
    <div className="bodycontainer w-full h-auto ">
        <div className="innercontainer bg-bgcolorlite rounded-xl h-auto w-full " >
            <div className="me p-8">
            <h1 className="title font-bold text-orange-500 text-xl md:text-4xl ml-10  md:mt-5">ABOUT ME</h1>
            <p className='text-xs md:text-xl mt-5 md:mt-10 text-slate-500'>I am a passionate tech enthusiast with a deep interest in web development, full-stack technologies, and building innovative digital solutions. I enjoy learning new tools and frameworks, continuously honing my skills to deliver high-quality projects. My curiosity and commitment to personal growth drive him to tackle challenges, whether in coding, design, or general problem-solving.<br/>
            <br/><span className='text-orange-500'>Professionally,</span> I have had some experience as a Social Media Manager and SEO Intern in Digipline Digital Agency, Australia but have not yet got any opportunity for frontend development feild. I am a React.js and frontend developer experienced in building web applications. I have developed SaaS products, e-commerce websites, and personal projects such as PodiumLive, a social audio app. With skills in React, Next.js, Redux, and API integration, I work on responsive designs, dynamic user interfaces, and seamless user experiences. I have experience in backend technologies like Prisma, Zod, Node and express.js and enjoy solving complex problems. Recently, I have been seeking an opportunity in Frontend Development position.   </p>
            </div>
        </div>
        <div className="certificates bg-bgcolorlite rounded-xl h-auto w-full p-3 mt-5 md:mt-10 " >
        <h1 className="title font-bold text-orange-500 text-xl md:text-4xl ml-10 md:mt-10">CERTIFICATES</h1>
        <div className="certificate1 flex justify-between items-start mt-10 h-auto w-full py-2">
            <div className="words p-2 ml-5 h-auto w-auto gap-5">
            <h1 className='text-xl md:text-2xl font-bold text-white'>7 Hour FullStack NextJs Bootcamp<span className='text-red-500'>(JobSniper Academy)</span></h1>
            <p className="text-slate-500 text-xs md:text-lg font-sans font-normal break-words mt-5">The 7-hour Next.js bootcamp conducted by JobSniper was an in-depth session aimed at providing participants with a comprehensive introduction to building full-stack web applications using Next.js. The bootcamp covered both frontend and backend development, focusing on essential tools and frameworks such as Prisma for database management and Zod for data validation and type safety. Attendees learned to create and deploy projects with Next.js, emphasizing key features like server-side rendering (SSR), static site generation (SSG), and API routes.</p>
            </div>
            <img src='../images/certificatesimg/nextjsBootcamp.png' className='bg-white h-[150px] w-[150px] md:h-[300px] md:w-[300px] mr-2 md:mr-20' alt='certificates'/>
        </div>

        <div className="certificate2 flex justify-between items-start mt-10 h-auto w-full">
            <div className="words p-2 ml-5 h-auto w-auto gap-5">
            <h1 className='text-xl md:text-2xl font-bold text-white'>Agile and Scrum Fundamentals <span className='text-blue-500'>(Softwarica College of IT and E-commerce)</span></h1>
            <p className="text-slate-500 text-xs md:text-lg font-sans font-normal break-words mt-5">The Agile and Scrum Fundamentals course conducted by Softwarica College provided a strong foundation in modern project management methodologies. The course focused on Agile's iterative approach and the Scrum framework, emphasizing teamwork, flexibility, and continuous improvement. It was valuable for learning how to manage projects efficiently, ensuring adaptability to change and delivering high-quality products. Through real-world examples and hands-on activities, students experienced sprint planning, daily standups, and retrospectives, making it an ideal course for anyone looking to excel in collaborative and dynamic environments. Earning the certificate showcased practical skills for today's fast-paced tech industry.</p>
            </div>
            <img src='../images/certificatesimg/agileCertificate.jpg' className='bg-white h-[150px] w-[150px] md:h-[300px] md:w-[300px] mr-2 md:mr-20' alt='certificates'/>
        </div>


        <div className="certificate3 flex justify-between items-start mt-20 md:mt-10 h-auto w-full">
            <div className="words p-2 ml-5 h-auto w-auto">
            <h1 className='text-xl md:text-2xl font-bold text-white'>Digital Marketing Workshop <span className='text-blue-500'>(Softwarica College of IT and E-commerce)</span></h1>
            <p className="text-slate-500 text-xs md:text-lg font-sans font-normal break-words mt-5">The Digital Marketing Workshop at Softwarica College offered a comprehensive introduction to modern marketing strategies, focusing on digital channels like social media, SEO, content marketing, and analytics. The workshop was designed to help students understand the key tools and techniques for building online brand presence, engaging audiences, and driving growth. Through practical exercises and real-world case studies, participants learned how to create effective campaigns, optimize websites for search engines, and analyze performance metrics. Completing this workshop equipped students with valuable skills to thrive in the fast-evolving digital marketing landscape.</p>
            </div>
            <img src='../images/certificatesimg/MarketingCerti.jpg' className='bg-white h-[150px] w-[150px] md:h-[300px] md:w-[300px] mr-2 md:mr-20' alt='certificates'/>
        </div>
        </div>

    </div>
    <Footer/>
    </div>
)
}

export default Aboutme;

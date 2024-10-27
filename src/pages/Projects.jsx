import React from 'react';


//COMPONENTS
import Footer from '../components/Footer';
import Nav from '../components/Nav';


const Projects = () => {
return (
    <div className='mainContainer w-full h-auto bg-bgcolor'>
    <Nav/>

    <div className="Section1 w-full h-auto bg-bgcolor md:p-8 ">
        <div className="innerContainer bg-bgcolorlite mt-5 md:mt-0 h-auto w-full rounded-xl py-8 ">
            <h1 className="title text-orange-500 font-sans text-xl md:text-4xl font-bold ml-9 md:ml-14 ">PROJECT SHOWCASE</h1>

            <div className="projects h-auto w-full flex flex-col justify-evenly items-center gap-5 mt-5 md:mt-10 p-2">
                <div className="project1 rounded-xl bg-bgcolor h-auto w-full flex flex-row justify-between items-start">
                    <div className="words mt-3 md:mt-10">
                    <h1 className="title text-white ml-5 font-sans text-lg md:text-2xl font-bold">Ecommerce website for Nursery Firm</h1>
                    <p className=' text-slate-500 ml-5 font-sans text-xs md:text-lg mt-3  break-words'>Gajendra Nursery's e-commerce site, built with the MERN stack, features user authentication, a shopping cart,admin dashboard, and a responsive design for browsing and purchasing plants and services. It also includes a blog and supports gardening service bookings.</p>
                    </div>
                    <div className="imgpart  rounded-tr-xl rounded-br-xl h-full w-[50%]  bg-white flex flex-col justify-center items-center">
                        <div className="upperimg flex ">
                        <img src='../images/projectsimg/nursery1.png' className='h-[50%] w-[50%]' alt='pic'/>
                        <img src='../images/projectsimg/nursery2.png' className='h-[50%] w-[50%] rounded-tr-xl' alt='pic'/>
                        </div>
                    <div className="lowerimg flex">
                    <img src='../images/projectsimg/pgmobile.png' className='h-[300px] w-[300px]' alt='pic'/>
                    {/* <img src='../images/projectsimg/e-commerceaboutus.png' className='h-[50%] w-[50%] rounded-br-xl' alt='pic'/> */}
                    </div>
                    </div>
                </div>

                <div className="project2 rounded-xl bg-bgcolor h-auto w-auto flex flex-row justify-between items-start">
                <div className="imgpart  rounded-tl-xl rounded-bl-xl h-auto w-auto bg-white flex flex-col justify-center items-center">
                        <div className="upperimg flex">
                        <img src='../images/projectsimg/kerapp.png' className='h-[300px] w-[300px] rounded-tl-xl' alt='pic'/>
                        {/* <img src='../images/projectsimg/adminpanel.png' className='h-[60%] w-[50%] hidden md:block' alt='pic'/> */}
                        </div>
                    <div className="part2img flex">
                    <img src='../images/projectsimg/weather.png' className='h-[50%] w-[50%] rounded-bl-xl' alt='pic'/>
                    <img src='../images/projectsimg/news.png' className='h-[50%] w-[50%]' alt='pic'/>
                    </div>
                    </div>

                    <div className="words mt-3 md:mt-10">
                    <h1 className="title text-white ml-5 font-sans text-lg md:text-2xl font-bold">Websites/Webapps having API integration</h1>
                    <p className=' text-slate-500 ml-5 font-sans text-xs md:text-lg mt-3 break-words'>I have developed several dynamic web applications that leverage real-time API integrations to deliver updated and interactive user experiences. These projects include a weather app, a news app, among others. Each application uses external APIs to fetch and display live data, ensuring the content remains relevant and up-to-date. For instance, the weather app integrates with the OpenWeatherMap API to provide users with current weather conditions, forecasts, and related information. By utilizing state management tools like Redux and integrating real-time APIs, my applications ensure smooth data flow, enabling users to interact with fresh content effortlessly.</p>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <Footer/>
    </div>
)
}

export default Projects;

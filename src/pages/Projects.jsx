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

            <div className="project1 rounded-xl bg-bgcolor h-auto w-full flex flex-col md:flex-row justify-center items-center p-3">
                    <div className="words">
                    <h1 className="title text-white ml-5 font-sans text-lg md:text-2xl font-bold">DND (Drag-and-Drop)<br/> Kanban Board</h1>
                    <p className=' text-slate-500 ml-5 font-sans text-xs md:text-lg mt-3 p-2 break-words'> Developed Kanban board in <span className='text-orange-500'>Next.js </span>that incorporated state management to handle task organization efficiently and provided a responsive UI design using Tailwind CSS. To implement the drag-and-drop functionality for moving tasks between columns, we utilized the Dnd Kit library, which offers a robust and customizable set of tools for building accessible drag-and-drop interfaces. Dnd Kit's modular architecture allowed us to define draggable and droppable areas seamlessly. The board supported features like task creation, deletion, and editing making it a dynamic and interactive project management tool.</p>
                    </div>
                    <div className="imgpart rounded-xl h-auto w-auto mt-3 p-3 gap-5 bg-white flex flex-col justify-center items-center">
                        <div className="upperimg flex justify-between items-center gap-2">
                        <img src='../images/projectsimg/Kanban1.png' className='h-[50%] w-[50%]' alt='pic'/>
                        <img src='../images/projectsimg/Kanban2.png' className='h-[50%] w-[50%]' alt='pic'/>
                        </div>
                    <div className="lowerimg flex justify-between items-center gap-2">
                    <img src='../images/projectsimg/Kanban3.png' className='h-[50%] w-[50%]' alt='pic'/>
                    <img src='../images/projectsimg/Kanban4.png' className='h-[50%] w-[50%]' alt='pic'/>
                    </div>
                    </div>
                </div>

                <div className="project2 rounded-xl bg-bgcolor h-auto w-full flex flex-col md:flex-row justify-center items-center p-3">
                    <div className="words">
                    <h1 className="title text-white ml-5 font-sans text-lg md:text-2xl font-bold">Ecommerce website for Nursery Firm</h1>
                    <p className=' text-slate-500 ml-5 font-sans text-xs md:text-lg mt-3 p-2 break-words'>Gajendra Nursery's e-commerce site, built with the MERN stack, features user authentication, a shopping cart,admin dashboard, and a responsive design for browsing and purchasing plants and services. It also includes a blog and supports gardening service bookings.</p>
                    </div>
                    <div className="imgpart rounded-xl h-auto w-auto md:w-[1200px] p-3 mt-3 gap-5 bg-white flex flex-col justify-center items-center">
                        <div className="upperimg flex justify-between items-center gap-2">
                        <img src='../images/projectsimg/nursery1.png' className='h-[50%] w-[50%]' alt='pic'/>
                        <img src='../images/projectsimg/nursery2.png' className='h-[50%] w-[50%]' alt='pic'/>
                        </div>
                    <div className="lowerimg flex justify-between items-center gap-2">
                    <img src='../images/projectsimg/e-commerceaboutus.png' className='h-[50%] w-[50%]' alt='pic'/>
                    <img src='../images/projectsimg/e-commerceaboutus.png' className='h-[50%] w-[50%]' alt='pic'/>
                    </div>
                    </div>
                </div>

                <div className="project3 rounded-xl bg-bgcolor h-auto w-full flex flex-col md:flex-row justify-center items-center p-3">
                    <div className="words">
                    <h1 className="title text-white ml-5 font-sans text-lg md:text-2xl font-bold">Genuine Tech and Services Website</h1>
                    <p className=' text-slate-500 ml-5 font-sans text-xs md:text-lg mt-3 p-2 break-words'>The Genuine Tech and Service website is a professional company platform showcasing services like server and network maintenance, VMware support, and other technology solutions. The website features a clean and responsive design to provide an intuitive user experience. It includes detailed service descriptions, a blog section for sharing tech insights, and an admin dashboard for managing content updates. This platform highlights the company's expertise and commitment to delivering reliable tech services to its clients.</p>
                    </div>
                    <div className="imgpart rounded-xl  h-[90%] md:h-auto w-[90%] md:w-auto mt-3 p-3 gap-5 bg-white flex flex-col justify-center items-center">
                        <div className="upperimg flex justify-between items-center gap-2">
                        <img src='../images/projectsimg/gts1.png' className='h-[50%] w-[50%]' alt='pic'/>
                        <img src='../images/projectsimg/gts2.png' className='h-[50%] w-[50%]' alt='pic'/>
                        </div>
                    <div className="lowerimg flex justify-between items-center gap-2">
                    <img src='../images/projectsimg/gts3.png' className='h-[50%] w-[50%]' alt='pic'/>
                    <img src='../images/projectsimg/gts4.png' className='h-[50%] w-[50%]' alt='pic'/>
                    </div>
                    </div>
                </div>


                <div className="project4 rounded-xl bg-bgcolor h-auto w-full flex flex-col md:flex-row justify-center items-center p-3">
                    <div className="words">
                    <h1 className="title text-white ml-5 font-sans text-lg md:text-2xl font-bold">Websites/Webapps having API integration</h1>
                    <p className=' w-[90%] md:w-[1000px] text-slate-500 ml-5 font-sans text-xs md:text-lg mt-3 p-2 break-words'>I have developed several dynamic web applications that leverage real-time API integrations to deliver updated and interactive user experiences. These projects include a weather app, a news app, among others. Each application uses external APIs to fetch and display live data, ensuring the content remains relevant and up-to-date. For instance, the weather app integrates with the OpenWeatherMap API to provide users with current weather conditions, forecasts, and related information. By utilizing state management tools like Redux and integrating real-time APIs, my applications ensure smooth data flow, enabling users to interact with fresh content effortlessly.</p>
                    </div>
                    <div className="imgpart rounded-xl h-auto w-[90%] mt-3 p-3 gap-5 bg-white flex flex-col justify-center items-center">
                        <div className="upperimg flex justify-between items-center gap-2">
                        <img src='../images/projectsimg/adminpanel.png' className='h-[50%] w-[50%]' alt='pic'/>
                        <img src='../images/projectsimg/news.png' className='h-[50%] w-[50%]' alt='pic'/>
                        </div>
                    <div className="lowerimg flex justify-between items-center gap-2">
                    <img src='../images/projectsimg/weather.png' className='h-[50%] w-[50%]' alt='pic'/>
                    <img src='../images/projectsimg/e-commerceaboutus.png' className='h-[50%] w-[50%]' alt='pic'/>
                    </div>
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




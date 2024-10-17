import React, { useState } from 'react';
import { RxCross1, RxHamburgerMenu } from "react-icons/rx"; //ICONS
import { Link } from 'react-router-dom';


const Nav = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
const toggleNavMenu = () => setIsNavOpen(!isNavOpen);

return (
    <nav className="flex justify-between px-6 py-3 z-50 relative bg-bgcolor">
    <div className="flex justify-center items-center">
        <h1 className='text-white ml-3 md:ml-6  text-sm md:text-4xl font-LogoFont
cursor-pointer flex justify-center items-center'>Manjil Maharjan</h1>

    </div>
    <div className={` absolute min-h-[30vh] left-0 top-[90%] w-full p-5 flex flex-col md:static md:flex md:min-h-fit md:w-auto gap-9 text-sm bg-bgcolor ${isNavOpen ? 'block' : 'hidden'}`}>
    <ul className=" cursor-pointer text-white flex flex-col gap-4 md:flex-row  md:gap-8 md:justify-evenly md:text-xl font-sans">
    <Link to="/"> <li className="hover:text-slate-500">Introduction</li></Link>
    <Link to="/Projects">  <li className="hover:text-slate-500">Project Showcase</li></Link>
    <Link to="/Aboutme">  <li className="hover:text-slate-500">About Me</li></Link>
    <Link to="/Contact">  <li className="hover:text-slate-500">Contact Info</li></Link>
        </ul>
    </div>
    <div>
        <button onClick={toggleNavMenu} className="md:hidden">
            {
            isNavOpen ? <RxCross1 className="text-2xl text-white" /> :
            <RxHamburgerMenu className={`text-2xl text-white  ${isNavOpen ? 'hidden' : 'block'}`} />
            }
        </button>
    </div>
</nav>
)
}

export default Nav;
import React from 'react'
 //ICONS
import { RiDownloadLine } from "react-icons/ri";


const Resume = () => {
return (
    <div className="Resume  w-auto h-auto mt-10 text-sm lg:text-xl  bg-bgcolor rounded-xl">
    <a
    href='./resume/ManjilMaharjan_Resume.pdf'
    download="ManjilMaharjan_Resume.pdf">
    <button className='button-default flex justify-start items-center gap-3 p-2 rounded-2xl text-slate-500'>
    <RiDownloadLine />Download Resume</button>
    </a>
    </div>
)
}
export default Resume;

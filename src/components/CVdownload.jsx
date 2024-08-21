import React from 'react'
// import { Link } from 'react-router-dom';

import { FiDownload } from "react-icons/fi";

const CVdownload = () => {
return (
    <div className="CV w-full h-auto mt-5 flex justify-end">
    <a
    href='./cv/Manjilmaharjan_Resume.pdf'
    download="Manjilmaharjan_Resume.pdf">
    <button className='button-default'>
    <FiDownload/>Download CV</button>
    </a>
    </div>
)
}

export default CVdownload

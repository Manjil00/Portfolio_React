import React from 'react'
// import { Link } from 'react-router-dom';

import { FiDownload } from "react-icons/fi";

const CVdownload = () => {
return (
    <div className="CV w-full h-auto mt-5 flex justify-end">
    <a
    href='./cv/Manjil_CV.pdf'
    download="Manjil_CV.pdf">
    <button className='button-default'>
    <FiDownload/>Download CV</button>
    </a>
    </div>
)
}

export default CVdownload

import React, { useState } from 'react';

//COMPONENTS
import Nav from '../components/Nav';

//ICONS
import { AiOutlineMail } from "react-icons/ai";
import { LuPhone } from "react-icons/lu";
import { CiLinkedin } from "react-icons/ci";


const Contact = () => {
    const[fullName,setFullName]=useState('');
    const[email,setEmail]=useState('');
    const[phone,setPhone]=useState('');
    const[message,setMessage]=useState('');

    const handleSubmit=()=>{
            setFullName('');
            setEmail('');
            setPhone('');
            setMessage('');
    }
return (
<div className="mainContainer bg-bgcolor h-full w-full">
    <Nav/>
    <div className="ContactSec1 bg-bgcolor h-auto md:h-[87vh] w-full p-4 ">
    <div className="innerContainer-contact bg-bgcolorlite h-auto w-full flex flex-col  justify-start items-start rounded-xl mt-6 p-2">
        <h1 className='text-orange-500 font-sans text-xl md:text-4xl font-bold ml-9 md:ml-14 md:mt-5'>REACH ME </h1>
        <div className="leftright flex flex-col md:flex-row justify-evenly items-center h-auto w-full ">
        <div className="left  w-full mx-4 md:mx-20 text-xs md:text-xl flex  flex-col justify-start items-start gap-5 text-slate-500 mt-5 md:mt-0 md:ml-32 ">
            <h1 className='flex justify-start items-center '><AiOutlineMail /> -
                manzilmaharjan00@gmail.com
            </h1>
            <h1 className='flex justify-start items-center text-xs md:text-xl'><LuPhone /> -
                +977-9864530504
            </h1>
            <h1 className='flex justify-start items-center text-xs md:text-xl'><CiLinkedin/>-
                Manjil Maharjan
            </h1>
        </div>
        <div className="right bg-bgcolor h-[450px] w-[350px] md:h-[520px] md:w-[900px]
        rounded-xl md:mr-32  mt-5 md:mt-0 flex flex-col justify-evenly items-center ">
            <input onChange={(e)=>setFullName(e.target.value)}
            value={fullName}
            className='rounded-xl h-[45px] w-[300px] p-4' placeholder='FullName'  type='text'></input>

            <input  onChange={(e)=>setEmail(e.target.value)}
            value={email}
            className='rounded-xl h-[45px] w-[300px] p-4' placeholder='Email' type='email'></input>

            <input onChange={(e)=>setPhone(e.target.value)}
            value={phone}
            className='rounded-xl h-[45px] w-[300px] p-4' placeholder='Phone-Number' type='tel'></input>

            <input onChange={(e)=>setMessage(e.target.value)}
            value={message}
            className='rounded-xl h-[120px] w-[300px] p-4 ' placeholder='Description' type='text'></input>

            <button onClick={handleSubmit}
            className="submit bg-orange-500 rounded-xl p-2 h-[50px] w-[100px] tesx text-white text-xs md:text-lg">Submit</button>
        </div>
        </div>

    </div>
    
    </div>

</div>
)
}

export default Contact;

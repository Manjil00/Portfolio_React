import React from 'react'

const Progress = ({ percentage }) => {
return (
    <div className="w-[120px] md:w-[900px] bg-slate-500 rounded-full h-2 md:h-3 m-3" >
    <div
    className=" bg-blue-700 h-2 md:h-3 rounded-full"
    style={{ width: `${percentage}%` }}
    ></div>
</div>
)
}

export default Progress;

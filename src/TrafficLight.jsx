import React, { useEffect, useState } from 'react'

function TrafficLight() {
    const[red,setRed] = useState(true);
    const[yellow,setYellow] = useState(false);
    const[green,setGreen] = useState(false);

useEffect(()=>{
    setTimeout(()=>{
         setRed(false);
         setYellow(false);
         setGreen(true);
    },5000)
},[red])



useEffect(()=>{
    setTimeout(()=>{
         setRed(false);
         setYellow(true);
         setGreen(false);
    },6000)
},[green])

useEffect(()=>{
    setTimeout(()=>{
         setRed(true);
         setYellow(false);
         setGreen(false);
    },3000)
},[yellow])
    
  return (
    <div className='bg-black w-[10rem] h-[20rem] flex flex-col justify-evenly items-center'>
         <div className={`rounded-full w-[5rem] h-[5rem] ${red ?' bg-red-500 border-4 border-white ':'bg-red-800'}`}></div>
         <div className={`rounded-full w-[5rem] h-[5rem] ${yellow ?' bg-yellow-500 border-4 border-white  ':'bg-yellow-800'}`}></div>
         <div className={`rounded-full w-[5rem] h-[5rem] ${green ?' bg-green-400 border-4 border-white ':'bg-green-700'}`}></div>
    </div>
  )
}

export default TrafficLight
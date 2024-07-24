import React, { useState } from 'react'

function BackgorundChanger() {
  const[color,setColor] = useState("")

  function generatedColor(){
    const colors ='0123456789ABCDEF'
    let generated='';
    for(let i=0;i<6;i++){
      generated+=colors[Math.floor(Math.random()*16)];
    }
    //  console.log(generated);
    return "#"+generated;
  }


  function changeColor(){
   setColor(generatedColor()); 
  }
  
  return (
    <div className='w-screen h-screen'style={{backgroundColor:`${color}`}}>
      <h1>BackgorundChanger</h1>
        <button className='border-2 border-black' onClick = {changeColor}>Change Color !!</button>
      </div>
  )
}

export default BackgorundChanger
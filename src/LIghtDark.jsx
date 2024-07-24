import React, { useState } from 'react'

function LIghtDark() {
  const[mode,setMode] = useState("light");
  function toggle(){
    if(mode == "light"){
      setMode("dark")
    }
    else{
      setMode("light");
    }
  }
  return (
    <div className={mode=='light' ? 'bg-white':'bg-black'} >
      <h1 className={mode=='light' ? 'text-black' :'text-white'}>Try to toggle the theme and see the change !!!</h1>
      <button className={mode=='light' ? 'bg-pink-200':'bg-pink-500 text-white'} border-2  onClick={toggle}>Toggle Theme</button>
    </div>
  )
}

export default LIghtDark
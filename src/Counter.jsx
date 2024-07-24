import React, { useState } from 'react'

function Counter() {
  const [count,setCount] = useState(0);
  const [num,setNum] = useState(1);

  function change(value){
    if(value == "inc"){
       setCount((prev)=> prev+num);
    }else{
      setCount((prev)=>prev-num);
    }
  }
  return (
    <div>
      <h1>Counter</h1>
      <button onClick={()=>{change("inc")}}>Increment</button>
      <p>{count}</p>
      <button onClick={()=>{change("dec")}}>Decrement</button>

      <br/>
      <input type="number" value={num} onChange={(e)=>setNum(parseInt(e.target.value))}></input>
   <br/>
    <button onClick={()=>{
      setCount(0);
      setNum(1);
    }}>Reset</button>
    </div>

  )
}

export default Counter
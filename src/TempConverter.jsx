import React, { useState } from 'react'

function TempConverter() {
  const [temp,setTemp] = useState("");
  const[to,setTo] = useState("fahren");
  const[from,setFrom] = useState("celsius");
  const[ans,setAns] = useState("");

  function convert(){

    if(to == from){
      setAns(temp);
      return
    }
    if(to == 'fahren' && from == 'celsius'){
      let res = (9/5)*temp +32;
      setAns(res.toFixed(2));
    }
    else if(to == 'celsius' && from == 'fahren'){
      let res = (temp-32) *5/9;
      setAns(res.toFixed(2))
    }
  }
  return (
    <div>
   <label>Enter Temperature</label>
   <input type="text" value={temp} onChange={(e)=>{setTemp(e.target.value)}} placeholder='Enter Temperature'></input>
      <select value ={from} onChange={(e)=>{setFrom(e.currentTarget.value)}}>
        <option value="celsius">Celsius</option>
        <option value="fahren">Fahrenheit</option>
      </select>

      <button onClick={convert}>Convert</button>

      <select value={to} onChange={(e)=>{setTo(e.currentTarget.value)}}>
      <option value="celsius">Celsius</option>
      <option value="fahren">Fahrenheit</option>
      </select>

      <h1>converted temp : {ans}</h1>
    </div>
  )
}

export default TempConverter
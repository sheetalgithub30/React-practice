import React, { useState } from 'react'

function TableColorizer() {
  const arr =[{
    id:"1",
    value:false
  },
  {
    id:"2",
    value:false
  },
  {
    id:"3",
    value:false
  },
  {
    id:"4",
    value:false
  },
  {
    id:"5",
    value:false
  },
  {
    id:"6",
    value:false
  },
  {
    id:"7",
    value:false
  },
  {
    id:"8",
    value:false
  },
  {
    id:"9",
    value:false
  },
]

const[data,setData]= useState([...arr]);
  const[num,setNumber] = useState("");

  function color(){
    if(num>9){
      alert("enter in range");
      return;
    }
    let temp =[...data];
      temp[num-1].value= true;
      setData(temp)
      setNumber("");
  }
  function clear(){
     arr.map((e)=>{
      console.log(e);
      e.value=false;
     })
     setData([...arr]);
     setNumber("");
 }

  console.log(data);
  return (
    <div>
      <h1>Table Colorizer</h1>

      <input className='border-2 border-black my-2' type="number" value={num} onChange={(e)=>{setNumber(e.currentTarget.value)}}></input>
      <button onClick={color}>Color Me</button>
      <button onClick={clear}>Clear Me</button>
    <div className='flex flex-wrap w-24'>
    {
       data.map((e)=>{
        return <div className={e.value ? "w-8 border-black border-2 bg-red-600 ":"w-8 border-black border-2"}>{e.id}</div>
       })
      }
    </div>
     
    </div>
  )
}

export default TableColorizer
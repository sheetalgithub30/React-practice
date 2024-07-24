import React, { useState } from 'react'

function Gallery() {
  const[input,setInput] = useState("");
  const[list,setList] = useState([]);
  
  function handle(){
    const obj = {};
    obj.text = input;
    obj.val = true;
    obj.id = Date.now();
    setList([...list,obj]);
    setInput("")
  }
  function del(id){
    let arr =[...list];
    // console.log(arr)
    arr[id].val = false;
    setList(arr)
  }
  function restore(id){
    let arr =[...list];
    arr[id].val = true;
    setList(arr)
  }

  return (
    <div>
      <input type="url" placeholder='enter url' value={input} onChange={(e)=>setInput(e.currentTarget.value)}></input>
      <button onClick={handle}>Add</button>

      {list && list.map((e,index)=>{
        return e.val ?
        <div key={index}>
      <img className='w-[50%] p-10' src={e.text}></img>
     <button onClick={()=>{del(index)}}>Del</button>
     </div>
        :
        <div>

        </div> 
      
      })}

      <div>
        <hr></hr>
        <h1>In bin</h1>
        {list && list.map((e,index)=>{
        return e.val ?
       <></>
        :
        <div key={index}>
      <img className='w-[50%] p-10' src={e.text}></img>
     <button onClick={()=>{restore(index)}}>Restore</button>
     </div>
      
      })}
      </div>


    </div>
  )
}

export default Gallery
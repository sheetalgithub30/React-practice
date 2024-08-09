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
    <div className='bg-lime-500'>
      <input type="url" placeholder='enter url' value={input} onChange={(e)=>setInput(e.currentTarget.value)}></input>
      <button className='bg-blue-700 px-4 m-4' onClick={handle}>Add</button>

      {list && list.map((e,index)=>{
        return e.val ?
        <div key={index}>
      <img className='w-72 h-72 p-10' src={e.text}></img>
     <button className='bg-red-600 px-4 m-4' onClick={()=>{del(index)}}>Del</button>
     </div>
        :
        <div>

        </div> 
      
      })}

      <div className='bg-orange-400'>
        <hr className='h-3 bg-black'></hr>
        <h1 className='text-5xl text-center' >In bin</h1>
        {list && list.map((e,index)=>{
        return e.val ?
       <></>
        :
        <div key={index}>
      <img className='w-72 h-72 p-10 ' src={e.text}></img>
     <button className='bg-yellow-400 px-4 m-4' onClick={()=>{restore(index)}}>Restore</button>
     </div>
      
      })}
      </div>


    </div>
  )
}

export default Gallery
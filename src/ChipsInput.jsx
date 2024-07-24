import React, { useState } from 'react'

function ChipsInput() {
    const[text,setText] = useState("");
    const[list,setList] = useState([]);

    function handle(e){
       e.preventDefault();
        setList([...list,text]);
        setText("");
    }

    function handleDel(index){
       setList(list.filter((e,ind)=>{
            return ind !== index
        }))
    }
  return (
    <div>
        <form onSubmit={handle}>
        <input type="text" placeholder="Type and hit enter" value={text} onChange={(e)=>setText(e.currentTarget.value)} className='text-2xl m-4 border-black border-2'></input>
        </form>
       <div className="flex flex-wrap items-center ">
     
        {
            list.map((e,index)=>{
             return   <span className='bg-red-300 px-4 py-2 m-2 text-xl rounded-xl'>{e}  <button onClick={()=>handleDel(index)}>❌</button></span>
            })
        }

</div>
    </div>
  )
}

export default ChipsInput
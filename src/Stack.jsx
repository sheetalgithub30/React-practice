import React, { useState } from 'react'

function Stack() {
    const [value,setValue]= useState("");
    const[data,setData] = useState([]);
    const [text,setText] = useState(null);
    function push(){
        if(value==""){
            alert("Enter a valid value");
            return;
        }
        if(data.length<10){
            setData([value,...data])
            setText(`${value} is push into stack`)
        }
        else{
            setText("Stack is full")
        }
    }

    function pop(){
        if(data.length==0){
            setText("Stack is empty")
        }
        else{
            let temp = [...data];
            setText(`${temp.shift()} is removed from stack`)
            
            setData(temp);
        }
    }

    function peek(){
        if(data.length==0){
            setText("Stack is empty")
        }
        else{
            let temp = [...data];
            setText(temp.shift()+" is the peek")
        }

    }
    function full(){
        if(data.length == 10){
            setText("Stack is full")
        }
        else{
            setText("Stack is not full");
        }
    }

    function empty(){
        if(data.length < 10){
            setText("Stack is empty")
        }
        else{
            setText("Stack is not empty");
        }
    }

      return (
    <div className='mx-auto my-10 border-2 border-black p-2 w-3/5 text-center'>
        <input className='border-2 text-2xl m-2' type="text" placeholder='Enter a value' value={value} onChange={(e)=>setValue(e.currentTarget.value)}></input>
        <div>
            { text!=='null'?
               <p>{text}</p>:""
            }
        </div>
        <div className='p-2'>
            <button className='p-1.5 border-2 m-2 bg-indigo-500 text-white text-xl' onClick={push}>Push</button>
            <button className='p-1.5 border-2 m-2 bg-indigo-500 text-white text-xl' onClick={pop}>Pop</button>
            <button className='p-1.5 border-2 m-2 bg-indigo-500 text-white text-xl' onClick={peek}>Peek</button>
            <button className='p-1.5 border-2 m-2 bg-indigo-500 text-white text-xl' onClick={empty}>IsEmpty</button>
            <button className='p-1.5 border-2 m-2 bg-indigo-500 text-white text-xl' onClick={full}>IsFull</button>
        </div>
        <div>
            {data.map((e,index)=>{
               return <div className='bg-rose-400 m-2 text-xl' key={index}>{e}</div>
            })}
        </div>
    </div>

  )
}

export default Stack
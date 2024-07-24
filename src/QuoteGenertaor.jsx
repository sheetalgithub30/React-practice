import React, { useEffect, useState } from 'react'

function QuoteGenertaor() {
    const[text,setText] = useState("");
    const[data,setData] = useState("");


     useEffect(()=>{
        handleGenerate();  
    },[])

    async function handleGenerate(){
        const response =  await fetch(`https://api.quotable.io/quotes/random?tags=${text}`);
        const result = await response.json();
        setData(result[0]);
        console.log(result[0]);
    }


  return (
    <div className='flex flex-col justify-center items-center m-20'>
        <h1 className='text-4xl'>Quote Generator</h1>
        {
           data.length>0 ?
              <div className='m-10 text-center'>
                <h1 className='text-5xl pb-5 '>{data.content}</h1>
                <p className='text-xl'>-{data.author}</p>
                </div>
           :
           
            <h1 className='text-2xl my-2 text-rose-500'> Sorry No Quotes Found Related to the given tags</h1>
        }

        <div>
            <label>Tags </label>
            <input className='px-6 text-xl w-full' type="text" placeholder="e.g. inspirational,history,technology" value={text} onChange={(e)=>setText(e.currentTarget.value)}>
            </input>
            <div className='flex items-center justify-center my-4'>
            <button onClick={handleGenerate} className='border-2 p-2 bg-black text-white rounded-lg'>Generate</button>
            </div>
        </div>
    </div>
  )
}

export default QuoteGenertaor
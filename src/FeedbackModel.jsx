import React, { useState } from 'react'
const data= [
  {"value":"terrible"},
  {"value":"unHappy"},
 {"value":"happy"}
]

function FeedbackModel() {
  const[show,setShow] = useState(false);


  return (< >
  
  <button 
  onClick={()=>setShow(true)}
  className='bg-purple-500 px-2 rounded-md'>Feedback</button>

  {
      show && <FeedbackModelBox setShow={setShow}/>
  }
  </>
  )
}


function FeedbackModelBox({setShow}){
return(
  <div className='w-96 m-auto'>
   <div className='flex justify-between'>
   <h1>User Feedback</h1>  
   <h1 onClick={()=>setShow(false)}>X</h1>
    </div> 
     <div className='flex justify-between m-4'>
      {
        data.map((e)=>{
         return <p onClick={()=>{}}>{e.value}</p>
        })
      }
     </div>
  </div>
)
}
export default FeedbackModel
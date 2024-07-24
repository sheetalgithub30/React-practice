import { useState } from "react";

function ToDo(){
const[input,setInput] = useState("");
const[list,setList] = useState([]);

function handleSubmit(e){
  e.preventDefault();
  const obj = {};
  obj.text = input;
  obj.id = Date.now();
  obj.val = true;
  setList([...list,obj]);

  // console.log(list)
}

function handledel(id){
  setList(list.filter((e)=>{
   return e.id !== id
  }))
}

function check(id){
   let arr = [...list];
   arr[id].val = !arr[id].val;
   setList(arr)
}

return(
  <>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter list" value={input} onChange={(e)=>{setInput(e.currentTarget.value)}}></input>
      <input type="submit" value="ADD"></input>
    </form>  

    {
      list.map((ele,index)=>{
        return(
         <>
         <div>
          <button onClick={()=>{check(index)}}>Check</button>
          {
            ele.val ? <p>{ele.text}</p> :<del>{ele.text}</del>
          }
          <button onClick={()=>{handledel(ele.id)}}>Delete</button>
         </div>
         </>
        )
      })
    }
  </>
)
}
export default ToDo;
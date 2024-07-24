import React, { useState } from 'react'

function Anagram() {
    const[first, setFirst]=useState("");
    const[second,setSecond] = useState("");
    const[text,setText]= useState(null);

    function check(){

    //     let obj={};
    //     for(let i=0;i<first.length;i++){
    //         if(first[i] in obj)
    //            obj[first[i]]= obj[first[i]]+1;
        
    //         else
    //            obj[first[i]] = 1;
    //          }

    //  for(let i=0;i<second.length;i++){
    //     if(second[i] in obj)
    //        obj[second[i]]= obj[second[i]]-1;
    //     else
    //        obj[second[i]] = 1;
    //      }
 
    //  for(let i in obj){
    //     if(obj[i] !== 0){
    //      setText("Not AN anagram");
    //      return;
    //     }
    //  }

    //  setText("anagram")

    let result = (first.toLowerCase().split("").sort().join('') === second.toLowerCase().split("").sort().join(''));
 
      setText(result);

    }
  return (
    <div>
        <input type="text" placeholder="Enter the first word" value={first} onChange={(e)=>setFirst(e.currentTarget.value)}></input>
        <input type="text" placeholder="Enter the second word" value={second} onChange={(e)=>setSecond(e.currentTarget.value)}></input>
        <button onClick={check}>Check Anagram</button>
        { text !== null
            &&
        <p>{text ? "Is anagram":"not an anagram"}</p>
        }
    </div>
  )
}

export default Anagram
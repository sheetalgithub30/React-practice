import React, { useState } from 'react'

function WordCount() {
    const[words,setWords] = useState(0);
    const[char,setChar] = useState(0);
    const[para,setPara] = useState(0);
    const[text,setText] = useState("");

    function count(){
        setChar(text.length);
        setWords(text.split(/\s+/).filter((word)=>word !='').length);
        setPara(text.split("\n").filter((para)=>para.trim() !='').length);
    }
    function clear(){
        setText("");
        setChar(0);
        setPara(0);
        setWords(0);
    }
  return (
    <div>
        <textarea cols="80" rows="10" value={text} onChange={(e)=>{setText(e.currentTarget.value)}} placeholder='Enter your text here....'></textarea>

        <div>
            <h1>Words: {words}</h1>
            <h1>Chars: {char}</h1>
            <h1>Paras: {para}</h1>

            <button onClick={count}>Count</button>
            <button onClick={clear}>Clear</button>
        </div>
    </div>
  )
}

export default WordCount
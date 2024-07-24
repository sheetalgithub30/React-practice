import React, { useEffect, useState } from 'react'

function ColumnTable() {
    const[row,setRow] = useState(2);
    const[col,setCol]= useState(2);

    const[data,setData]=useState([]);

    useEffect(()=>{
        let count =1;
        let val = [];

       for(let i=0;i<row;i++){
        let temp =[];
        for(let j=0;j<col;j++){
           temp.push(count++);
        }

        val.push(temp);
           
         setData(val);
       }
    },[row,col])

  return (
    <div>
        <h1>Column Table</h1>
        <div>
            <h2>Rows: {row}</h2>
            <input type="range" max="8" min="2" value={row} onChange={(e)=>{setRow(e.currentTarget.value)}}></input>
        </div>
        <div>
            <h2>Cols :{col}</h2>
            <input type="range" max="8" min="2" value={col} onChange={(e)=>{setCol(e.currentTarget.value)}}></input>
        </div>

        <div className='flex '>
    {
        data.map((e)=>{
           return< div className='m-4 gap-2' >
            {
                e.map((vals)=>{
                  return <div className="border-2 px-2 w-10 text-center m-2">{vals}</div>
                })
            }
           </div>
        })
    }

</div>


    </div>
  )
}

export default ColumnTable;
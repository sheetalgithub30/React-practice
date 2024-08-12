import React, { useState } from 'react'


const categories =["fruits","vegetables","dairy"];

const categories_value =[{
    Fruits:[],
    fruits: ['Apple','Banana','orange'],
    vegetables:['Carrot','Brocolli'],
    dairy:['Milk','Eggs','Cheese'] 
  }]
function Category() {
    const[selected,setSelected] = useState('Fruits');
    const[disable,setDisable] = useState(true);
   
  return (<>
  <select value={selected} onChange={(e)=>{
    setDisable(false)
    setSelected(e.target.value)}}>
        <option value='Fruits'>Fruits</option>
       {categories.map((e)=>{
       return <option value={e}>{e}</option>
       })}
    </select>

    <select disabled={disable}>
        {categories_value.map((e)=>{
    //   console.log(e[selected])
         return <>
         <option>Select</option>
          {e[selected].map((ele)=>{
            return <option>{ele}</option>
          })}
         </>
        })}
    </select>
  </>
    
  )
}

export default Category
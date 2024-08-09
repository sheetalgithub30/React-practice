import React, { useState } from "react";

const list = [
  {
    name: "Parada",
    value: "Bags",
  },
  {
    name: "Gucci",
    value: "Bags",
  },
  {
    name: "Guess",
    value: "Bags",
  },
  {
    name: "Rolex",
    value: "Watches",
  },
  {
    name: "Timex",
    value: "Watches",
  },
  {
    name: "Nike",
    value: "Sports",
  },
  {
    name: "Adidas",
    value: "Sports",
  },
  {
    name: "Fila",
    value: "SPorts",
  },
  {
    name: "Ray Ban",
    value: "Sunglasses",
  },
  {
    name: "Aldo",
    value: "Sunglasses",
  },
  {
    name: "Polaroid",
    value: "Sunglasses",
  },
];

const button = [
  { name: "Bags", value: false },
  { name: "Watches", value: false },
  { name: "Sports", value: false },
  { name: "Sunglasses", value: false },
];

let arr =[];

function Tabs() {
  const [data, setData] = useState(list);
  const [buttons, setButtons] = useState(button);

  function handle(index) {
    let new_arr = [...buttons];
    console.log(new_arr[index].name);
    if (new_arr[index].value == true) {
      new_arr[index].value = false;
     arr= arr.filter((e)=>{
        return e != new_arr[index].name
      })
    } else {
      new_arr[index].value = true;
      arr.push(new_arr[index].name)
    }
  
   setButtons(new_arr);
    setData(
      list.filter((e) => {
        return arr.includes(e.value) 
      })
    );


    if(arr.length == 0){
      setData(list)
    }
  }

  console.log("arr",arr)


  return (
    <div className="text-center">
      {buttons.map((b, index) => {
        return (
          <button
            onClick={() => handle(index)}
            className={`m-5  p-2 rounded-md ${
              b.value ? "bg-black text-white" : "bg-gray-300"
            } `}
          >
            {b.name}
          </button>
        );
      })}
      <div className="flex flex-wrap">
        {data.map((d) => {
          return (
            <div className="w-[6rem] h-[6rem] m-6 border-2 border-black flex flex-col justify-center items-center">
              <p className="text-xl">{d.name}</p>
              <p>
                <i>{d.value}</i>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Tabs;

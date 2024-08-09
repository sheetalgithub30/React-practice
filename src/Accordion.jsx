import React, { useState } from 'react'

const arr=[
    {
        id:1,
        title:"Do I have to allow the use of cookies?",
        value:"Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
        show:false
    },
    {
        id:2,
        title:"How do I change my My Page password?",
        value:"Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.",
        show:false

    },
    {
        id:3,
        title:"What is BankID?",
        value:"Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.",
        show:false

    },
    {
        id:4,
        title:"Whose birth number can I use?",
        value:"Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify",
        show:false

    },
    {
        id:5,
        title:"When do I recieve a password ordered by letter?",
        value:"Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan",
        show:false

    }
]



function Accordion() {
    
const[data,setData] = useState(arr);

function show(idx){
    let new_arr =[...data];
    if(new_arr[idx].show == true){
        new_arr[idx].show = false;

    }else{
    new_arr[idx].show = true;
    }
    setData(new_arr);
}

  return (
    <>
    <h1 className='text-center'>Accordion</h1>
     {
        data.map((ele,index)=>{
           return <div className='border-2 m-4 p-2 ' key={ele.id}>
            <div className='flex justify-between'>
            <div className='text-xl'>{ele.title}</div>
            <button className='m-3' onClick={()=>{show(index)}}>
                {ele.show?"➖":"➕"}
            </button>
          
            </div>
              <div>
            {ele.show == true ?<>
              {ele.value}
            </>:<></>
            }
            </div>
           </div>
        })
     }
    </>
  )
}

export default Accordion
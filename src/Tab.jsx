import React, { useState } from "react";

const list = [
  {
    name: "tab1",
    h1: "Content of Tab1 :",
    para: "HTML elements tell the browser how to display the content. For example, you can use HTML to create static pages with text, headings, tables, lists, images, links, and more.",
    value: true,
  },
  {
    name: "tab2",
    h1: "Content of Tab2 :",
    para: "Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML.",
    value: false,
  },
  {
    name: "tab3",
    h1: "Content of Tab3 :",
    para: "JavaScript, often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS. 99% of websites use JavaScript on the client side for webpage behavior. Web browsers have a dedicated JavaScript engine that executes the client code.",
    value: false,
  },
];



function Tab() {
  const[data,setData] = useState(list);

  function handle(index) {
    let new_data = [...data];
     new_data.map((e)=>{
      e.value = false
    })
    new_data[index].value= true;
    setData(new_data)
  }

  
  return (
    <div className="border-2 border-black w-[20rem]">
      {data.map((e, index) => {
        return (<>
          <button onClick={() => handle(index)} className={`p-5 ${e.value? 'bg-blue-600':"bg-blue-400"}`}>
            {e.name}
          </button>

          
        </>
        );
      })}

      {data.map((e) => {
        return (
          <>
            {e.value ? (
              <div>
                <h1>{e.h1}</h1>
                <p>{e.para}</p>
              </div>
            ) : (
              <>{e.value}</>
            )}
          </>
        );
      })}
    </div>
  );
}

export default Tab;

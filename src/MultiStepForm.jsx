import React, { useState } from "react";

function MultiStepForm() {
  const data = [
    {
      id: "name",
      label: "Name",
      inputType: "text",
      buttonName: "Next",
      placeholder: "Your Name...",
    },
    {
      id: "email",
      label: "Email",
      inputType: "email",
      buttonName: "Next",
      placeholder: "Your Email...",
    },
    {
      id: "dob",
      label: "DOB",
      inputType: "date",
      buttonName: "Next",
      placeholder: "",
    },
    {
      id: "password",
      label: "Password",
      inputType: "password",
      buttonName: "Submit",
      placeholder: "Your Password...",
    },
  ];

  const [index, setIndex] = useState(0);
  const [forms, setForms] = useState(data);
  const[isFormSub,setIsFormSub] = useState(true); 

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    password: "",
  });

  function handle(e) {
    e.preventDefault();
    if (index == forms.length - 1) {
      setIsFormSub(false);
    } else {
      setIndex((index) => index + 1);
    }
  }

  function handleBack(e) {
    e.preventDefault();
    setIndex((index) => index - 1);
  }

  function handleInput(e){
    const id= e.target.id;
    const val = e.target.value;
    const new_arr = {...formData};
    new_arr[id] = val;
    setFormData(new_arr);
  }


  return (
    <div className="text-2xl flex justify-center items-center h-screen">
 {isFormSub ? (
  <form
  className="flex justify-center items-start flex-col m-4"
  onSubmit={handle}
>
  {index > 0 && (
    <a href="/" className="underline text-blue-700" onClick={handleBack}>
      Back
    </a>
  )}
  <label className="p-2">{forms[index].label}</label>
  <input
  value={formData[forms[index].id]}
   id={forms[index].id}
   onChange={handleInput}
    className="p-2 border-black border-2"
    type={forms[index].inputType}
    placeholder={forms[index].placeholder}
  ></input>
  <button className="text-white bg-violet-800 rounded-lg px-6 py-2 m-2">
    {forms[index].buttonName}
  </button>
</form>
      ):(
        <div className="border-black border-2 p-4">
        <p>Name : {formData.name}</p>
        <p>Email : {formData.email}</p>
        <p>DOB : {formData.dob}</p>
        <p>Password : {formData.password}</p>
      </div>
      )
      }
    

     
    </div>
  );
}

export default MultiStepForm;

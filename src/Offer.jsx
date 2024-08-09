import React, { useState } from "react";

function Offer() {
  const [show, setShow] = useState(false);
  const[offer,setOffer] = useState(true);
  function accept() {
    setOffer(false);
  }
  return (
    <div className="flex justify-center items-center h-screen">
   {offer ?<>
    {show ? (
        <div className="bg-orange-400 w-[15rem] h-[15rem] p-5 flex flex-col justify-between">
          <div>
            <button onClick={()=>setShow(false)}>X</button>
            <p>Click the button</p>
          </div>
          <button onClick={accept} className="border-black border-2 p-2 bg-violet-800 text-white">
            Accept Offer
          </button>
        </div>
      ) : (
        <button
          onClick={()=>setShow(true)}
          className="border-black border-2 p-3 bg-violet-800 text-white"
        >
          Show Offer
        </button>
      )}
   </>:<>
   <h1 className="text-4xl">Offer Accepted</h1>
   </>}

    </div>
  );
}

export default Offer;

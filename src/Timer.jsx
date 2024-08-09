import React, { useState } from "react";

function Timer() {
  const [isStart, setIsStart] = useState(false);
  const[hours,setHours] = useState(0);
  const[mins,setMinus] = useState(0);
  const[sec,setSec] = useState(0);

  function handleStart(){
    setIsStart(true)
  }

  function handleReset(){
    setIsStart(false)
  }
  return (
    <div className="bg-blue-400 h-screen flex  flex-col items-center justify-center">
      <h1 className="text-3xl">CountDown Timer</h1>
      {isStart ? (<>
        <div className="flex text-6xl  text-white p-5">
          <div>18</div>
          <span>:</span>
          <div>45</div>
          <span>:</span>
          <div>23</div>
        </div>
        <div>
        <button  
          className="bg-violet-700 text-white px-6 py-2 m-3 rounded-xl">
            Pause
          </button>
          <button
          onClick={handleReset}
          className="bg-violet-700 m-3 text-white px-6 py-2 rounded-xl">
            Reset
          </button>
        </div>
      </>
      ) : (
        <>
          <div>
            <input
              id="hours"
              className="border-2 border-black w-12 h-12 m-2 text-center"
              placeholder="HH"
            />
            :
            <input
              id="mins"
              className="border-2 border-black w-12 h-12 m-2 text-center"
              placeholder="MM"
            />
            :
            <input
              id="sec"
              className="border-2 border-black w-12 h-12 m-2 text-center"
              placeholder="SS"
            />
          </div>
          <button
          onClick={handleStart}
          className="bg-violet-700 text-white px-6 py-2 rounded-xl">
            Start
          </button>
        </>
      )}
    </div>
  );
}

export default Timer;

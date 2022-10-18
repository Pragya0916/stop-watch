import React, { useEffect, useState } from "react";

const App = () => {
 

  const [showTime, setShowTime] = useState("");
  const [displayTime, setDisplayTime] = useState(false);
  const [buttonText , setButtonText] = useState("Start")
  const [timer , setTimer] = useState(1)




  useEffect(()=> {
    if(timer>0 && timer<5){ 
        setTimeout( ()=> {
          setTimer(timer+1)
        },1000)
    }} , [timer] )

    
    
 

  
 

  function handlerClick() {
    setDisplayTime(!displayTime);

    if(!displayTime){

      const UpdateTime = () => {
        let currTime = new Date().toLocaleTimeString();
        setShowTime(currTime);
      };
        setInterval(UpdateTime, 1000);
        setButtonText("Stop")
    }

    else{
        setButtonText("Start")
    }
    }
   
  

  return (
    <>
{

}
      <h1 className="container text-center fw-bold p-2 mt-2">{timer}</h1>


      <div className="mt-2 d-flex justify-content-center">
        <button className="btn btn-dark mt-2 d-flex justify-content-center text-white" onClick={handlerClick}>
          {buttonText}
        </button>
        </div>

        {!displayTime ? ""
         :(
            <h1 className="container text-center text-info  p-2 mt-4">{showTime}</h1>
        )}
      
    </>
  );
};

export default App;

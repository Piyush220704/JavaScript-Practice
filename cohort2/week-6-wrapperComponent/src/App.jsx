import { useState, useEffect } from 'react'

import './App.css'

function App() {
  useEffect(()=>{
    alert("hi");
  }, []);
  return (
    <>
      {/* <CardWrapper>
        hi there  
      </ CardWrapper > */}

        <div>
          hi there
        </div>



    </>
  )
}





















export default App








// function TextComponent(){
//   return <div style={{fontSize:"20px", color:"red"}}>
//     hi there
//   </div>
// }

// function CardWrapper({children}){
//   return <div style={{border: "2px solid black", height:"100px"}}>
//     {children}
//   </div>
// }


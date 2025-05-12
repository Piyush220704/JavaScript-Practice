import { useState, useMemo } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [number, setNumber] = useState(1)

  let value = useMemo(()=>{
    let finalValue = 0;
    for(let i=0;i<=number;i++){
      finalValue += i;
    }
    return finalValue
  }, [number])
 
  
  return (
    <>
      <div style={{padding: '20px'}}>
        <input placeholder='enter the number' onChange={(e)=>setNumber(e.target.value)}/><br />
        <p>the sum is {value }</p>


        <button onClick={() => setCount(count + 1)}>Count : {count}</button>
      </div>
    </>
  )
}

export default App

import { useState, useCallback, useMemo, memo } from 'react'

function App(){

  const [count, setCount] = useState(0);

  function logSomething(){
    console.log("child Clicked")
  }

  return(
    <>
      <button onClick={()=>{setCount(count+1)}}>count {count}</button>

      <ButtonComponent inputFunction={logSomething} />
    </>
  )
}

const ButtonComponent = memo(({inputFunction})=>{
  console.log("child renders");
  return <div>
    <button onClick={inputFunction}>button Clicked</button>
  </div> 
})



















































// import { useState, useCallback, useMemo, memo } from 'react'

// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   // const a = function(){
//   //   console.log("hi there")
//   // };

//   const a = useCallback(function(){
//     console.log("hi there")
//   }, [])


//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>count {count}</button>
//       <Demo a={a} />
//     </div>
//   )
// }

// const Demo = memo(({a})=>{
//   console.log("render");
//   return <div>hi there</div>
// })

export default App

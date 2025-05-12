import React, { useEffect, useState } from 'react'
import './App.css'
import useTodos from './hooks/useTodos'
import useIsOnline from './hooks/useIsOnline';
import useGetMousePos from './hooks/useGetMousePos';
import useIncreseCount from './hooks/useIncreaseCount';
import useDebounce from './hooks/useDebounce';
function App(){
  const [input, setInput] = useState('');
  const debouncedInput = useDebounce(input, 500);

  return (
    <>
    <input type='text' value={input} onChange={(e)=>setInput(e.target.value)} placeholder='search'/>
    <div>{debouncedInput}</div>  
    </>
  )


}


















export default App
// function App(){
//   const count = useIncreseCount();
//   return(
//     <div>
//       count: {count}
//     </div>
//   )
// }


// function App(){
  //   const getMousePos = useGetMousePos();
  //   return(
    //     <div>
    //       x: {getMousePos.x}, y: {getMousePos.y}
    //     </div>
    //   )
// }




// function App(){
  //   const isOnline = useIsOnline();
  //   if(isOnline){
    //     return <h1>Online</h1>
//   }else{
  //     return <h1>Offline</h1>
//   }
// }

// function App() {
  //   const {todos, loading} = useTodos(5);
  //   return (
    //     <>
    //       {loading && <div>loading...</div>}
    //       {todos && todos.map((todo)=>{
      //         return <Todo key={todo.id} todos={todo} />
      //       })}
      
      //     </>
//   )
// }

// function Todo({ todos }) {
//   return (
//     <div
//       style={{
//         display: 'inline-flex',
//         flexDirection: 'column',
//         gap: '10px',
//         justifyContent: 'center',
//         alignItems: 'center',
//         border: '1px solid black',
//         padding: '10px'
//       }}
//     >
//       <div style={{ fontWeight: 'bold' }}>{todos.id}</div>
//       <div>{todos.title}</div>
//       <div>{todos.description}</div>
//     </div>
//   );
// }

































































// function MyComponent(){
//   const [count, setCount] = useState(0);
  
//   const increment = ()=>{
//     setCount(c=>c+1);
//   }
//   return (
//     <div style={{display:'flex', flexDirection:'column', gap:'10px' }}>
//       {count}
//       <button onClick={increment} style={{width:'100px'}}>click me</button>
//     </div>
//   )
// }

//class based component
// class MyComponent extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = { count : 0 };
//   }
//   incrementCount = ()=>{
//     this.setState({count: this.state.count+1});
//   }
//   render(){
//     return (
//       <div style={{display:'flex', flexDirection:'column', gap:'10px' }}>
//         <p>{this.state.count}</p>
//         <button onClick={this.incrementCount} style={{width:'100px'}}>click me</button>
//       </div>
//     );
//   }
// }

//lifeCycle event
//mount or unmount the document
//functional based component
// function MyComponent(){
//   useEffect(()=>{
//     console.log("component mounted");
//     return ()=>{
//       console.log("component unmounted");
//     }
//   },[])
//   return <div>
//     <p>hello from MyComponent</p>
//   </div>
// }
//class based component
// class MyComponent extends React.Component{
//   componentDidMount(){
//     console.log("component mounted");
//   }
//   componentWillUnmount(){
//     console.log("component unmounted");
//   }
//   render(){
//     return <div>
//       hi there from class based component 
//   </div>
//   }
// }

//App.jsx for rendering the above logics
// function App() {
//   const [render, setRender] = useState(true);
//   useEffect(()=>{
//     setTimeout(()=>{
//       setRender(false)
//     },10000)
//   }, [])
//   return (
//     <>
//       {render && <MyComponent />}

//     </>
//   )
// }


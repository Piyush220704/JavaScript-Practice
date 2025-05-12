import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from "axios"
import './App.css'

function App() {
  const [todoId, setTodoId] = useState(1)

  function changeTodo(id){
    setTodoId(id)
  }
  
  return (
    <div>
      <button onClick={()=>changeTodo(1)} style={{marginRight: "10px"}}>1</button>
      <button onClick={()=>changeTodo(2)} style={{marginRight: "10px"}}>2</button>
      <button onClick={()=>changeTodo(3)} style={{marginRight: "10px"}}>3</button>
      <button onClick={()=>changeTodo(4)} style={{marginRight: "10px"}}>4</button>
      <button onClick={()=>changeTodo(5)} style={{marginRight: "10px"}}>5</button>

      <Todo id={todoId}/>
    </div>
  )
}

function Todo({id}){
  const [todo, setTodo] = useState({})

  useEffect(()=>{
    axios.get('http://localhost:3000/todos/' + id).then(response=>{
      setTodo(response.data.todo);
    })
  }, [id])

  return <div>
    <h1>{todo.title}</h1>
    <p>{todo.description}</p>
  </div>
}

export default App

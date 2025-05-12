import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([
    {
      id : 1,
      title: "todo 1",
      description: "description 1",
    },
    {
      id : 2,
      title: "todo 2",
      description: "description 2",
    },
    {
      id : 3,
      title: "todo 3",
      description: "description 3",
    },
  ]);

  function addTodo(){
    setTodo([...todo, {
      id : todo.length + 1,
      title: `todo ${todo.length + 1}`,
      description: `description ${todo.length + 1}`,
    }])
  }

  return (
    <>
      <button onClick={addTodo}>Add a Todo</button>
      {todo.map((todo)=>{
        return <Todo key={todo.id} title = {todo.title} description={todo.description} />
      })}
    </>
  )
}

function Todo({ title, description }) {
  return (
    <>
      <h1>{title}</h1>
      <h2>{description}</h2>
    </>
  );
}

export default App;

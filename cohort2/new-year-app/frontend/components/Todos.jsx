import React from 'react'

function Todos({todos}) {
  return (
    <>
    

    {todos.map((todo, index)=>{
        return <div key={index}>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button>{todo.completed == true ? "completed" : "mark as complete"}</button>
        </div>

    })}
    
    </>
  )
}

export default Todos
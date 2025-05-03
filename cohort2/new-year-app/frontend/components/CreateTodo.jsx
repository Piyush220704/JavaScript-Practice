import React, { useState } from 'react'

function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
  return (
    <div>
        <input type="text" placeholder='title' onChange={function(e){
            const value = e.target.value;
            setTitle(value)
        }}/>
         <br /><br />
        <input type="text" placeholder='description' onChange={function(e){
            const value = e.target.value; 
            setDescription(value);
        }} />
        <br /><br />
        <button onClick={()=>{
            fetch("http://localhost:3001/todos", {
                method: "POST",
                body : JSON.stringify({
                    title: title,
                    description : description
                }),
                headers: {
                    "Content-type": "application/json"
                }
            }).then(async function(res){
                const json = await res.json();
                alert("todo added");
            })
        }}>Add a Todo</button>
    </div>
  )
}

export default CreateTodo
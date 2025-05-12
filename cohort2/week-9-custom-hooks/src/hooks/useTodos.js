//kinda solution to 3rd assignment

import axios from "axios";
import { useState, useEffect} from "react";
function useTodos(n) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchTodos = async () => {
        setLoading(true);
        const settimeoutid = setTimeout(async()=>{
          const res = await axios.get("http://localhost:3000/todos");
          setLoading(false);
          setTodos(res.data);
        }, 1000)
      return () => {
        clearTimeout(settimeoutid);
      }
    };

    fetchTodos();
    const id = setInterval(fetchTodos, n*1000);
    return () => {
      clearInterval(id);
    };
  }, [n]);
  return { todos, loading };
}

export default useTodos;


// first and second assignment solution week-9 custom hooks
// import axios from 'axios';
// import { useState, useEffect } from 'react';
// function useTodos(){
//     const [todos, setTodos] = useState([]);
//     const [loading, setLoading] = useState(true);
//     useEffect(()=>{
//         setTimeout(()=>{
//             async function fetchTodos(){
//                 const res = await axios.get('http://localhost:3000/todos');
//                 setLoading(false)
//                 setTodos(res.data);
//             }
//             fetchTodos();

//         }, 1000)
//     }, [])
//     return {todos, loading};
// }

// export default useTodos;

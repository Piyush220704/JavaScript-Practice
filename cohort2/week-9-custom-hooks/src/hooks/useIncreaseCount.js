import { useState, useEffect, use } from "react";

const useIncreseCount = ()=>{
    const [count, setCount] = useState(0);
    useEffect(()=>{
        const id = setInterval(()=>{
            setCount(c=>c+1);
        }, 1000);
        return ()=>{
            clearInterval(id);
        }
    }, [])
    return count;
}

export default useIncreseCount
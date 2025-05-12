import { useState,useEffect } from "react";

function useDebounce(input, delay){
    const [value, setValue] = useState(input);
    useEffect(()=>{
        const id = setTimeout(()=>{
            setValue(input);
        },delay)
        return ()=>{
            clearTimeout(id);
        }
    },[input])
    return value;
}
export default useDebounce;
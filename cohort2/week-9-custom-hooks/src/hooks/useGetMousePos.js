import { useState, useEffect } from "react";

const useGetMousePos = ()=>{
    const [mousePos , setMousePos] = useState({x:0, y:0});
    const updateMousePos = (e)=>{
        setMousePos({x:e.clientX, y:e.clientY})
    }
    useEffect(()=>{
        window.addEventListener("mousemove", updateMousePos);
        return ()=>{
            window.removeEventListener("mousemove", updateMousePos);
        }
    }, [])
    return mousePos
}
export default useGetMousePos
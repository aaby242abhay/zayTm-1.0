import React, { useEffect, useState } from 'react'

const useMousePointer = () => {
    const [position, setPosition] = useState({x:0, y:0});
    const onMouseMove = (e)=>{
        setPosition({x:e.clientX, y : e.clientY});
    }
     
    useEffect(()=>{
       
        window.addEventListener('mousemove', onMouseMove);

        return ()=>{
            window.removeEventListener('mousemove', onMouseMove);
        }
    },[])

    return position;
}

export const MousePointer = () => {

    const mousePointer = useMousePointer();
  return (
    <div>
        The position of your Mouse is {mousePointer.x} and {mousePointer.y}.
    </div>
  )
}

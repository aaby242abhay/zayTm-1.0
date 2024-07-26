import React, { useEffect } from 'react'

export const MyComponent = () => {

    useEffect(()=>{
        console.log("Component Mounted");

        return ()=>{
            console.log("Component Unmounted");
        }
    }, [])
  return (
    <>
    <div>
        From Inside MyComponent
    </div>

    </>
  )
}

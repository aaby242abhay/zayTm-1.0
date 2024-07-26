import React, { useEffect } from 'react'

const useInterval = (fn, timeout)=>{
    useEffect(()=>{
        const value = setInterval(fn, timeout);
        return () => clearInterval(value);
    })

}

export const Timer = () => {
    const [count1, setCount1] = React.useState(0);
    const [count2, setCount2] = React.useState(0);
    useInterval(()=>{
        setCount1(c => c+1);
    }, 1000)

    

  return (
    <div>
        The 1st Timer is at {count1} seconds.
        The 2nd Timer is at {2*count1} seconds.
    </div>
  )
}

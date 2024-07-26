import React, { useEffect, useState } from 'react'

const useDebounce = (value, delay) =>{
    const [val, setVal] = useState(value);
    useEffect(()=>{
        const handler = setTimeout(()=>{
            setVal(value);
        }, delay)
        return ()=>{
            clearTimeout(handler);
        }
    }, [value])
    return val;
}

export const DebounceRequests = () => {
    const [inputValue, setInputValue] = useState("");

    const debouncedVal = useDebounce(inputValue, 500);
  return (
    <>
        Debounced Value is -----: {debouncedVal}
        <br/>
        <input type = "text" value = {inputValue} placeholder='Search in Debouncing...' onChange={(e)=>{
            setInputValue(e.target.value);
        }}>
        </input>
    </>
  )
}

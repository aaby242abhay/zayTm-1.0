import React, { useState } from 'react'

const useDebounce = (value, delay) =>{
    useEffect(()=>{
        
    })
}

export const DebounceRequests = () => {
    const [inputValue, setInputValue] = useState("");

    const debouncedVal = useDebounce(inputValue, 500);
  return (
    <input type = "text" value = {inputValue} placeholder='Search in Debouncing...' onChange={(e)=>{
        setInputValue(e.target.value);
    }}>

    </input>
  )
}

import React, { useEffect, useState } from 'react'

const useIsOnline = ()=>{

    const [online, setOnline] = useState(window.navigator.onLine);          //getting the default value of the navigator

    useEffect(()=>{                                                         //useEffect to add event listeners and we do not want to rerender/reRun the hook              
        window.addEventListener('online',()=>{
            setOnline(true);
        })
        window.addEventListener('offline',()=>{
            setOnline(false);
        })
    })
    return online;
}

export const IsOnline = () => {
    const online = useIsOnline();
  return (
    <div>
        {online ? <h1>Online</h1> : <h1>Offline</h1>}
    </div>
  )
}

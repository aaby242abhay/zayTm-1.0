import React, { useEffect } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { MyComponent } from "./components/MyComponent"
import { IsOnline } from "./components/IsOnline";
import  {MousePointer} from "./components/MousePointer";
import { Timer } from "./components/Timer";

function App() {

  const [render, setRender] = React.useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setRender(false);
    },10*1000)
  })

  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<SendMoney />} /> */}
        </Routes>
      </Router>

      {/* {render && <MyComponent />}
      <IsOnline />
      <MousePointer /> */}
      <Timer />
      
    </>
  )
}

export default App

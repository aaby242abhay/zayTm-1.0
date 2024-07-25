import React from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { Signin } from "./components/Signin"
import { Signup } from "./components/Signup"
import { SendMoney } from "./components/SendMoney"
import { Dashboard } from "./components/Dashboard"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/sendmoney" element={<SendMoney />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Navigate to="/signin" />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

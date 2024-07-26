import React from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<SendMoney />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

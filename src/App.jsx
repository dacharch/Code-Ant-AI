import React from 'react'
import SinglePage from './components/SinglePage/SinglePage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Repoistery from './components/Repositories/Repoistery'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SinglePage />} />
        <Route path="/repo" element={<Repoistery/>}/>
      </Routes>
    </Router>


  )
}

export default App
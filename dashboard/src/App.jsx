import React from 'react'
import LandingPage from './Vendordashboard/pages/LandingPage'
import "./App.css"
import { Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
    </Routes>
    </>
  )
}

export default App
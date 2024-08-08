import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import JoinRoom from './pages/joinRoom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<JoinRoom />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

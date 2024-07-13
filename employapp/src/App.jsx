import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import View from './components/View'
import Add from './components/Add'
import { Route, Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<View/>}/>
        <Route path="/a" element={<Add/>}/>
      </Routes>
    </>
  )
}

export default App

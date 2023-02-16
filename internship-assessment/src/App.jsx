import { useState } from 'react'
import './App.css'
import Hero from './Components/Hero'
import Navbar from './Components/atom/Navbar'

function App() {


  return (
    <div className="App bg-[#121B27] m-0 p-0 w-screen h-screen">
      <Navbar />
      <Hero />
    </div>
  )
}

export default App

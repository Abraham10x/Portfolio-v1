import { useState } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import './App.css'


function App() {

  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
    </div>
  )
}

export default App

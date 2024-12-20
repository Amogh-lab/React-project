import React from 'react'
import "./App.css"
import Inputfield from './Components/inputfield'

const App: React.FC= ()=> {
  return (
    <div className="topgap">
      <div className='hero'>
      <h1>Taskify</h1>
      </div>
      <Inputfield />
    </div>
  )
}

export default App

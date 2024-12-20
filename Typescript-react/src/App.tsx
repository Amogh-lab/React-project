import React, {useState} from 'react'
import "./App.css"
import Inputfield from './Components/inputfield'

const App: React.FC= ()=> {
  const [todo, setTodo] = useState<string>("")
  return (
    <div className="topgap">
      <div className='hero'>
      <h1>Taskify</h1>
      </div>
      <Inputfield todo={todo} setTodo={setTodo}/>
    </div>
  )
}

export default App

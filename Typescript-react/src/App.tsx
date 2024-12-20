import React, {useState} from 'react'
import "./App.css"
import Inputfield from './Components/inputfield'
import {Todo} from './model'

const App: React.FC= ()=> {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e : React.FormEvent) => {
     e.preventDefault();

     if(todo){
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);               //{ id: Date.now(), todo, isDone: false } this part adds new task to the array todos
      setTodo("");                                                                 //todos will be of the form todos = [{id: 1, todo: "Task 1", isDone: false}]
    }
  };
  console.log(todo);
  console.log(todos);
  return (
    <div className="topgap">
      <div>

      <h1>Taskify</h1>

      </div>
      <Inputfield todo={todo} setTodo={setTodo} handleAdd = {handleAdd}/>
    </div>
  )
}

export default App

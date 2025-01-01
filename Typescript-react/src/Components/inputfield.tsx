import "./inputbox.css"
interface props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;           //todo is a string used for storing todo list and setTodo is the function for it
  handleAdd: (e : React.FormEvent) => void
}
//typedeff for todo and setTodo using interface

const inputfield = ({todo, setTodo, handleAdd}: props) => {                   //const inputfield: React.FC<props>= ({todo, setTodo}) instead we can also use this
 return (
    <form className="Inputlist" onSubmit={handleAdd}>

        <input value={todo} 
        onChange={(e) => setTodo(e.target.value)}                     //taking string input from the input box e-event 
        type='input' placeholder="Task to do" 
        className="Todobox"/>  
        <button className='todobutton'>Enter</button>
    </form>
  )
}

export default inputfield;
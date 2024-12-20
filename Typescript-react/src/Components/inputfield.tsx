import "./inputbox.css"
interface props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;           //todo is a string used for storing todo list and setTodo is the function for it
}
//typedeff for todo and setTodo using interface
const inputfield = ({todo, setTodo}: props) => {                   //const inputfield: React.FC<props>= ({todo, setTodo}) instead we can also use this
  return (
    <form className="Inputlist">
        <input type='input' placeholder="Task to do" className="Todobox"/>
        <button className='todobutton'>Enter</button>
    </form>
  )
}

export default inputfield;
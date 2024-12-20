import "./inputbox.css"

const inputfield = () => {
  return (
    <form className="Inputlist">
        <input type='input' placeholder="Task to do" className="Todobox"/>
        <button className='todobutton'>Enter</button>
    </form>
  )
}

export default inputfield;
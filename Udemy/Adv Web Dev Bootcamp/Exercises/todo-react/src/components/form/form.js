import "./form.css"

const form = ({addTodo, setInput, inputValue, subText}) => {
  let handleSubmit = (e) => {
    e.preventDefault()
    addTodo(inputValue)
    setInput('')
  }

  let handleChange = (e) => {
    setInput(e.target.value)
  }
  return (
    <form onSubmit={handleSubmit}>
     <input value={inputValue} onChange={handleChange}/>
    <button>{subText}</button>
    </form>
  )
}

export default form
